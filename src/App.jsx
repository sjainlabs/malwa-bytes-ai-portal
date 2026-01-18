import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Mission from './components/Mission'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <Router basename="/malwa-bytes-ai-portal">
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <Mission />
        <Testimonials />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </Router>
  )
}

export default App
