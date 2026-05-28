import { Link } from 'react-router-dom'

const Faq = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#F7F7F5] text-[#1F2937]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto bg-white rounded-[2rem] p-10 shadow-xl border border-[#E5E7EB]">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#D32F2F]"></div>
            <span className="text-[#D32F2F] text-xs font-bold uppercase tracking-widest">FAQ</span>
          </div>
          <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
          <div className="space-y-8 text-[#4B5563]">
            <div>
              <h2 className="font-semibold text-xl mb-2">How do I order adhsv products?</h2>
              <p>Visit the <Link to="/products" className="text-[#D32F2F] hover:underline">Shop</Link> page, choose your product, and add it to your cart.</p>
            </div>
            <div>
              <h2 className="font-semibold text-xl mb-2">Can I track my order?</h2>
              <p>Yes — use the <Link to="/track" className="text-[#D32F2F] hover:underline">Track Order</Link> page once your purchase is confirmed.</p>
            </div>
            <div>
              <h2 className="font-semibold text-xl mb-2">Is adhsv safe for sensitive skin?</h2>
              <p>Our hydrogel dressings are designed to be hypoallergenic and free from synthetic chemicals.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
