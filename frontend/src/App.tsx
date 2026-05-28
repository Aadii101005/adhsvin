import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import AdminDashboard from './pages/AdminDashboard'
import Science from './pages/Science'
import About from './pages/About'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Shipping from './pages/Shipping'
import Track from './pages/Track'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import ProtectedRoute from './components/ProtectedRoute'
import AdminRoute from './components/AdminRoute'
import { RootState } from './redux/store'

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)

  useEffect(() => {
    if (isAuthenticated) {
      return
    }

    const loginReminder = window.setInterval(() => {
      const isAuthPage = location.pathname === '/login' || location.pathname === '/register'

      if (!isAuthPage) {
        navigate('/login')
      }
    }, 5 * 60 * 1000)

    return () => window.clearInterval(loginReminder)
  }, [isAuthenticated, location.pathname, navigate])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="science" element={<Science />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
        <Route path="shipping" element={<Shipping />} />
        <Route path="track" element={<Track />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
      </Route>
    </Routes>
  )
}

export default App
