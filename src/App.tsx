import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MarketingProvider, useMarketing } from "./context/MarketingContext"
import { Layout } from "./components/Layout"
import { Home } from "./pages/Home"
import { Features } from "./pages/Features"
import { Spaces } from "./pages/Spaces"
import { FAQ } from "./pages/FAQ"
import { Contact } from "./pages/Contact"

function AppRoutes() {
  const { loading, settings } = useMarketing()

  if (loading || !settings) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-zinc-950 text-white">
        <div className="flex flex-col items-center gap-3">
          <div className="size-12 border-4 border-rose-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm font-semibold tracking-wider text-zinc-400">LOADING ROMMO...</p>
        </div>
      </div>
    )
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/spaces" element={<Spaces />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  return (
    <MarketingProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </MarketingProvider>
  )
}
