import { motion } from 'framer-motion'

const About = () => {
  const focusPoints = [
    'Medical efficiency',
    'Patient comfort',
    'Environmental sustainability',
    'Accessible first-aid care',
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
            <span className="text-[#D32F2F] text-xs font-bold tracking-widest uppercase">About Us</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-8 tracking-tight text-[#1F2937]">
            Healing should be fast, safe, natural, and accessible.
          </h1>
          
          <p className="text-lg md:text-xl text-[#6B7280] mb-8 leading-relaxed font-light">
            At ADHSV, we believe that healing should be fast, safe, natural, and accessible. Our mission is to transform modern wound and burn care through innovative biodegradable solutions that not only protect the skin but also support faster recovery with minimal environmental impact.
          </p>
          <p className="text-lg md:text-xl text-[#6B7280] mb-12 leading-relaxed font-light">
            Founded by <strong className="font-bold text-[#1F2937]">Kritesh Kumar Dharmendra Ojha, Founder & CEO of ADHSV</strong>, the company was built with a vision to create advanced healthcare products that combine medical innovation, sustainability, and practical emergency care for people everywhere.
          </p>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-10 max-w-5xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1F2937]">Who We Are</h2>
          <p className="text-lg text-[#6B7280] mb-8 leading-relaxed font-light">
            ADHSV is a healthcare innovation company focused on developing next-generation wound care products designed for modern medical and emergency needs. We specialize in advanced biodegradable burn and wound dressings that provide immediate protection, reduce trauma, and promote faster healing without relying on harsh synthetic chemicals.
          </p>

          <p className="text-lg text-[#6B7280] mb-6 leading-relaxed font-light">
            Our products are created with the vision of combining:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {focusPoints.map((point) => (
              <div key={point} className="bg-white border border-[#F3F4F6] rounded-2xl p-5 shadow-sm">
                <p className="font-semibold text-[#1F2937]">{point}</p>
              </div>
            ))}
          </div>

          <p className="text-lg text-[#6B7280] leading-relaxed font-light">
            We understand that during burn injuries and skin damage, every second matters. That is why our solutions are designed to deliver quick application, reliable protection, and safe healing support when immediate care is needed the most.
          </p>
        </motion.section>
      </div>
    </div>
  )
}

export default About
