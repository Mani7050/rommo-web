import { doc, getDoc, collection, getDocs, addDoc } from "firebase/firestore"
import { db, firebaseConfig } from "./firebase"

const isFirebaseConfigured = () => {
  return (
    firebaseConfig.projectId &&
    firebaseConfig.projectId !== "dummy-project-id" &&
    firebaseConfig.apiKey &&
    firebaseConfig.apiKey !== "dummy-api-key-for-local-development"
  )
}

// Initial seed data
const DEFAULT_WORKSPACES = [
  { id: "d1", title: "Luxury Penthouse Suite", location: "Lavelle Road, Bangalore", price: 5499, image: "/comfort_room.png", rating: 4.9, type: "Suite", reviews: 48, status: "Available" },
  { id: "d2", title: "Creative Focus Cabin", location: "HSR Layout, Bangalore", price: 650, image: "/meeting_room.png", rating: 4.7, type: "Workspace", reviews: 112, status: "Available" },
  { id: "d3", title: "Greenery Studio Apartment", location: "Koramangala, Bangalore", price: 1899, image: "/urban_studio.png", rating: 4.8, type: "Room", reviews: 89, status: "Available" },
  { id: "d4", title: "Executive Boardroom", location: "Indiranagar, Bangalore", price: 1500, image: "/meeting_room.png", rating: 4.6, type: "Workspace", reviews: 34, status: "Maintenance" },
  { id: "d5", title: "Bachelor Monthly Room", location: "Koramangala, Bangalore", price: 14500, image: "/urban_studio.png", rating: 4.5, type: "Monthly", reviews: 67, status: "Available" }
]

const DEFAULT_FAQS = [
  { id: "faq-1", question: "How do I book a workspace?", answer: "You can search for available workspaces on our mobile app or website, choose your preferred timing, and book instantly using digital payment." },
  { id: "faq-2", question: "Can I cancel my booking?", answer: "Yes, you can cancel your booking directly from the app. Cancellations made 2 hours prior to the check-in time will receive a full refund." },
  { id: "faq-3", question: "What amenities are included?", answer: "All bookings include high-speed Wi-Fi, power backup, smart entry pin codes, hot beverage access, and clean ergonomic seats." },
  { id: "faq-4", question: "Do you offer monthly memberships?", answer: "Yes, we offer monthly hot desk and dedicated cabin subscriptions. Select the 'Monthly' category in our workspaces list to view details." }
]

const DEFAULT_TESTIMONIALS = [
  { id: "test-1", name: "Anish Sharma", role: "Freelance Designer", rating: 5, comment: "Rommo has changed how I work. The HSR layout space has amazing Wi-Fi and the smart pin entry is incredibly convenient!" },
  { id: "test-2", name: "Priya Menon", role: "Tech Consultant", rating: 5, comment: "I regularly book the Executive Boardroom for client meetings. The booking process is seamless and the environment is very professional." },
  { id: "test-3", name: "Rahul Verma", role: "Start-up Founder", rating: 4, comment: "Great rooms, super clean. We used the studio suites for our hackathon weekend. Highly recommended." }
]

const DEFAULT_MARKETING_SETTINGS = {
  hero: {
    headline: "Premium Workspaces Tailored For Focus & Co-working",
    subtitle: "Book premium cabins, luxury penthouse suites, and ergonomic hot desks in Bangalore instantly. Walk-in with smart pin entries.",
    ctaText: "Discover Workspaces",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    stat1: "50+",
    stat1Label: "Premium Cabins",
    stat2: "15k+",
    stat2Label: "Happy Members",
    stat3: "4.8",
    stat3Label: "Average Rating"
  },
  contact: {
    email: "mraj14558@gmail.com",
    phone: "+91 7050805204",
    address: "Noida Sector- 62",
    mapLink: "https://maps.google.com"
  }
}

// 1. WORKSPACES
export async function getWorkspaces(): Promise<any[]> {
  if (isFirebaseConfigured()) {
    try {
      const snap = await getDocs(collection(db, "workspaces"))
      if (!snap.empty) {
        return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      }
    } catch (err) {
      console.warn("Failed fetching workspaces from Firestore, falling back to local:", err)
    }
  }

  const local = localStorage.getItem("rommo_workspaces")
  if (local) {
    return JSON.parse(local)
  }
  localStorage.setItem("rommo_workspaces", JSON.stringify(DEFAULT_WORKSPACES))
  return DEFAULT_WORKSPACES
}

// 2. MARKETING SETTINGS
export async function getMarketingSettings(): Promise<typeof DEFAULT_MARKETING_SETTINGS> {
  if (isFirebaseConfigured()) {
    try {
      const snap = await getDoc(doc(db, "settings", "marketing"))
      if (snap.exists()) {
        return snap.data() as any
      }
    } catch (err) {
      console.warn("Failed fetching marketing settings from Firestore, falling back to local:", err)
    }
  }

  const local = localStorage.getItem("rommo_marketing_settings")
  if (local) {
    const parsed = JSON.parse(local)
    if (parsed.contact && parsed.contact.email === "info@rommo.in") {
      parsed.contact.email = "mraj14558@gmail.com"
      parsed.contact.phone = "+91 7050805204"
      parsed.contact.address = "Noida Sector- 62"
      localStorage.setItem("rommo_marketing_settings", JSON.stringify(parsed))
      return parsed
    }
    return parsed
  }
  localStorage.setItem("rommo_marketing_settings", JSON.stringify(DEFAULT_MARKETING_SETTINGS))
  return DEFAULT_MARKETING_SETTINGS
}

// 3. FAQS
export async function getFAQs(): Promise<any[]> {
  if (isFirebaseConfigured()) {
    try {
      const snap = await getDocs(collection(db, "marketing_faqs"))
      if (!snap.empty) {
        return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      }
    } catch (err) {
      console.warn("Failed fetching FAQs from Firestore, falling back to local:", err)
    }
  }

  const local = localStorage.getItem("rommo_marketing_faqs")
  if (local) {
    return JSON.parse(local)
  }
  localStorage.setItem("rommo_marketing_faqs", JSON.stringify(DEFAULT_FAQS))
  return DEFAULT_FAQS
}

// 4. TESTIMONIALS
export async function getTestimonials(): Promise<any[]> {
  if (isFirebaseConfigured()) {
    try {
      const snap = await getDocs(collection(db, "marketing_testimonials"))
      if (!snap.empty) {
        return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      }
    } catch (err) {
      console.warn("Failed fetching testimonials from Firestore, falling back to local:", err)
    }
  }

  const local = localStorage.getItem("rommo_marketing_testimonials")
  if (local) {
    return JSON.parse(local)
  }
  localStorage.setItem("rommo_marketing_testimonials", JSON.stringify(DEFAULT_TESTIMONIALS))
  return DEFAULT_TESTIMONIALS
}

// 5. SUBMIT INQUIRY
export async function submitInquiry(inquiry: { name: string; email: string; phone: string; message: string }): Promise<void> {
  const payload = {
    ...inquiry,
    id: `inq-${Date.now()}`,
    status: "New",
    createdAt: new Date().toISOString()
  }

  if (isFirebaseConfigured()) {
    try {
      await addDoc(collection(db, "marketing_inquiries"), payload)
      return
    } catch (err) {
      console.warn("Failed saving inquiry to Firestore, falling back to local:", err)
    }
  }

  const current = JSON.parse(localStorage.getItem("rommo_marketing_inquiries") || "[]")
  current.push(payload)
  localStorage.setItem("rommo_marketing_inquiries", JSON.stringify(current))
}
