import { Link } from 'react-router-dom'

const Shipping = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#F7F7F5] text-[#1F2937]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto bg-white rounded-[2rem] p-10 shadow-xl border border-[#E5E7EB]">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#D32F2F]"></div>
            <span className="text-[#D32F2F] text-xs font-bold uppercase tracking-widest">Shipping & Returns</span>
          </div>
          <h1 className="text-4xl font-bold mb-6">Shipping & Returns</h1>
          <p className="text-[#4B5563] leading-relaxed mb-4">We offer fast, reliable shipping across India. Orders are usually processed within 1-2 business days.</p>
          <ul className="list-disc list-inside text-[#4B5563] space-y-3">
            <li>Standard delivery: 3-5 business days</li>
            <li>Expedited delivery available at checkout</li>
            <li>Returns accepted within 14 days if the product is unopened and sealed</li>
          </ul>
          <p className="mt-6">Need help? <Link to="/contact" className="text-[#D32F2F] hover:underline">Contact us</Link> and our support team will assist.</p>
        </div>
      </div>
    </div>
  )
}

export default Shipping
