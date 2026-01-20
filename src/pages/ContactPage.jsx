import Contact from '../components/Contact'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-soft-gray">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-deep-navy to-blue-900 text-white section-padding">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's talk about how we can help.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-soft-gray rounded-lg">
              <Mail className="w-12 h-12 text-bright-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-deep-navy mb-2">Email Us</h3>
              <p className="text-gray-600">info@malwabytes.com</p>
              <p className="text-gray-600">support@malwabytes.com</p>
            </div>

            <div className="text-center p-6 bg-soft-gray rounded-lg">
              <Phone className="w-12 h-12 text-bright-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-deep-navy mb-2">Call Us</h3>
              <p className="text-gray-600">+91 (XXX) XXX-XXXX</p>
              <p className="text-gray-600 text-sm">Mon-Fri 9AM-6PM IST</p>
            </div>

            <div className="text-center p-6 bg-soft-gray rounded-lg">
              <MapPin className="w-12 h-12 text-bright-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-deep-navy mb-2">Visit Us</h3>
              <p className="text-gray-600">Ratlam, Madhya Pradesh</p>
              <p className="text-gray-600">India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Contact />

      {/* Additional CTA */}
      <section className="section-padding bg-gradient-to-r from-bright-orange to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Send className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Have Questions?
          </h2>
          <p className="text-xl mb-8">
            Our team is here to help you find the right AI solution for your business.
          </p>
          <p className="text-lg">
            Whether you're a small shop in a tier-3 city or a growing enterprise, we have 
            the tools and expertise to help you succeed.
          </p>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
