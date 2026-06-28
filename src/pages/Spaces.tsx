import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Search, MapPin, Star } from "lucide-react"
import { useMarketing } from "../context/MarketingContext"
import { motion, AnimatePresence } from "framer-motion"

export const Spaces: React.FC = () => {
  const { workspaces, loading } = useMarketing()
  const [activeFilter, setActiveFilter] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredWorkspaces = workspaces.filter((room) => {
    const isAvailable = room.status !== "Maintenance"
    const matchesSearch =
      room.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.location.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter =
      activeFilter === "All" || room.type.toLowerCase() === activeFilter.toLowerCase()

    return isAvailable && matchesSearch && matchesFilter
  })

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-black tracking-widest text-primary uppercase">CATALOGUE OF CABINS</span>
          <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Our Workspaces in Bengaluru
          </h1>
          <p className="text-xs sm:text-sm text-zinc-500">
            Explore beautiful, premium hot desks, video call pods, and luxury team suites.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
          {/* Search bar */}
          <div className="relative flex items-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-3.5 py-2 rounded-xl shadow-xs">
            <Search className="size-4 text-zinc-400 mr-2" />
            <input
              type="text"
              placeholder="Search by location or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-xs bg-transparent focus:outline-hidden text-zinc-800 dark:text-white w-full sm:w-48"
            />
          </div>

          {/* Pills */}
          <div className="flex gap-1 overflow-x-auto scrollbar-none py-1">
            {["All", "Suite", "Workspace", "Room", "Monthly"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-2 text-xs font-bold transition-all rounded-lg cursor-pointer border ${
                  activeFilter === cat
                    ? "bg-primary border-primary text-white shadow-sm"
                    : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:border-zinc-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* WORKSPACES GRID */}
      {loading ? (
        <div className="flex items-center justify-center py-24">
          <div className="flex flex-col items-center gap-3">
            <div className="size-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            <p className="text-xs font-semibold tracking-wider text-zinc-400">LOADING WORKSPACES...</p>
          </div>
        </div>
      ) : filteredWorkspaces.length === 0 ? (
        <div className="text-center py-20 mt-8 border border-dashed border-zinc-200 dark:border-zinc-800 p-6 rounded-3xl">
          <p className="text-sm text-zinc-450 dark:text-zinc-550">No workspaces match your parameters at this moment.</p>
        </div>
      ) : (
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <AnimatePresence mode="popLayout">
            {filteredWorkspaces.map((ws) => (
              <motion.div
                layout
                key={ws.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="group flex flex-col bg-white dark:bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 hover:shadow-lg hover:border-zinc-300/80 dark:hover:border-zinc-700/80 transition-all duration-300"
              >
                <div className="relative h-48 bg-zinc-200 overflow-hidden">
                  <img
                    src={ws.image}
                    alt={ws.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
                    }}
                  />
                  <span className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md px-2.5 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider rounded-md">
                    {ws.type}
                  </span>
                  <span className="absolute top-3 right-3 bg-emerald-500/90 backdrop-blur-md px-2 py-0.5 text-[9px] font-bold text-white rounded-md">
                    {ws.status || "Available"}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                  <div>
                    <h3 className="font-extrabold text-base text-zinc-900 dark:text-white leading-snug group-hover:text-primary transition-colors line-clamp-1">
                      {ws.title}
                    </h3>
                    <div className="flex items-center gap-1 text-[11px] text-zinc-450 dark:text-zinc-550 mt-1">
                      <MapPin className="size-3.5 shrink-0 text-primary" />
                      <span className="truncate">{ws.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400">
                    <Star className="size-4 fill-yellow-500 text-yellow-500" />
                    <span className="font-bold text-zinc-800 dark:text-zinc-200">{ws.rating}</span>
                    <span>({ws.reviews || 0} reviews)</span>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-zinc-200/50 dark:border-zinc-800/50">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-extrabold text-zinc-400 uppercase tracking-wider">Price Starting</span>
                      <span className="text-sm font-black text-primary">₹{ws.price}<span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400">/night</span></span>
                    </div>
                    <Link
                      to="/contact"
                      className="bg-primary text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-primary/95 transition-colors shadow-sm"
                    >
                      Book Workspace
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

    </div>
  )
}
