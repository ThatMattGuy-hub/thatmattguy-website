import { Sparkles, ArrowRight, Briefcase, Globe, ShoppingCart, Calendar } from 'lucide-react'
import Button from '../components/Button'
import SEO from '../components/SEO'

export default function Portfolio() {
  // Demo/mockup projects to show capability
  const demoProjects = [
    {
      title: 'Local Restaurant Website',
      category: 'Web Design',
      description: 'Modern, mobile-friendly website with online menu and reservation system',
      icon: <Globe className="w-12 h-12" />,
      features: ['Responsive design', 'Online bookings', 'Menu showcase', 'Google Maps integration'],
      isDemo: true,
    },
    {
      title: 'E-Commerce Store',
      category: 'E-Commerce',
      description: 'Full-featured online shop with payment processing and inventory management',
      icon: <ShoppingCart className="w-12 h-12" />,
      features: ['Product catalog', 'Secure checkout', 'Order tracking', 'Admin dashboard'],
      isDemo: true,
    },
    {
      title: 'Booking System',
      category: 'Web Application',
      description: 'Custom appointment booking app for service-based businesses',
      icon: <Calendar className="w-12 h-12" />,
      features: ['Calendar integration', 'Email reminders', 'Client management', 'Payment processing'],
      isDemo: true,
    },
  ]

  return (
    <>
      <SEO 
        title="Portfolio"
        description="View ThatMattGuy's portfolio of web design and development projects. Coming soon - currently building portfolio with first clients in Ribble Valley & North West UK."
        keywords="Web Design Portfolio Ribble Valley, ThatMattGuy Projects, Web Development Examples North West"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-md border border-primary-200 animate-bounce-subtle">
              <Sparkles size={16} className="animate-pulse-subtle" />
              <span>Real Projects Coming Soon</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Portfolio & Project Examples
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              I'm actively working with my first clients. Meanwhile, here are examples of the types of projects I build.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Projects */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What I Can Build For You
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These are examples of project types I specialize in. Real client projects will be showcased here soon!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {demoProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-8 shadow-lg hover:border-primary-300 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="bg-primary-100 text-primary-600 w-20 h-20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6">
                  {project.description}
                </p>

                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Key Features:</p>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-500 italic">
                    Example project • Real projects coming soon
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-12 text-center mb-12 shadow-xl">
              <Briefcase className="w-20 h-20 text-primary-600 mx-auto mb-6 animate-float" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Building My Portfolio
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                As a brand-new freelance business, I'm currently working on my first few projects. 
                This page will soon showcase real websites and applications I've built for local businesses 
                in Ribble Valley and the North West.
              </p>
              <p className="text-gray-700 mb-8">
                Each project will include screenshots, descriptions, and results to demonstrate the quality 
                and value I deliver.
              </p>
            </div>

            {/* What to Expect */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white border-2 border-gray-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  What You'll See Here Soon
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Full website screenshots and demos</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Client testimonials and feedback</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Project challenges and solutions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Results and business impact</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Technologies and tools used</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-gray-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Types of Projects
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Small business websites</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>E-commerce stores</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Custom web applications</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Automation solutions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary-600 font-bold">•</span>
                    <span>Website redesigns</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-primary-600 text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                While I'm building my portfolio, I'm actively taking on new projects. 
                Let's discuss how I can help your business grow online!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="accent" size="lg" to="/contact" className="group hover:scale-105 transition-transform duration-300">
                  Get Started Today
                  <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                </Button>
                <Button variant="secondary" size="lg" to="/services" className="hover:scale-105 transition-transform duration-300">
                  View Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Me */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Work With Me
            </h2>
            
            <div className="text-left space-y-4 text-gray-700 leading-relaxed">
              <p>
                With 7 years of professional experience building websites and web applications, 
                I bring proven expertise to every project. Now as a freelancer, I offer that same 
                quality with more personal attention and competitive pricing.
              </p>

              <p>
                <strong className="text-gray-900">What you get from working with me:</strong>
              </p>

              <ul className="space-y-2 ml-6">
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600 font-bold mt-1">✓</span>
                  <span>Professional websites built with modern technologies</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600 font-bold mt-1">✓</span>
                  <span>Personal attention and care throughout the project</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600 font-bold mt-1">✓</span>
                  <span>Clear communication and regular updates</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600 font-bold mt-1">✓</span>
                  <span>Training on how to manage your website</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-primary-600 font-bold mt-1">✓</span>
                  <span>Ongoing support after launch</span>
                </li>
              </ul>

              <p>
                As a local freelancer, I'm invested in the success of businesses in Ribble Valley 
                and the North West. Your success is my success.
              </p>
            </div>

            <div className="mt-8">
              <Button to="/about" size="lg" variant="outline" className="hover:scale-105 transition-transform duration-300">
                Learn More About Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 text-center shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Get Notified When Projects Go Live
            </h2>
            <p className="text-gray-600 mb-6">
              Want to see my portfolio as soon as it's ready? Leave your email and I'll let you know 
              when new projects are added.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-grow px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none"
                required
              />
              <Button type="submit" className="hover:scale-105 transition-transform duration-300">
                Notify Me
              </Button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4">
              No spam, just updates when new projects are showcased.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
