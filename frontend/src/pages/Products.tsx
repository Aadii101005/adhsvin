import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ShoppingBag, Star, ArrowRight } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'
import { toast } from 'sonner'
import Adhsv5Img from '../utils/images/adhsv 5.png'

const PRODUCTS = [
  { id: 1, name: 'ADHSV Fast-Adherent Burn Dressing', price: 8.99, image: Adhsv5Img, rating: 4.9, category: 'Wound Care' },
  { id: 2, name: 'ADHSV Burn Dressing Sachet (Orange)', price: 4.99, image: '/images/burn-sachet.jpg', rating: 4.8, category: 'Burn Care' },
  { id: 3, name: 'ADHSV Clinical Combo Pack', price: 129.99, image: '/images/in-practice.jpg', rating: 5.0, category: 'Clinical' }
]

const Products = () => {
  const [filter, setFilter] = useState('All')
  const dispatch = useDispatch()
  
  const handleAddToCart = (product: any, e: React.MouseEvent) => {
    e.preventDefault()
    dispatch(addToCart({ ...product, quantity: 1 }))
    toast.success(`${product.name} added to cart`)
  }

  const filteredProducts = filter === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter)

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#F7F7F5] text-[#1F2937]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#D32F2F]"></div>
              <span className="text-[#D32F2F] text-xs font-bold tracking-widest uppercase">Our Products</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Shop adhsv.</h1>
            <p className="text-[#6B7280] max-w-xl text-lg font-light">Advanced hydrogel solutions for every healing need. Developed by biotech experts.</p>
            <div className="mt-8 rounded-[2rem] overflow-hidden border border-[#E5E7EB] bg-white shadow-xl max-w-xs">
              <img src={Adhsv5Img} alt="ADHSV featured product" className="w-full object-cover" />
            </div>
          </motion.div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {['All', 'Box Pack', 'Single Use', 'Clinical'].map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all ${filter === cat ? 'bg-[#D32F2F] text-white shadow-lg shadow-red-900/20' : 'bg-transparent border border-[#E5E7EB] text-[#1F2937] hover:border-[#D1D5DB]'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden border border-[#F3F4F6] shadow-sm hover:shadow-xl transition-all group flex flex-col"
            >
              <Link to={`/products/${product.id}`} className="block relative h-80 overflow-hidden bg-[#F7F7F5] p-8 flex items-center justify-center">
                <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" />
                <div className="absolute top-6 left-6 bg-white px-4 py-1.5 rounded-full text-xs font-bold text-[#1F2937] shadow-sm">
                  {product.category}
                </div>
              </Link>
              
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[#D32F2F] mb-3">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-[#6B7280] text-sm font-medium">{product.rating}</span>
                  </div>
                  <Link to={`/products/${product.id}`}>
                    <h3 className="font-bold text-xl mb-2 text-[#1F2937] hover:text-[#D32F2F] transition-colors line-clamp-2 leading-tight">{product.name}</h3>
                  </Link>
                </div>
                
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#F3F4F6]">
                  <span className="text-2xl font-bold text-[#1F2937]">${product.price}</span>
                  <button 
                    onClick={(e) => handleAddToCart(product, e)}
                    className="w-12 h-12 rounded-full bg-[#F7F7F5] flex items-center justify-center text-[#1F2937] hover:bg-[#D32F2F] hover:text-white transition-colors border border-[#E5E7EB]"
                  >
                    <ShoppingBag size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
