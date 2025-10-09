import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <img 
              src="/LogoInvert.png" 
              alt="ThatMattGuy Logo" 
              className="h-12 w-auto"
            />
            <p className="text-sm">
              Helping small businesses in the Ribble Valley & the North West grow online with beautiful websites, web apps, and automation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm hover:text-primary-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Web Design</li>
              <li>Web Development</li>
              <li>E-Commerce Sites</li>
              <li>Automation Solutions</li>
              <li>Web Applications</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm">
                <MapPin size={16} className="text-primary-400" />
                <span>Ribble Valley, North West UK</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail size={16} className="text-primary-400" />
                <a href="mailto:info@thatmattguy.co.uk" className="hover:text-primary-400 transition-colors">
                  info@thatmattguy.co.uk
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone size={16} className="text-primary-400" />
                <a href="tel:+447889123939" className="hover:text-primary-400 transition-colors">
                  +44 7889 123939
                </a>
              </li>
            </ul>

            {/* Social Links - TODO: Update with real profile URLs */}
            <div className="mt-4">
              <p className="text-xs text-gray-500 mb-2">Connect on social media:</p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/61581685242783/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors" aria-label="Facebook" title="Facebook (Coming Soon)">
                  <Facebook size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors" aria-label="Twitter" title="Twitter (Coming Soon)">
                  <Twitter size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors" aria-label="LinkedIn" title="LinkedIn (Coming Soon)">
                  <Linkedin size={20} />
                </a>
                <a href="https://instagram.com/thatmatt.guy" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors" aria-label="Instagram" title="Instagram (Coming Soon)">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
            <p>&copy; {currentYear} ThatMattGuy. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary-400 transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
          <p className="mt-4 text-center text-gray-500">
            Web Design Ribble Valley | Small Business Websites North West England
          </p>
        </div>
      </div>
    </footer>
  )
}
