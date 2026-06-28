import React from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { motion, AnimatePresence } from "framer-motion"
import { Toaster } from "sonner"

export const Layout: React.FC = () => {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 flex flex-col justify-between">
      <Header />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <Toaster position="bottom-right" richColors theme="dark" />
    </div>
  )
}
