import { motion } from 'framer-motion'

const About = () => {
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
            <span className="text-[#D32F2F] text-xs font-bold tracking-widest uppercase">About Us</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-8 tracking-tight">
            Building better first-aid.
          </h1>
          
          <p className="text-lg md:text-xl text-[#6B7280] mb-8 leading-relaxed font-light">
            Founded with the mission to eliminate secondary injuries during dressing changes, adhsv brings medical-grade innovation to everyday wound care.
          </p>
          <p className="text-lg md:text-xl text-[#6B7280] leading-relaxed font-light">
            We operate out of India, designing, testing, and manufacturing honest materials that prioritize the healing process above all else.
          </p>
        </motion.div>

        <div className="mt-16 w-full h-[400px] rounded-[2rem] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Laboratory research" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default About
