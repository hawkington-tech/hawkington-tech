import { Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ServicesIndex from './pages/services/ServicesIndex'
import SystemRebellion from './pages/services/SystemRebellion'
import OngoingPartner from './pages/services/OngoingPartner'
import TechnicalWriting from './pages/services/TechnicalWriting'
import WebDevelopment from './pages/services/WebDevelopment'
import BusinessSystems from './pages/services/BusinessSystems'
import FreeWebsiteCheck from './pages/FreeWebsiteCheck.tsx'
import BlogIndex from './pages/blog/BlogIndex'
import OneDoorAtATime from './pages/blog/OneDoorAtATime'
import FourteenMonths from './pages/blog/FourteenMonths'
import BarefootWithMachete from './pages/blog/BarefootWithMachete'
import PathInBetween from './pages/blog/PathInBetween'
import { BeforeWeTalkProvider } from './components/before-we-talk/BeforeWeTalkContext'
import BeforeWeTalkModal from './components/before-we-talk/BeforeWeTalkModal'


export default function App() {
    return (
        <BeforeWeTalkProvider>
            <Routes>
                {/* Landing pages - outside Layout */}
                <Route path="/free-website-check" element={<FreeWebsiteCheck />} />
                
                {/* Main site - wrapped in Layout */}
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/services" element={<ServicesIndex />} />
                    <Route path="/services/system-rebellion" element={<SystemRebellion />} />
                    <Route path="/services/technical-writing" element={<TechnicalWriting />} />
                    <Route path="/services/web-development" element={<WebDevelopment />} />
                    <Route path="/services/ongoing-partner" element={<OngoingPartner />} />
                    <Route path="/services/business-systems" element={<BusinessSystems />} />
                    <Route path="/blog" element={<BlogIndex />} />
                    <Route path="/blog/one-door-at-a-time" element={<OneDoorAtATime />} />
                    <Route path="/blog/fourteen-months" element={<FourteenMonths />} />
                    <Route path="/blog/barefoot-with-a-machete" element={<BarefootWithMachete />} />
                    <Route path="/blog/the-path-in-between" element={<PathInBetween />} />
                </Route>
            </Routes>
            <BeforeWeTalkModal />
            <Analytics />
        </BeforeWeTalkProvider>
    )
}