import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Package, Clock, CheckCircle } from 'lucide-react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const { user, token } = useSelector((state: RootState) => state.auth)
  const [orders, setOrders] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/orders/my', {
          headers: { Authorization: `Bearer ${token}` }
        })
        setOrders(data.data)
      } catch (error) {
        console.error('Error fetching orders:', error)
      } finally {
        setLoading(false)
      }
    }
    
    if (token) {
      fetchOrders()
    }
  }, [token])

  const processingCount = orders.filter(o => o.status === 'processing').length
  const completedCount = orders.filter(o => o.status === 'delivered').length

  return (
    <div className="pt-28 pb-16 min-h-screen bg-[#F7F7F5]">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl font-bold font-heading mb-2">My Dashboard</h1>
        <p className="text-slate-500 mb-8">Welcome back, {user?.name}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center">
              <Package size={24} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-500">Total Orders</h3>
              <p className="text-2xl font-bold">{orders.length}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center">
              <Clock size={24} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-500">Processing</h3>
              <p className="text-2xl font-bold">{processingCount}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
              <CheckCircle size={24} />
            </div>
            <div>
              <h3 className="text-sm font-medium text-slate-500">Completed</h3>
              <p className="text-2xl font-bold">{completedCount}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 md:p-8">
          <h2 className="text-xl font-bold mb-6">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100 text-slate-500 text-sm">
                  <th className="pb-4 font-medium">Order ID</th>
                  <th className="pb-4 font-medium">Date</th>
                  <th className="pb-4 font-medium">Status</th>
                  <th className="pb-4 font-medium">Total</th>
                  <th className="pb-4 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-slate-500">Loading orders...</td>
                  </tr>
                ) : orders.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-slate-500">
                      You have no recent orders. <br/>
                      <Link to="/products" className="text-primary hover:underline mt-2 inline-block">Start Shopping</Link>
                    </td>
                  </tr>
                ) : (
                  orders.map(order => (
                    <tr key={order.id} className="border-b border-slate-50">
                      <td className="py-4 font-medium">#ORD-{order.id.toString().padStart(3, '0')}</td>
                      <td className="py-4 text-slate-500">{new Date(order.createdAt).toLocaleDateString()}</td>
                      <td className="py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === 'delivered' ? 'bg-green-50 text-green-600' : 
                          order.status === 'processing' ? 'bg-amber-50 text-amber-600' : 
                          'bg-blue-50 text-blue-600'
                        }`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </td>
                      <td className="py-4 font-medium">${order.totalAmount.toFixed(2)}</td>
                      <td className="py-4"><button className="text-primary text-sm font-medium">View</button></td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
