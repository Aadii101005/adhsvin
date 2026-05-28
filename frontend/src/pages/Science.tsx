import { motion } from 'framer-motion'
import { FlaskConical, Beaker, ShieldCheck } from 'lucide-react'

const Science = () => {
  return (
    <div className="w-full bg-[#F7F7F5] min-h-screen text-[#1F2937] pt-32 pb-16">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-[#D32F2F]"></div>
            <span className="text-[#D32F2F] text-xs font-bold tracking-widest uppercase">The Science</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-8 tracking-tight">
            Engineered for healing.
          </h1>
          
          <p className="text-lg md:text-xl text-[#6B7280] mb-12 leading-relaxed font-light">
            Our hydrogel technology represents a breakthrough in wound management, providing an optimal environment for cellular regeneration without relying on synthetic chemicals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#F3F4F6]">
            <FlaskConical className="w-8 h-8 text-[#D32F2F] mb-6" />
            <h3 className="text-xl font-bold mb-3">Advanced Polymers</h3>
            <p className="text-[#6B7280] leading-relaxed">Our proprietary blend of natural polymers creates a matrix that mimics human tissue architecture.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#F3F4F6]">
            <Beaker className="w-8 h-8 text-[#D32F2F] mb-6" />
            <h3 className="text-xl font-bold mb-3">Moisture Balance</h3>
            <p className="text-[#6B7280] leading-relaxed">Smart absorption adapts to exudate levels, maintaining the perfect moisture balance for accelerated healing.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#F3F4F6]">
            <ShieldCheck className="w-8 h-8 text-[#D32F2F] mb-6" />
            <h3 className="text-xl font-bold mb-3">Microbial Barrier</h3>
            <p className="text-[#6B7280] leading-relaxed">The physical structure prevents bacterial penetration while remaining breathable to oxygen.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Science
