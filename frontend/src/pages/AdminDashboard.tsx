import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Users, DollarSign, ShoppingBag, Activity } from 'lucide-react'

const data = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 2000 },
  { name: 'Apr', revenue: 2780 },
  { name: 'May', revenue: 1890 },
  { name: 'Jun', revenue: 2390 },
  { name: 'Jul', revenue: 3490 },
]

const AdminDashboard = () => {
  return (
    <div className="pt-28 pb-16 min-h-screen bg-[#F7F7F5]">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl font-bold font-heading mb-8">Admin Overview</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { title: 'Total Revenue', value: '$24,500', icon: <DollarSign size={24} className="text-green-500" />, bg: 'bg-green-50' },
            { title: 'Total Users', value: '1,240', icon: <Users size={24} className="text-blue-500" />, bg: 'bg-blue-50' },
            { title: 'Total Orders', value: '384', icon: <ShoppingBag size={24} className="text-purple-500" />, bg: 'bg-purple-50' },
            { title: 'Conversion Rate', value: '3.2%', icon: <Activity size={24} className="text-amber-500" />, bg: 'bg-amber-50' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
              <div className={`w-14 h-14 ${stat.bg} rounded-xl flex items-center justify-center`}>
                {stat.icon}
              </div>
              <div>
                <h3 className="text-sm font-medium text-slate-500 mb-1">{stat.title}</h3>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm mb-8">
          <h2 className="text-xl font-bold mb-6">Revenue Analytics</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} tickFormatter={(val) => `$${val}`} />
                <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="revenue" fill="#0EA5E9" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
