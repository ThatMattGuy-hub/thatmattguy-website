import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import useScrollDirection from '../hooks/useScrollDirection'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const location = useLocation()
  const scrollDirection = useScrollDirection()

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ]

  const servicesMenu = [
    { name: 'All Services', path: '/services' },
    { name: 'Web Design', path: '/services/web-design' },
    { name: 'Web Development', path: '/services/web-development' },
    { name: 'E-Commerce Sites', path: '/services/e-commerce' },
    { name: 'AI & Automation', path: '/services/automation' },
    { name: 'Web Applications', path: '/services/web-applications' },
  ]

  const isActive = (path) => location.pathname === path
  const isServicesActive = () => location.pathname.startsWith('/services')

  return (
    <header className={`sticky top-0 z-50 bg-white shadow-sm transition-transform duration-300 ${
      scrollDirection === 'down' && !isMenuOpen ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/Logo.png" 
              alt="ThatMattGuy Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  isActive(item.path)
                    ? 'text-primary-600'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors hover:text-primary-600 flex items-center space-x-1 py-2 ${
                  isServicesActive()
                    ? 'text-primary-600'
                    : 'text-gray-700'
                }`}
              >
                <span>Services</span>
                <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-56 z-50">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                    {servicesMenu.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block px-4 py-2 text-sm transition-colors hover:bg-primary-50 hover:text-primary-600 ${
                          isActive(item.path)
                            ? 'text-primary-600 bg-primary-50'
                            : 'text-gray-700'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Link
              to="/contact"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Get Started Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-primary-600'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Services Menu */}
            <div className="border-t border-gray-100 pt-3 mt-3">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`w-full flex items-center justify-between py-2 text-sm font-medium transition-colors ${
                  isServicesActive()
                    ? 'text-primary-600'
                    : 'text-gray-700'
                }`}
              >
                <span>Services</span>
                <ChevronDown size={16} className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {servicesMenu.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => {
                        setIsMenuOpen(false)
                        setIsServicesOpen(false)
                      }}
                      className={`block py-2 text-sm transition-colors ${
                        isActive(item.path)
                          ? 'text-primary-600'
                          : 'text-gray-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Get Started Free
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
