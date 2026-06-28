import React, { useState } from "react"
import { Link } from "react-router-dom"
import { ChevronDown, HelpCircle } from "lucide-react"
import { useMarketing } from "../context/MarketingContext"

export const FAQ: React.FC = () => {
  const { faqs, loading } = useMarketing()
  const [openFaqId, setOpenFaqId] = useState<string | null>(null)

  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
      
      {/* HEADER */}
      <div className="text-center flex flex-col gap-3 mb-12">
        <span className="text-[10px] font-black tracking-widest text-primary uppercase">HELP DESK FAQs</span>
        <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500">
          Find quick, detailed answers regarding room amenities, access timing rules, booking policies, and app integration.
        </p>
      </div>

      {/* ACCORDION ITEMS */}
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <div className="size-8 border-3 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="flex flex-col gap-3.5">
          {faqs.map((faq) => {
            const isOpen = openFaqId === faq.id
            return (
              <div
                key={faq.id}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full text-left p-4.5 flex items-center justify-between font-bold text-sm text-zinc-800 dark:text-zinc-200 hover:text-primary transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="size-4 text-primary/80 shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown className={`size-4 text-zinc-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                {isOpen && (
                  <div className="px-4.5 pb-4.5 text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-800/50 pt-3 flex flex-col gap-2">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* CONTACT CALLOUT */}
      <div className="text-center mt-12 p-6 bg-zinc-150/40 dark:bg-zinc-900/30 rounded-2xl border border-zinc-200 dark:border-zinc-850">
        <h3 className="font-bold text-sm text-zinc-800 dark:text-zinc-200">Have a custom corporate enquiry?</h3>
        <p className="text-xs text-zinc-400 mt-1">If you need dedicated floor leasing or space reservations of 10+ people, write to us directly.</p>
        <Link to="/contact" className="inline-block mt-3 bg-primary text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-primary/95 transition-colors">
          Contact Support Team
        </Link>
      </div>

    </div>
  )
}
