import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../redux/slices/authSlice'
import logo from '../utils/images/adhsv.png'
import { toast } from 'sonner'
import axios from 'axios'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password
      })
      
      const { user, token } = response.data
      dispatch(setCredentials({ user, token }))
      
      toast.success('Account created successfully!')
      if (user.role === 'admin') {
        navigate('/admin')
      } else {
        navigate('/dashboard')
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'Registration failed. Please try again.')
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-20 px-4">
      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 w-full max-w-md border border-slate-100">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="ADHSV Logo" className="h-12 w-12" />
        </div>
        <h2 className="text-3xl font-bold font-heading text-center mb-2">Create Account</h2>
        <p className="text-slate-500 text-center mb-8">Join the sustainable healing revolution</p>
        
        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input 
              type="text" 
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" 
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input 
              type="email" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" 
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" 
              placeholder="••••••••"
            />
          </div>
          
          <button type="submit" className="w-full bg-slate-900 text-white py-3.5 rounded-full font-bold hover:bg-primary transition-colors shadow-lg">
            Create Account
          </button>
        </form>
        
        <p className="text-center mt-6 text-slate-500 text-sm">
          Already have an account? <Link to="/login" className="text-primary font-medium hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
