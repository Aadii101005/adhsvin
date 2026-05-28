import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../redux/store'
import { logout } from '../redux/slices/authSlice'
import { ShoppingCart, User, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../utils/images/adhsv.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth)
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#F7F7F5]/90 backdrop-blur-md border-b border-black/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center h-10 w-40 relative">
          <img src={logo} alt="ADHSV Logo" className="absolute top-1/2 left-0 w-full h-auto -translate-y-1/2 mix-blend-multiply pointer-events-none" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          <Link to="/" className="text-[#6B7280] hover:text-[#1F2937] transition-colors">Home</Link>
          <Link to="/products" className="text-[#6B7280] hover:text-[#1F2937] transition-colors">Products</Link>
          <Link to="/science" className="text-[#6B7280] hover:text-[#1F2937] transition-colors">Science</Link>
          <Link to="/about" className="text-[#6B7280] hover:text-[#1F2937] transition-colors">About</Link>
          <Link to="/contact" className="text-[#6B7280] hover:text-[#1F2937] transition-colors">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/cart" className="relative text-[#6B7280] hover:text-[#1F2937] transition-colors">
            <ShoppingCart className="h-5 w-5" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#D32F2F] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </Link>

          {!isAuthenticated && (
            <Link to="/login" aria-label="Login" className="text-[#6B7280] hover:text-[#1F2937] transition-colors">
              <User className="h-5 w-5" />
            </Link>
          )}

          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <Link to={user?.role === 'admin' ? '/admin' : '/dashboard'} className="flex items-center gap-2 text-[#6B7280] hover:text-[#1F2937] transition-colors">
                <User className="h-4 w-4" />
                <span className="text-sm">{user?.name}</span>
              </Link>
              <button onClick={handleLogout} className="text-sm text-[#6B7280] hover:text-[#D32F2F] transition-colors">Logout</button>
            </div>
          ) : null}
        </div>

        <button className="md:hidden text-[#1F2937]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#F7F7F5] border-b border-black/5 flex flex-col p-6 shadow-xl"
          >
            <div className="flex flex-col gap-4 text-sm font-medium">
              <Link to="/" className="text-[#1F2937]" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/products" className="text-[#1F2937]" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
              <Link to="/science" className="text-[#1F2937]" onClick={() => setIsMobileMenuOpen(false)}>Science</Link>
              <Link to="/about" className="text-[#1F2937]" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link to="/contact" className="text-[#1F2937]" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>

              <div className="h-px bg-black/5 my-2"></div>

              <Link to="/cart" className="flex justify-between items-center text-[#1F2937]" onClick={() => setIsMobileMenuOpen(false)}>
                Cart <span className="bg-[#D32F2F] text-white px-2 py-0.5 rounded-full text-xs">{cartItems.length} items</span>
              </Link>

              {isAuthenticated ? (
                <>
                  <Link to={user?.role === 'admin' ? '/admin' : '/dashboard'} className="text-[#1F2937]" onClick={() => setIsMobileMenuOpen(false)}>Dashboard</Link>
                  <button onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }} className="text-left text-[#D32F2F]">Logout</button>
                </>
              ) : (
                <Link to="/login" aria-label="Login" className="text-[#6B7280] hover:text-[#1F2937] transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  <User className="h-5 w-5" />
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
