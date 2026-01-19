import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import BlogIndex from './pages/blog/BlogIndex'
import FourteenMonths from './pages/blog/FourteenMonths'
import BarefootWithMachete from './pages/blog/BarefootWithMachete'
import PathInBetween from './pages/blog/PathInBetween'
import ServicesIndex from './pages/services/ServicesIndex'
import SystemRebellion from './pages/services/SystemRebellion'
import OngoingPartner from './pages/services/OngoingPartner'
import TechnicalWriting from './pages/services/TechnicalWriting'
import WebDevelopment from './pages/services/WebDevelopment'
import BusinessSystems from './pages/services/BusinessSystems'
import ColdLeadLanding from './pages/ColdLeadLanding.tsx'


export default function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<BlogIndex />} />
                <Route path="/blog/fourteen-months" element={<FourteenMonths />} />
                <Route path="/blog/barefoot-with-a-machete" element={<BarefootWithMachete />} />
                <Route path="/blog/the-path-in-between" element={<PathInBetween />} />
                <Route path="/services" element={<ServicesIndex />} />
                <Route path="/services/system-rebellion" element={<SystemRebellion />} />
                <Route path="/services/technical-writing" element={<TechnicalWriting />} />
                <Route path="/services/web-development" element={<WebDevelopment />} />
                <Route path="/services/ongoing-partner" element={<OngoingPartner />} />
                <Route path="/services/business-systems" element={<BusinessSystems />} />
                <Route path="/welcome" element={<ColdLeadLanding />} />
            </Routes>
        </Layout>
    )
}