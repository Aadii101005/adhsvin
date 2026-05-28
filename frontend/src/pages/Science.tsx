import { motion } from 'framer-motion'

const Science = () => {
  const sciencePoints = [
    'Biomedical science',
    'Moisture Balance',
    'Hydrogel engineering',
    'Sustainable healthcare materials',
  ]

  return (
    <div className="w-full bg-[#F7F7F5] min-h-screen text-[#1F2937] pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-[#D32F2F]"></div>
            <span className="text-[#D32F2F] text-xs font-bold tracking-widest uppercase">The Science</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-8 tracking-tight">
            The Future of Sustainable Wound Care
          </h1>
          
          <p className="text-lg md:text-xl text-[#6B7280] mb-8 leading-relaxed font-light">
            ADHSV represents a new generation of wound healing technology that combines:
          </p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-5xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {sciencePoints.map((point) => (
              <div key={point} className="bg-white border border-[#F3F4F6] rounded-2xl p-5 shadow-sm">
                <p className="font-semibold text-[#1F2937]">{point}</p>
              </div>
            ))}
          </div>

          <p className="text-lg text-[#6B7280] mb-14 leading-relaxed font-light">
            The goal is to create safer, faster, and eco-friendly wound management solutions for hospitals, emergency care, home first-aid, and chronic wound patients.
          </p>

          <div className="bg-white border border-[#F3F4F6] rounded-[2rem] p-8 md:p-10 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1F2937]">Short Summary</h2>
            <p className="text-lg text-[#6B7280] leading-relaxed font-light">
              ADHSV Fast-Adherent Burn Dressing is a biodegradable nano-hydrogel wound care solution scientifically developed to provide antimicrobial protection, moisture-balanced healing, reduced pain, and faster skin recovery for burns and wounds. Using advanced hydrogel technology and biodegradable biopolymers, the dressing supports effective healing while minimizing infection risk and environmental impact.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Science
