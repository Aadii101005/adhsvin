import { Link } from 'react-router-dom'

const Track = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#F7F7F5] text-[#1F2937]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto bg-white rounded-[2rem] p-10 shadow-xl border border-[#E5E7EB]">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#D32F2F]"></div>
            <span className="text-[#D32F2F] text-xs font-bold uppercase tracking-widest">Track Order</span>
          </div>
          <h1 className="text-4xl font-bold mb-6">Track Your Order</h1>
          <p className="text-[#4B5563] leading-relaxed mb-4">Enter your order details at checkout to see the latest status and estimated delivery date.</p>
          <p className="text-[#4B5563]">If you don’t have tracking information yet, it will appear here within 24 hours after dispatch.</p>
          <p className="mt-6">Questions? <Link to="/contact" className="text-[#D32F2F] hover:underline">Contact support</Link>.</p>
        </div>
      </div>
    </div>
  )
}

export default Track
