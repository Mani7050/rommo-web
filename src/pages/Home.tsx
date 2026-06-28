import React from "react"
import { Link } from "react-router-dom"
import { Star, CheckCircle2, Wifi, Key, ShieldCheck } from "lucide-react"
import { useMarketing } from "../context/MarketingContext"
import { motion } from "framer-motion"

export const Home: React.FC = () => {
  const { settings, testimonials } = useMarketing()

  if (!settings) return null

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200/80 dark:border-zinc-800/80 transition-colors">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] dark:bg-[radial-gradient(#18181b_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
        
        {/* Glowing background shapes */}
        <div className="absolute top-12 left-10 w-72 h-72 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-500/10 blur-[130px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* TEXT & ACTIONS COLUMN */}
          <div className="flex flex-col gap-7 max-w-xl relative z-10">
            {/* Tagline pill */}
            <motion.div 
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-2 self-start px-3.5 py-1.5 bg-primary/10 dark:bg-primary/20 text-primary text-[10px] font-black tracking-widest uppercase rounded-full border border-primary/25 shadow-xs"
            >
              <span className="flex size-1.5 bg-primary rounded-full animate-ping"></span>
              SECURE WORKSPACES
            </motion.div>
            
            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight"
            >
              {settings.hero.headline.split(" ").map((word: string, i: number) => {
                if (i < 2) {
                  return (
                    <span key={i} className="bg-gradient-to-r from-primary to-rose-500 bg-clip-text text-transparent mr-2.5 inline-block">
                      {word}
                    </span>
                  )
                }
                return <span key={i} className="mr-2.5 inline-block">{word}</span>
              })}
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium"
            >
              {settings.hero.subtitle}
            </motion.p>

            {/* CTA row */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 mt-2"
            >
              <Link
                to="/spaces"
                className="bg-primary hover:bg-primary/95 text-white px-7 py-4 text-xs font-black tracking-wider uppercase rounded-xl transition-all shadow-lg shadow-primary/25 hover:scale-102 active:scale-98 text-center"
              >
                {settings.hero.ctaText}
              </Link>
              <Link
                to="/contact"
                className="bg-white hover:bg-zinc-50 dark:bg-zinc-900 dark:hover:bg-zinc-850 text-zinc-800 dark:text-white px-7 py-4 text-xs font-black tracking-wider uppercase rounded-xl transition-all border border-zinc-200 dark:border-zinc-800 shadow-sm hover:scale-102 active:scale-98 text-center"
              >
                Book Guided Tour
              </Link>
            </motion.div>

            {/* Quick stats row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 mt-6 pt-6 border-t border-zinc-200 dark:border-zinc-800"
            >
              <div className="flex flex-col gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">{settings.hero.stat1}</span>
                <span className="text-[10px] font-bold text-zinc-450 dark:text-zinc-500 uppercase tracking-widest leading-none">{settings.hero.stat1Label}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">{settings.hero.stat2}</span>
                <span className="text-[10px] font-bold text-zinc-450 dark:text-zinc-500 uppercase tracking-widest leading-none">{settings.hero.stat2Label}</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">{settings.hero.stat3}</span>
                  <Star className="size-5 fill-yellow-500 text-yellow-500" />
                </div>
                <span className="text-[10px] font-bold text-zinc-450 dark:text-zinc-500 uppercase tracking-widest leading-none">{settings.hero.stat3Label}</span>
              </div>
            </motion.div>
          </div>

          {/* DYNAMIC VISUAL CONTAINER */}
          <div className="relative flex justify-center items-center lg:pl-6">
            {/* Background decorative square ring */}
            <div className="absolute -inset-4 border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl [mask-image:linear-gradient(to_bottom,black,transparent)] pointer-events-none"></div>
            
            {/* Main Image Card with glow and reflection */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-lg aspect-4/3 rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border border-white/20 dark:border-zinc-800 hover:scale-[1.01] transition-all duration-500 group"
            >
              <img
                src={settings.hero.imageUrl}
                alt="Workspace"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/45 to-transparent"></div>
            </motion.div>

            {/* Floating Badge 1: Top-Right */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-zinc-900/90 dark:bg-white/90 backdrop-blur-md px-4 py-2 shadow-xl rounded-2xl border border-white/10 dark:border-zinc-200/20 flex items-center gap-1.5"
            >
              <span className="flex size-2 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-black text-white dark:text-zinc-950 uppercase tracking-widest">⚡ 24/7 Access</span>
            </motion.div>

            {/* Floating Card 2: Bottom-Left */}
            <motion.div 
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md p-4 shadow-xl rounded-2xl border border-zinc-200/80 dark:border-zinc-800 max-w-[210px] flex flex-col gap-1.5 transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="flex items-center gap-2">
                <span className="p-1 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-500 rounded-lg"><CheckCircle2 className="size-4" /></span>
                <span className="text-[10px] font-black text-zinc-900 dark:text-white uppercase tracking-wider">Smart PIN Access</span>
              </div>
              <p className="text-[9px] text-zinc-500 dark:text-zinc-400 leading-normal">
                Receive private entry PIN code instantly upon app checkout. No physical keys required.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* QUICK HIGHLIGHTS TEASER */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-3">
          <span className="text-[10px] font-black tracking-widest text-primary uppercase">AMENITIES FOR WORKERS</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Designed to Boost Productivity & Comfort
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500">
            Enjoy premium micro-office facilities crafted for freelancers, remote engineers, and startup teams.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <div className="flex gap-4 p-5 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 hover:shadow-md transition-all">
            <div className="p-3 bg-rose-50 dark:bg-rose-950/30 text-primary rounded-xl h-fit">
              <Wifi className="size-6" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-sm text-zinc-800 dark:text-zinc-100">Gigabit Fiber Wi-Fi</h3>
              <p className="text-xs text-zinc-400 leading-normal">Ultra-fast redundant fiber mesh wifi covering all floors and solo work pods.</p>
            </div>
          </div>

          <div className="flex gap-4 p-5 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 hover:shadow-md transition-all">
            <div className="p-3 bg-rose-50 dark:bg-rose-950/30 text-primary rounded-xl h-fit">
              <Key className="size-6" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-sm text-zinc-800 dark:text-zinc-100">Smart Pin Lock Access</h3>
              <p className="text-xs text-zinc-400 leading-normal">Integrated door hardware unlocked safely via private app booking pins.</p>
            </div>
          </div>

          <div className="flex gap-4 p-5 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 hover:shadow-md transition-all">
            <div className="p-3 bg-rose-50 dark:bg-rose-950/30 text-primary rounded-xl h-fit">
              <ShieldCheck className="size-6" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-sm text-zinc-800 dark:text-zinc-100">24/7 Security CCTV</h3>
              <p className="text-xs text-zinc-400 leading-normal">Monitored workspace complexes ensuring high personal safety during night working.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link to="/features" className="text-xs font-bold text-primary hover:underline uppercase tracking-wider">
            Explore All Features & Amenities →
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="py-16 bg-zinc-100 dark:bg-zinc-900/50 transition-colors border-t border-b border-zinc-200/50 dark:border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto flex flex-col gap-3">
            <span className="text-[10px] font-black tracking-widest text-primary uppercase">BOOKING FLOW</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
              How to Get Started
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500">
              Book ergonomic co-working hot desks or boardrooms in Bangalore in three easy clicks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 relative">
            <div className="absolute top-10 left-1/4 right-1/4 h-0.5 border-t border-dashed border-zinc-300 dark:border-zinc-800 hidden md:block z-0"></div>

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center relative z-10">
              <span className="flex items-center justify-center size-12 bg-white dark:bg-zinc-900 text-primary border-2 border-primary font-black text-lg rounded-2xl shadow-md">1</span>
              <h3 className="font-bold text-sm text-zinc-800 dark:text-zinc-100 mt-4">Select Cabin</h3>
              <p className="text-xs text-zinc-400 mt-1 max-w-xs leading-normal">Choose from solo focus cabins, meeting spaces, or penthouse team suites.</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center relative z-10">
              <span className="flex items-center justify-center size-12 bg-primary text-white border-2 border-primary font-black text-lg rounded-2xl shadow-md">2</span>
              <h3 className="font-bold text-sm text-zinc-800 dark:text-zinc-100 mt-4">Book in App</h3>
              <p className="text-xs text-zinc-400 mt-1 max-w-xs leading-normal">Choose date & timings, complete payment securely in our Rommo application.</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center relative z-10">
              <span className="flex items-center justify-center size-12 bg-white dark:bg-zinc-900 text-primary border-2 border-primary font-black text-lg rounded-2xl shadow-md">3</span>
              <h3 className="font-bold text-sm text-zinc-800 dark:text-zinc-100 mt-4">Walk-in with PIN</h3>
              <p className="text-xs text-zinc-400 mt-1 max-w-xs leading-normal">Use the private entry PIN received on your phone to unlock the smart door latch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto flex flex-col gap-3">
          <span className="text-[10px] font-black tracking-widest text-primary uppercase">TESTIMONIALS</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            What Our Coworkers Say
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500">
            Discover experiences shared by founders, programmers, and independent professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between gap-4 shadow-xs"
            >
              <p className="text-xs text-zinc-500 italic leading-relaxed">
                "{test.comment}"
              </p>
              <div className="flex justify-between items-center mt-2 border-t border-zinc-200/50 pt-4 dark:border-zinc-800/50">
                <div>
                  <h4 className="font-extrabold text-xs text-zinc-800 dark:text-zinc-100">{test.name}</h4>
                  <span className="text-[10px] text-zinc-450 dark:text-zinc-550">{test.role}</span>
                </div>
                <div className="flex gap-0.5 text-yellow-500">
                  {Array.from({ length: test.rating || 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
