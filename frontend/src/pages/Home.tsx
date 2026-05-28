import { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Timer, Shield, Leaf, Sparkles, ArrowRight } from 'lucide-react'
import InPracticeImg from '../utils/images/image.png'
import HeroImg1 from '../utils/images/image copy.png'
import HeroImg2 from '../utils/images/image copy 2.png'
import Adhsv5Img from '../utils/images/adhsv 5.png'

type RequestForm = {
  name: string
  address: string
  contactNumber: string
}

const Home = () => {
  const [isRequestFormOpen, setRequestFormOpen] = useState(false)
  const [requestForm, setRequestForm] = useState<RequestForm>({ name: '', address: '', contactNumber: '' })

  const handleRequestChange = (field: keyof RequestForm, value: string) => {
    setRequestForm({ ...requestForm, [field]: value })
  }

  const handleRequestSubmit = async () => {
    if (!requestForm.name || !requestForm.address || !requestForm.contactNumber) {
      alert('Please fill in all fields.')
      return
    }

    try {
      await axios.post('http://localhost:5000/api/request-samples', requestForm)
      alert('Sample request saved successfully.')
      setRequestForm({ name: '', address: '', contactNumber: '' })
      setRequestFormOpen(false)
    } catch (error) {
      console.error(error)
      alert('Unable to save request sample. Please try again later.')
    }
  }

  return (
    <div className="w-full bg-[#F7F7F5] min-h-screen text-[#1F2937]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-[#D32F2F]"></div>
              <span className="text-[#D32F2F] text-xs font-bold tracking-widest uppercase">Wound Care, Reimagined</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
              <span className="block text-[#1F2937]">Fast-adherent</span>
              <span className="block text-[#1F2937]">dressings.</span>
              <span className="block text-[#D32F2F]">Honest materials.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#6B7280] mb-12 max-w-lg leading-relaxed font-light">
              adhsv.in builds sterile wound and burn dressings designed to bond instantly, minimise trauma, and keep first-aid simple — without any synthetic chemicals.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Link to="/products" className="bg-[#D32F2F] hover:bg-[#B71C1C] text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-2">
                Explore products <ArrowRight size={18} />
              </Link>
              <button
                type="button"
                onClick={() => setRequestFormOpen(true)}
                className="bg-transparent border border-[#E5E7EB] hover:border-[#D1D5DB] text-[#1F2937] px-8 py-4 rounded-full font-semibold transition-all"
              >
                Request samples
              </button>
            </div>
            
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[450px] md:h-[600px] w-full bg-[#FAF0ED] rounded-[2rem] md:rounded-[3rem] shadow-inner overflow-hidden flex items-center justify-center"
          >
            <div className="relative w-[90%] md:w-[85%] h-full flex items-center justify-center">
              {/* Left Card - Red Sachet (Front) */}
              <motion.img 
                whileHover={{ y: -10 }}
                src={HeroImg1} 
                alt="Wound Dressing Sachet" 
                className="absolute left-0 z-20 w-[55%] md:w-[50%] h-auto rounded-3xl md:rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] object-contain bg-white"
                style={{ top: '12%' }}
              />
              
              {/* Right Card - Orange Sachet (Back) */}
              <motion.img 
                whileHover={{ y: -10 }}
                src={HeroImg2} 
                alt="Burn Dressing Sachet" 
                className="absolute right-0 z-10 w-[52%] md:w-[48%] h-auto rounded-3xl md:rounded-[2.5rem] shadow-lg object-contain bg-[#F4F4F4]"
                style={{ top: '25%' }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {isRequestFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-8">
          <div className="w-full max-w-3xl rounded-[2rem] bg-white p-8 shadow-2xl border border-[#E5E7EB]">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#D32F2F] font-bold">Request Samples</p>
                <h2 className="text-3xl font-bold text-[#1F2937]">Send your details</h2>
              </div>
              <button
                type="button"
                onClick={() => setRequestFormOpen(false)}
                className="text-[#6B7280] hover:text-[#1F2937] font-semibold"
              >
                Close
              </button>
            </div>
            <div className="grid gap-6">
              <label className="block">
                <span className="text-sm font-medium text-[#1F2937]">Name</span>
                <input
                  type="text"
                  value={requestForm.name}
                  onChange={(e) => handleRequestChange('name', e.target.value)}
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-[#E5E7EB] px-4 py-3 bg-[#F7F7F5] focus:outline-none focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F]"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-[#1F2937]">Address</span>
                <input
                  type="text"
                  value={requestForm.address}
                  onChange={(e) => handleRequestChange('address', e.target.value)}
                  placeholder="Clinic or delivery address"
                  className="mt-2 w-full rounded-xl border border-[#E5E7EB] px-4 py-3 bg-[#F7F7F5] focus:outline-none focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F]"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-[#1F2937]">Contact Number</span>
                <input
                  type="tel"
                  value={requestForm.contactNumber}
                  onChange={(e) => handleRequestChange('contactNumber', e.target.value)}
                  placeholder="Mobile or phone number"
                  className="mt-2 w-full rounded-xl border border-[#E5E7EB] px-4 py-3 bg-[#F7F7F5] focus:outline-none focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F]"
                />
              </label>
              <button
                type="button"
                onClick={handleRequestSubmit}
                className="w-full rounded-full bg-[#D32F2F] px-6 py-4 text-white font-semibold transition hover:bg-[#B71C1C]"
              >
                Submit request
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Certification Ribbon */}
      <div className="w-full border-y border-[#E5E7EB] bg-[#F7F7F5] py-4 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center text-xs font-medium text-[#6B7280] tracking-widest uppercase">
            <span>ISO 13485 Process</span>
            <span className="hidden md:inline">•</span>
            <span>CE-Ready Packaging</span>
            <span className="hidden md:inline">•</span>
            <span>Made In India</span>
            <span className="hidden md:inline">•</span>
            <span>Latex-Free</span>
            <span className="hidden lg:inline">•</span>
            <span className="hidden lg:inline">For Clinics & Home Kits</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#D32F2F]"></div>
              <span className="text-[#D32F2F] text-xs font-bold tracking-widest uppercase">Why adhsv</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-md text-[#1F2937]">
              Built around the moment a wound is dressed.
            </h2>
            <div className="mt-10 max-w-md rounded-[2rem] overflow-hidden border border-[#F3F4F6] bg-white shadow-xl">
              <img src={Adhsv5Img} alt="ADHSV product" className="w-full object-cover" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#F3F4F6]">
              <Timer className="w-8 h-8 text-[#D32F2F] mb-6" />
              <h3 className="text-xl font-bold mb-3 text-[#1F2937]">Instant adherence</h3>
              <p className="text-[#6B7280] leading-relaxed">Bonds in seconds, even on irregular surfaces — no taping, no fumbling.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#F3F4F6]">
              <Shield className="w-8 h-8 text-[#D32F2F] mb-6" />
              <h3 className="text-xl font-bold mb-3 text-[#1F2937]">Protects the wound</h3>
              <p className="text-[#6B7280] leading-relaxed">Sterile barrier shielding against contaminants and re-injury.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#F3F4F6]">
              <Leaf className="w-8 h-8 text-[#D32F2F] mb-6" />
              <h3 className="text-xl font-bold mb-3 text-[#1F2937]">No synthetic chemicals</h3>
              <p className="text-[#6B7280] leading-relaxed">Skin-friendly substrate and adhesive system, hypoallergenic by design.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#F3F4F6]">
              <Sparkles className="w-8 h-8 text-[#D32F2F] mb-6" />
              <h3 className="text-xl font-bold mb-3 text-[#1F2937]">Minimises trauma</h3>
              <p className="text-[#6B7280] leading-relaxed">Lifts off cleanly. No torn skin, no second injury at removal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* In Practice Segment */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 h-[500px] w-full rounded-[2rem] overflow-hidden bg-white p-8 border border-[#F3F4F6]">
            <img 
              src={InPracticeImg} 
              alt="Medical professional applying dressing" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#D32F2F]"></div>
              <span className="text-[#D32F2F] text-xs font-bold tracking-widest uppercase">In Practice</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#1F2937]">
              From clinic counters to ambulances.
            </h2>
            <p className="text-lg text-[#6B7280] mb-8 leading-relaxed max-w-lg">
              Each pack is a complete, sterile dressing event — open, apply, done. Designed for paramedics, nurses, factory floors and home kits where speed and simplicity matter most.
            </p>
            <Link to="/products" className="inline-flex items-center gap-2 font-semibold text-[#1F2937] hover:text-[#D32F2F] transition-colors">
              How it works <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Bulk Order CTA */}
      <section className="py-16 px-6 md:px-12 pb-32">
        <div className="container mx-auto bg-[#D32F2F] rounded-[2rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-10 shadow-2xl shadow-red-900/20">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Stock smarter first-aid for your team.</h2>
            <p className="text-white/80 text-lg">
              Bulk orders, custom kit configurations and distributor enquiries — we ship across India.
            </p>
          </div>
          <button className="bg-white text-[#1F2937] px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors whitespace-nowrap">
            Talk to us <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
