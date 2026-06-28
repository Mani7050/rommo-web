import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.span 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex items-center justify-center size-9 bg-primary text-white font-black text-lg rounded-xl shadow-lg shadow-primary/20"
            >
              R
            </motion.span>
            <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-primary transition-colors">Rommo</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-xs font-bold uppercase tracking-wider transition-colors ${
                  isActive
                    ? "text-primary dark:text-white"
                    : "text-zinc-600 hover:text-primary dark:text-zinc-400 dark:hover:text-white"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/features"
              className={({ isActive }) =>
                `text-xs font-bold uppercase tracking-wider transition-colors ${
                  isActive
                    ? "text-primary dark:text-white"
                    : "text-zinc-600 hover:text-primary dark:text-zinc-400 dark:hover:text-white"
                }`
              }
            >
              Features
            </NavLink>
            <NavLink
              to="/spaces"
              className={({ isActive }) =>
                `text-xs font-bold uppercase tracking-wider transition-colors ${
                  isActive
                    ? "text-primary dark:text-white"
                    : "text-zinc-600 hover:text-primary dark:text-zinc-400 dark:hover:text-white"
                }`
              }
            >
              Spaces
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `text-xs font-bold uppercase tracking-wider transition-colors ${
                  isActive
                    ? "text-primary dark:text-white"
                    : "text-zinc-600 hover:text-primary dark:text-zinc-400 dark:hover:text-white"
                }`
              }
            >
              FAQ
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-xs font-bold uppercase tracking-wider transition-colors ${
                  isActive
                    ? "text-primary dark:text-white"
                    : "text-zinc-600 hover:text-primary dark:text-zinc-400 dark:hover:text-white"
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Link
                to="/contact"
                className="bg-primary text-white px-5 py-2.5 text-xs font-bold tracking-wide hover:bg-primary/95 transition-all shadow-md rounded-xl cursor-pointer inline-block"
              >
                Get Membership
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu trigger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white cursor-pointer"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </motion.button>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-30 bg-zinc-950/60 backdrop-blur-xs pt-20"
          >
            <motion.div 
              initial={{ scale: 0.95, y: -15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: -15, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-zinc-900 mx-4 p-6 rounded-2xl shadow-2xl flex flex-col gap-5 border border-zinc-200 dark:border-zinc-800"
            >
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-zinc-800 dark:text-zinc-200 hover:text-primary"
              >
                Home
              </Link>
              <Link
                to="/features"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-zinc-800 dark:text-zinc-200 hover:text-primary"
              >
                Features
              </Link>
              <Link
                to="/spaces"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-zinc-800 dark:text-zinc-200 hover:text-primary"
              >
                Spaces
              </Link>
              <Link
                to="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-zinc-800 dark:text-zinc-200 hover:text-primary"
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-zinc-800 dark:text-zinc-200 hover:text-primary"
              >
                Contact
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-primary text-white text-center py-2.5 rounded-xl text-xs font-bold"
              >
                Get Membership
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
