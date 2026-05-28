import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { removeFromCart, clearCart } from '../redux/slices/cartSlice'
import { Link, useNavigate } from 'react-router-dom'
import { Trash2, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Cart = () => {
  const { items, total } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  if (items.length === 0) {
    return (
      <div className="pt-28 sm:pt-32 pb-20 md:pb-24 min-h-[70vh] flex flex-col items-center justify-center bg-slate-50 px-4 text-center">
        <div className="w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center mb-6">
          <Trash2 className="text-slate-400 w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold font-heading mb-4">Your cart is empty</h2>
        <p className="text-slate-500 mb-8">Looks like you haven't added any products yet.</p>
        <Link to="/products" className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20">
          Start Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-24 sm:pt-28 pb-16 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <h1 className="text-3xl font-bold font-heading mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 space-y-6">
            {items.map((item, idx) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={item.id} 
                className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm"
              >
                <div className="w-24 h-24 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 flex flex-col sm:flex-row justify-between items-center w-full">
                  <div className="text-center sm:text-left mb-4 sm:mb-0">
                    <h3 className="font-bold text-lg text-slate-900">{item.name}</h3>
                    <p className="text-slate-500 text-sm">Qty: {item.quantity}</p>
                  </div>
                  
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</span>
                    <button 
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm h-fit"
          >
            <h3 className="text-xl font-bold mb-6 border-b border-slate-100 pb-4">Order Summary</h3>
            
            <div className="space-y-4 mb-6 text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium text-slate-900">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-medium text-slate-900">Free</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-4 border-t border-slate-100 mb-8">
              <span className="text-lg font-bold">Total</span>
              <span className="text-2xl font-bold text-primary">${total.toFixed(2)}</span>
            </div>
            
            <button 
              onClick={() => navigate('/checkout')}
              className="w-full bg-slate-900 text-white py-4 rounded-full font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2 shadow-xl"
            >
              Proceed to Checkout <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => dispatch(clearCart())}
              className="w-full mt-4 text-slate-500 text-sm hover:text-red-500 transition-colors"
            >
              Clear Cart
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Cart
