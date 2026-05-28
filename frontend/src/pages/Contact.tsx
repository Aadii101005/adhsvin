import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  return (
    <div className="w-full bg-[#F7F7F5] min-h-screen text-[#1F2937] pt-28 sm:pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-[#D32F2F]"></div>
            <span className="text-[#D32F2F] text-xs font-bold tracking-widest uppercase">Contact Us</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mb-8 tracking-tight">
            Let's talk.
          </h1>
          
          <p className="text-base sm:text-lg text-[#6B7280] mb-10 md:mb-12 leading-relaxed font-light max-w-md">
            Whether you are looking to place a bulk order, request samples for your clinic, or just learn more about our technology.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-[#D32F2F] mt-1" />
              <div>
                <h4 className="font-bold text-lg">Email us</h4>
                <p className="text-[#6B7280]">adhsvin@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-[#D32F2F] mt-1" />
              <div>
                <h4 className="font-bold text-lg">Call us</h4>
                <p className="text-[#6B7280]">+91 8789989514</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#D32F2F] mt-1" />
              <div>
                <h4 className="font-bold text-lg">Visit us</h4>
                <p className="text-[#6B7280]">Mumbai, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-sm border border-[#F3F4F6]"
        >
          <h3 className="text-2xl font-bold mb-6">Send a message</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#1F2937] mb-2">Name</label>
              <input type="text" className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 focus:outline-none focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] transition-all bg-[#F7F7F5]" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1F2937] mb-2">Email</label>
              <input type="email" className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 focus:outline-none focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] transition-all bg-[#F7F7F5]" placeholder="you@company.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1F2937] mb-2">Message</label>
              <textarea rows={4} className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 focus:outline-none focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F] transition-all bg-[#F7F7F5]" placeholder="How can we help?"></textarea>
            </div>
            <button type="button" className="w-full bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-8 py-4 rounded-full font-bold transition-all">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
