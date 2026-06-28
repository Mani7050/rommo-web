import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex items-center justify-center size-9 bg-primary text-white font-black text-lg rounded-xl shadow-lg">R</span>
            <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">Rommo</span>
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
            <Link
              to="/contact"
              className="bg-primary text-white px-5 py-2 text-xs font-bold tracking-wide hover:bg-primary/95 transition-all shadow-md rounded-xl hover:scale-103 active:scale-95 cursor-pointer"
            >
              Get Membership
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </header>

      {/* Mobile menu drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-zinc-950/40 backdrop-blur-sm pt-20">
          <div className="bg-white dark:bg-zinc-900 mx-4 p-6 rounded-2xl shadow-2xl flex flex-col gap-5 border border-zinc-200 dark:border-zinc-800 animate-in fade-in zoom-in-95 duration-200">
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
          </div>
        </div>
      )}
    </>
  )
}
