import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Shield, Leaf, Star, Plus, Minus } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'
import { toast } from 'sonner'

const PRODUCTS = {
  '1': { id: 1, name: 'ADHSV Standard Patch', price: 29.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', rating: 4.8, category: 'Wound Care', description: 'Our signature biodegradable hydrogel patch designed for minor to moderate wounds. Provides an optimal moist healing environment while preventing bacterial infection.' }
}

const ProductDetail = () => {
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  
  // In a real app, fetch from API
  const product = PRODUCTS[id as keyof typeof PRODUCTS] || PRODUCTS['1']

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }))
    toast.success(`Added ${quantity} ${product.name} to cart`)
  }

  return (
    <div className="pt-24 sm:pt-28 pb-16 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="mb-8">
          <Link to="/products" className="text-slate-500 hover:text-primary transition-colors text-sm font-medium">
            &larr; Back to Products
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-white p-4 sm:p-6 md:p-12 rounded-2xl md:rounded-3xl shadow-sm border border-slate-100">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-2xl overflow-hidden bg-slate-100 aspect-square"
          >
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-4 w-max">
              {product.category}
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-4 text-slate-900">{product.name}</h1>
            
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
              <div className="flex items-center gap-1 text-amber-400">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className={`w-5 h-5 ${star <= product.rating ? 'fill-current' : 'text-slate-300'}`} />
                ))}
              </div>
              <span className="text-slate-500 text-sm">(124 reviews)</span>
            </div>
            
            <div className="text-3xl font-bold text-slate-900 mb-6">${product.price}</div>
            
            <p className="text-slate-600 leading-relaxed mb-8">{product.description}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center justify-between border border-slate-200 rounded-full px-4 py-3 w-full sm:w-32 bg-slate-50">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-slate-500 hover:text-slate-900"><Minus size={18} /></button>
                <span className="font-semibold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="text-slate-500 hover:text-slate-900"><Plus size={18} /></button>
              </div>
              
              <button onClick={handleAddToCart} className="flex-1 bg-primary hover:bg-primary-dark text-white rounded-full py-3 font-semibold shadow-lg shadow-primary/20 transition-all active:scale-95">
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-slate-100">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-indigo-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-sm">Clinically Tested</h4>
                  <p className="text-xs text-slate-500">Approved for medical use</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Leaf className="w-5 h-5 text-secondary mt-1" />
                <div>
                  <h4 className="font-semibold text-sm">100% Biodegradable</h4>
                  <p className="text-xs text-slate-500">Zero plastic waste</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
