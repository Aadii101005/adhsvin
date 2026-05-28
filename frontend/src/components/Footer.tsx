import { Link } from 'react-router-dom'
import { Globe, Link as LinkIcon, Mail } from 'lucide-react'
import logo from '../utils/images/adhsv.png'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center h-10 w-40 relative mb-6 bg-white rounded-md overflow-hidden">
            <img src={logo} alt="ADHSV Logo" className="absolute top-1/2 left-0 w-full h-auto -translate-y-1/2 pointer-events-none" />
          </Link>
          <p className="text-sm leading-relaxed mb-6">
            Next-generation biodegradable hydrogel-based wound healing. Advanced care for a sustainable future.
          </p>
          <div className="flex gap-4">
            <a href="https://adhsv.in" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Globe size={20} /></a>
            <a href="https://adhsv.in" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><LinkIcon size={20} /></a>
            <a href="mailto:info@adhsv.in" className="hover:text-primary transition-colors"><Mail size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products" className="hover:text-primary transition-colors">Shop</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Reviews</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            <li><Link to="/shipping" className="hover:text-primary transition-colors">Shipping & Returns</Link></li>
            <li><Link to="/track" className="hover:text-primary transition-colors">Track Order</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
        <p>&copy; {new Date().getFullYear()} ADHSV. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
