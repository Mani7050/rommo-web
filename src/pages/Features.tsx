import React from "react"
import { Link } from "react-router-dom"
import { Wifi, Key, ShieldCheck, Coffee, Clock, Laptop } from "lucide-react"

export const Features: React.FC = () => {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
        <span className="text-[10px] font-black tracking-widest text-primary uppercase">FULL AMENITIES DIRECTORY</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
          Everything You Need to Focus, Build, & Scale
        </h1>
        <p className="text-sm sm:text-base text-zinc-500">
          Our hubs are optimized for high-intensity deep work. We provide world-class infrastructure so you can focus entirely on what matters.
        </p>
      </div>

      {/* CORE HIGHLIGHTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        
        {/* Gigabit Fiber */}
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 flex flex-col gap-4 shadow-xs">
          <div className="p-3.5 bg-rose-50 dark:bg-rose-950/20 text-primary rounded-2xl w-fit">
            <Wifi className="size-7" />
          </div>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Gigabit Fiber Wi-Fi</h3>
          <p className="text-xs text-zinc-450 dark:text-zinc-400 leading-relaxed">
            Dual ISPs with automatic failover config. Experience latency-free Zoom/Slack streams and lightning-fast repository clones at any hot desk.
          </p>
        </div>

        {/* Smart Pin */}
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 flex flex-col gap-4 shadow-xs">
          <div className="p-3.5 bg-rose-50 dark:bg-rose-950/20 text-primary rounded-2xl w-fit">
            <Key className="size-7" />
          </div>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Smart PIN Keypad Locks</h3>
          <p className="text-xs text-zinc-450 dark:text-zinc-400 leading-relaxed">
            No physical keys or plastic badges. Enter your cabin instantly by keying in the custom door PIN generated upon app-booking checkout.
          </p>
        </div>

        {/* Security */}
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 flex flex-col gap-4 shadow-xs">
          <div className="p-3.5 bg-rose-50 dark:bg-rose-950/20 text-primary rounded-2xl w-fit">
            <ShieldCheck className="size-7" />
          </div>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white">24/7 Security Supervision</h3>
          <p className="text-xs text-zinc-450 dark:text-zinc-400 leading-relaxed">
            High-definition continuous CCTV monitoring and security staff keep the workspace safe and comfortable during midnight coding sprints.
          </p>
        </div>

        {/* Beverages */}
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 flex flex-col gap-4 shadow-xs">
          <div className="p-3.5 bg-rose-50 dark:bg-rose-950/20 text-primary rounded-2xl w-fit">
            <Coffee className="size-7" />
          </div>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Premium Coffee & Tea</h3>
          <p className="text-xs text-zinc-450 dark:text-zinc-400 leading-relaxed">
            Unlimited, freshly-ground espresso blends, organic teas, and clean drinking water are available at all kitchen bays for your energy refills.
          </p>
        </div>

        {/* Flexible Timing */}
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 flex flex-col gap-4 shadow-xs">
          <div className="p-3.5 bg-rose-50 dark:bg-rose-950/20 text-primary rounded-2xl w-fit">
            <Clock className="size-7" />
          </div>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Flexible Clock Booking</h3>
          <p className="text-xs text-zinc-450 dark:text-zinc-400 leading-relaxed">
            Only pay for the exact hours or days you require. Easily check in or extend your slot via the mobile dashboard on demand.
          </p>
        </div>

        {/* Ergonomic */}
        <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 flex flex-col gap-4 shadow-xs">
          <div className="p-3.5 bg-rose-50 dark:bg-rose-950/20 text-primary rounded-2xl w-fit">
            <Laptop className="size-7" />
          </div>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Ergonomic Hardware</h3>
          <p className="text-xs text-zinc-450 dark:text-zinc-400 leading-relaxed">
            Equipped with professional orthopedic chairs, noise-canceling acoustics, dual monitor power inputs, and spacious oak timber tables.
          </p>
        </div>

      </div>

      {/* CALL TO ACTION BANNER */}
      <div className="bg-primary/5 border border-primary/20 p-8 sm:p-12 rounded-3xl mt-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2 max-w-xl">
          <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">Ready to book a premium workspace?</h3>
          <p className="text-xs sm:text-sm text-zinc-550 dark:text-zinc-450">
            Browse our list of dynamic cabins in Bangalore and reserve your hot desk in seconds.
          </p>
        </div>
        <Link
          to="/spaces"
          className="bg-primary text-white text-xs font-black tracking-wider uppercase px-6 py-3 rounded-xl hover:bg-primary/95 transition-all shadow-md shrink-0"
        >
          Check Spaces Catalog
        </Link>
      </div>

    </div>
  )
}
