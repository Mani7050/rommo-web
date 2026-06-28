import React, { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useMarketing } from "../context/MarketingContext"
import { submitInquiry } from "../lib/db-service"
import { toast } from "sonner"
import { motion } from "framer-motion"

export const Contact: React.FC = () => {
  const { settings } = useMarketing()

  // Contact form state
  const [contactName, setContactName] = useState("")
  const [contactEmail, setContactEmail] = useState("")
  const [contactPhone, setContactPhone] = useState("")
  const [contactMessage, setContactMessage] = useState("")
  const [formSubmitting, setFormSubmitting] = useState(false)

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!contactName || !contactEmail || !contactPhone || !contactMessage) {
      toast.error("Please fill all contact fields.")
      return
    }

    setFormSubmitting(true)
    try {
      await submitInquiry({
        name: contactName,
        email: contactEmail,
        phone: contactPhone,
        message: contactMessage
      })
      toast.success("Inquiry registered successfully! Our team will contact you shortly.")
      setContactName("")
      setContactEmail("")
      setContactPhone("")
      setContactMessage("")
    } catch (err) {
      console.error(err)
      toast.error("Failed to submit inquiry. Please try again.")
    } finally {
      setFormSubmitting(false)
    }
  }

  if (!settings) return null

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* INFO COLUMN */}
        <div className="flex flex-col gap-6 max-w-md">
          <span className="self-start px-3 py-1 bg-primary/10 text-primary text-[10px] font-black tracking-widest uppercase rounded-full">
            REACH OUT
          </span>
          <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-snug">
            Unlock Your Premium Desk Membership Today
          </h1>
          <p className="text-xs sm:text-sm text-zinc-550 dark:text-zinc-400 leading-relaxed">
            Have specific questions about office floor leases, private corporate cabins, or dedicated event setups? Fill in the form or contact our team directly.
          </p>

          <div className="flex flex-col gap-4 mt-4">
            <div className="flex items-center gap-3">
              <span className="p-2.5 bg-white dark:bg-zinc-900 rounded-xl text-primary border border-zinc-200 dark:border-zinc-800 shadow-xs"><Mail className="size-5" /></span>
              <div>
                <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide">Write to Us</h4>
                <span className="text-xs text-zinc-700 dark:text-zinc-200 font-bold">{settings.contact.email}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="p-2.5 bg-white dark:bg-zinc-900 rounded-xl text-primary border border-zinc-200 dark:border-zinc-800 shadow-xs"><Phone className="size-5" /></span>
              <div>
                <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide">Call Directly</h4>
                <span className="text-xs text-zinc-700 dark:text-zinc-200 font-bold">{settings.contact.phone}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="p-2.5 bg-white dark:bg-zinc-900 rounded-xl text-primary border border-zinc-200 dark:border-zinc-800 shadow-xs"><MapPin className="size-5" /></span>
              <div>
                <h4 className="text-[10px] font-bold text-zinc-400 uppercase tracking-wide">Visit Hub</h4>
                <span className="text-xs text-zinc-700 dark:text-zinc-200 font-bold leading-normal">{settings.contact.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* FORM COLUMN */}
        <div className="bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xs">
          <h3 className="font-extrabold text-lg text-zinc-900 dark:text-white mb-2">Send an Inquiry</h3>
          <p className="text-xs text-zinc-450 dark:text-zinc-500 mb-6">Receive detailed pricing brochure and floor maps directly via email.</p>

          <form onSubmit={handleInquirySubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider">Your Name</label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 rounded-xl p-3 text-xs focus:outline-hidden focus:border-primary text-zinc-800 dark:text-white"
                  placeholder="e.g. Mani Kumar"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider">Your Phone</label>
                <input
                  type="tel"
                  required
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 rounded-xl p-3 text-xs focus:outline-hidden focus:border-primary text-zinc-800 dark:text-white"
                  placeholder="+91 99999 99999"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 rounded-xl p-3 text-xs focus:outline-hidden focus:border-primary text-zinc-800 dark:text-white"
                placeholder="mani@rommo.in"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider">Message</label>
              <textarea
                required
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 rounded-xl p-3 text-xs min-h-[100px] focus:outline-hidden focus:border-primary text-zinc-800 dark:text-white"
                placeholder="Describe your requirement (e.g. Dedicated cabin for 5 people)..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={formSubmitting}
              className="bg-primary text-white flex items-center justify-center gap-2 p-3 text-xs font-black tracking-wider uppercase rounded-xl hover:bg-primary/95 transition-all shadow-md mt-2 disabled:opacity-50 cursor-pointer"
            >
              <Send className="size-4" />
              {formSubmitting ? "Sending..." : "Submit Inquiry"}
            </motion.button>
          </form>
        </div>

      </div>

    </div>
  )
}
