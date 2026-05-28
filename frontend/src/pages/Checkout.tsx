import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { CheckCircle2 } from 'lucide-react'

const Checkout = () => {
  const { total } = useSelector((state: RootState) => state.cart)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Order placed successfully!')
    setTimeout(() => {
      navigate('/dashboard')
    }, 2000)
  }

  return (
    <div className="pt-28 pb-16 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-3xl font-bold font-heading mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle2 className="text-primary" /> Shipping Information
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                  <input type="text" required className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                  <input type="text" required className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
                <input type="text" required className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">City</label>
                  <input type="text" required className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">ZIP Code</label>
                  <input type="text" required className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" />
                </div>
              </div>
              
              <h2 className="text-xl font-bold mb-6 mt-10 flex items-center gap-2">
                <CheckCircle2 className="text-primary" /> Payment Details
              </h2>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Card Number</label>
                <input type="text" placeholder="0000 0000 0000 0000" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Expiry Date</label>
                  <input type="text" placeholder="MM/YY" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">CVC</label>
                  <input type="text" placeholder="123" className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none" />
                </div>
              </div>
              
              <button type="submit" className="w-full mt-8 bg-primary text-white py-4 rounded-full font-bold hover:bg-primary-dark transition-colors shadow-lg">
                Pay ${total.toFixed(2)}
              </button>
            </form>
          </div>
          
          <div className="bg-slate-900 text-white p-8 rounded-3xl h-fit">
            <h3 className="text-xl font-bold mb-6">Order Summary</h3>
            <div className="flex justify-between mb-4 text-slate-300">
              <span>Total Amount</span>
              <span className="font-bold text-white">${total.toFixed(2)}</span>
            </div>
            <div className="bg-slate-800 p-4 rounded-xl mt-8">
              <p className="text-sm text-slate-400">Transactions are 100% secure and encrypted.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
