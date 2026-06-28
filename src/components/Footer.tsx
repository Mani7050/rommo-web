import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin, Send, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { toast } from "sonner"

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      toast.success("Thank you for subscribing to our newsletter!")
      setEmail("")
    }
  }

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 pt-16 pb-8 text-xs relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Brand/About Col */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link to="/" className="flex items-center gap-2">
              <span className="flex items-center justify-center size-9 bg-primary text-white font-black text-lg rounded-xl shadow-lg shadow-primary/20">R</span>
              <span className="text-xl font-bold tracking-tight text-white">Rommo</span>
            </Link>
            <p className="text-zinc-500 leading-relaxed max-w-sm">
              Discover beautiful, premium co-working spaces, private cabins, and luxury penthouses in Bangalore. Instantly reserve your space via the Rommo application.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3.5 mt-2">
              <motion.a 
                whileHover={{ scale: 1.15, rotate: 8, y: -2 }}
                whileTap={{ scale: 0.92 }}
                href="#" 
                className="p-2 bg-zinc-900 hover:bg-primary hover:text-white rounded-lg transition-all text-zinc-500" 
                aria-label="Facebook"
              >
                <Facebook className="size-4" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.15, rotate: -8, y: -2 }}
                whileTap={{ scale: 0.92 }}
                href="#" 
                className="p-2 bg-zinc-900 hover:bg-primary hover:text-white rounded-lg transition-all text-zinc-500" 
                aria-label="Twitter"
              >
                <Twitter className="size-4" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.15, rotate: 8, y: -2 }}
                whileTap={{ scale: 0.92 }}
                href="#" 
                className="p-2 bg-zinc-900 hover:bg-primary hover:text-white rounded-lg transition-all text-zinc-500" 
                aria-label="Instagram"
              >
                <Instagram className="size-4" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.15, rotate: -8, y: -2 }}
                whileTap={{ scale: 0.92 }}
                href="#" 
                className="p-2 bg-zinc-900 hover:bg-primary hover:text-white rounded-lg transition-all text-zinc-500" 
                aria-label="LinkedIn"
              >
                <Linkedin className="size-4" />
              </motion.a>
            </div>
          </div>

          {/* Spaces Col */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-extrabold tracking-wider uppercase text-[10px]">Workspaces</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link to="/spaces" className="hover:text-white transition-colors text-zinc-500 hover:translate-x-0.5 inline-block duration-200">Hot Desks</Link>
              </li>
              <li>
                <Link to="/spaces" className="hover:text-white transition-colors text-zinc-500 hover:translate-x-0.5 inline-block duration-200">Solo Focus Cabins</Link>
              </li>
              <li>
                <Link to="/spaces" className="hover:text-white transition-colors text-zinc-500 hover:translate-x-0.5 inline-block duration-200">Executive Boardrooms</Link>
              </li>
              <li>
                <Link to="/spaces" className="hover:text-white transition-colors text-zinc-500 hover:translate-x-0.5 inline-block duration-200">Penthouse Suites</Link>
              </li>
            </ul>
          </div>

          {/* Company Col */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-extrabold tracking-wider uppercase text-[10px]">Company</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link to="/features" className="hover:text-white transition-colors text-zinc-500 hover:translate-x-0.5 inline-block duration-200">About Amenities</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors text-zinc-500 hover:translate-x-0.5 inline-block duration-200">Help Desk FAQs</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors text-zinc-500 hover:translate-x-0.5 inline-block duration-200">Contact Support</Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors text-zinc-500 hover:translate-x-0.5 inline-block duration-200">Partner with Us</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-extrabold tracking-wider uppercase text-[10px]">Stay Updated</h4>
            <p className="text-zinc-500 leading-normal">
              Subscribe to get exclusive discount offers and new hub launch notifications.
            </p>
            <form onSubmit={handleSubscribe} className="relative flex items-center mt-2">
              <input
                type="email"
                required
                placeholder="Your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-2.5 pl-3.5 pr-10 text-xs focus:outline-hidden focus:border-primary text-white"
              />
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="absolute right-1 p-2 bg-primary hover:bg-primary/95 text-white rounded-lg transition-colors cursor-pointer"
                aria-label="Subscribe"
              >
                <Send className="size-3.5" />
              </motion.button>
            </form>
          </div>

        </div>

        {/* Contact Info Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 text-zinc-500 border-b border-zinc-900/60">
          <div className="flex items-center gap-3">
            <MapPin className="size-4 text-primary shrink-0" />
            <span>Noida Sector- 62</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="size-4 text-primary shrink-0" />
            <span>+91 8115456373</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="size-4 text-primary shrink-0" />
            <span>engineerfareed945@gmail.com</span>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-zinc-650 text-[11px]">
          <p>© {new Date().getFullYear()} Rommo Inc. Designed by Fareed Ahamad. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Cookie Settings</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
