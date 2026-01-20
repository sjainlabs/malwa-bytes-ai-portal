import { Link } from 'react-router-dom'
import { Mail, MapPin, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-deep-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <span className="text-3xl font-bold text-bright-orange">Malwa Bytes</span>
            </div>
            <p className="text-gray-300 mb-4">
              AI-Driven Software for Smarter Business. Empowering Indian SMBs with 
              intelligent automation tools.
            </p>
            <div className="flex items-center text-bright-orange font-semibold text-lg mb-2">
              <Heart className="w-5 h-5 mr-2" />
              Built in Ratlam. Built for Bharat.
            </div>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Ratlam, Madhya Pradesh, India</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@malwabytes.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-bright-orange">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-bright-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-bright-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-bright-orange transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-bright-orange transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-bright-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-bright-orange">Our Solutions</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Warehouse AI Security</li>
              <li>Hospital Management</li>
              <li>Pharmacy Solutions</li>
              <li>Finance Management</li>
              <li>Investment Tracking</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
              © {currentYear} Malwa Bytes. All rights reserved.
            </p>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-bright-orange transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-bright-orange transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
