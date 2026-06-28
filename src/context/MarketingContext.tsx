import React, { createContext, useContext, useState, useEffect } from "react"
import {
  getMarketingSettings,
  getFAQs,
  getTestimonials,
  getWorkspaces
} from "../lib/db-service"

interface MarketingContextType {
  settings: any
  faqs: any[]
  testimonials: any[]
  workspaces: any[]
  loading: boolean
  refreshData: () => Promise<void>
}

const MarketingContext = createContext<MarketingContextType | undefined>(undefined)

export const MarketingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<any>(null)
  const [faqs, setFaqs] = useState<any[]>([])
  const [testimonials, setTestimonials] = useState<any[]>([])
  const [workspaces, setWorkspaces] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    try {
      const [settingsData, faqsData, testimonialsData, workspacesData] = await Promise.all([
        getMarketingSettings(),
        getFAQs(),
        getTestimonials(),
        getWorkspaces()
      ])
      setSettings(settingsData)
      setFaqs(faqsData)
      setTestimonials(testimonialsData)
      setWorkspaces(workspacesData)
    } catch (err) {
      console.error("Error fetching marketing data:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <MarketingContext.Provider
      value={{
        settings,
        faqs,
        testimonials,
        workspaces,
        loading,
        refreshData: fetchData
      }}
    >
      {children}
    </MarketingContext.Provider>
  )
}

export const useMarketing = () => {
  const context = useContext(MarketingContext)
  if (!context) {
    throw new Error("useMarketing must be used within a MarketingProvider")
  }
  return context
}
