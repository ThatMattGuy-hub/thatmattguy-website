import { Link } from 'react-router-dom'
import { Sparkles, Code, Zap, Heart, Users, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react'
import Button from '../components/Button'
import SEO from '../components/SEO'
import Testimonials from '../components/Testimonials'

export default function Home() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Design',
      description: 'Beautiful, modern websites that make your business stand out and convert visitors into customers.',
      examples: ['Business websites', 'E-commerce stores', 'Landing pages', 'Portfolio sites'],
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Web Applications',
      description: 'Custom web apps tailored to your business needs.',
      examples: ['Booking systems', 'Customer portals', 'Inventory management', 'Quote calculators'],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Automation',
      description: 'Save hours every week by automating repetitive tasks.',
      examples: ['Automated email replies', 'Appointment reminders', 'Invoice generation', 'Data entry automation'],
    },
  ]

  const benefits = [
    'Personal, one-on-one service',
    'Fast turnaround times',
    'Honest, transparent pricing',
    'Local to Ribble Valley & North West',
    'Ongoing support included',
    'SEO-optimized from day one',
  ]

  return (
    <>
      <SEO 
        title="Home"
        description="ThatMattGuy offers web design, web apps, and automation for small businesses in Ribble Valley & North West England. Get your first website designed for free!"
        keywords="Web Design Ribble Valley, North West Business Websites, Small Business Web Design, Web Development Ribble Valley, Automation Services"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fadeIn">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-md border border-primary-200 animate-bounce-subtle">
              <Sparkles size={16} className="animate-pulse-subtle" />
              <span>Limited Time: Free Website Projects Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Let's grow your business together -
              <span className="text-primary-600"> beautifully and simply</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed">
              Hi, I'm Matt! After 7 years building websites and web apps for a local company, I'm starting my own 
              freelance journey helping small businesses in Ribble Valley & the North West UK. I'm looking for my first few clients -
              <span className="font-semibold text-primary-600"> so you can get your website designed for free</span>.
            </p>
            
            <div className="text-lg text-gray-500 mb-8">
              <ul className="flex flex-col sm:flex-row sm:justify-center sm:divide-x sm:divide-gray-300 space-y-2 sm:space-y-0">
                <li className="sm:px-4 flex items-center justify-center">
                  <span className="mr-2">✓</span> 7 years professional experience
                </li>
                <li className="sm:px-4 flex items-center justify-center">
                  <span className="mr-2">✓</span> Proven track record
                </li>
                <li className="sm:px-4 flex items-center justify-center">
                  <span className="mr-2">✓</span> Local to Ribble Valley
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/contact" size="lg" className="group hover:scale-105 transition-transform duration-300">
                Book Your Free Website
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
              </Button>
              <Button to="/services" variant="secondary" size="lg" className="hover:scale-105 transition-transform duration-300">
                View Services & Pricing
              </Button>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              ⚡ Only 3-5 free projects available • Based in Ribble Valley, serving North West UK
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What I Can Do For You
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From simple websites to complex automation, I'll help your business work smarter and look better online.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-2xl hover:border-primary-400 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-50 to-accent-50 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="text-primary-600 mb-4 relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 relative z-10">
                  {service.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 relative z-10">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Examples:</p>
                  <ul className="space-y-1">
                    {service.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/services" variant="outline" size="lg" className="hover:scale-105 transition-transform duration-300">
              See All Services & Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-primary-50/30 to-gray-50 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 text-primary-600 mb-4">
                <Heart size={20} className="animate-pulse-subtle" />
                <span className="font-semibold">Why Work With Me</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                A local freelancer you can trust
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm not a faceless agency. I'm Matt — a real person who genuinely cares about helping your 
                business succeed. As a startup myself, I understand the challenges you face and I'm here to 
                make things easier, not harder.
              </p>

              <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 border-l-4 border-primary-500 p-6 mb-6 rounded-r-lg shadow-md">
                <h3 className="font-bold text-gray-900 mb-2">What Makes Me Different?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span><strong>Direct communication:</strong> You work with me, not a project manager</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span><strong>Modern tech stack:</strong> React, TailwindCSS, and cutting-edge tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span><strong>Performance-first:</strong> Fast-loading sites that rank well on Google</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">•</span>
                    <span><strong>No lock-in:</strong> You own everything, no ongoing fees unless you want support</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I'm offering <strong>3-5 free website projects</strong> to build my portfolio and earn your trust. 
                In return, I'll give you a professional website that helps your business grow, plus a testimonial 
                and case study to help me get started.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="bg-white rounded-xl p-8 shadow-2xl border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="text-primary-600 animate-wiggle" size={32} />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Let's Chat!</h3>
                    <p className="text-gray-600">No pressure, just a friendly conversation</p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="text-primary-600" size={18} />
                    <span>Free consultation (15-30 mins)</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="text-primary-600" size={18} />
                    <span>Discuss your business goals</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="text-primary-600" size={18} />
                    <span>See if we're a good fit</span>
                  </li>
                  <li className="flex items-center space-x-2 text-gray-700">
                    <CheckCircle className="text-primary-600" size={18} />
                    <span>No commitment required</span>
                  </li>
                </ul>

                <Button to="/contact" className="w-full hover:scale-105 transition-transform duration-300">
                  Book a Free Chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Focus */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 text-primary-600 mb-4">
              <TrendingUp size={20} className="animate-bounce-subtle" />
              <span className="font-semibold">Local SEO Focused</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Helping Ribble Valley & North West businesses get found online
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Every website I build is optimized for local search, so customers in your area can find you easily. 
              Whether you're in Ribble Valley, Lancaster, Blackpool, or anywhere in the North West, I'll help you rank 
              higher on Google and attract more local customers.
            </p>

            <div className="bg-gradient-to-br from-gray-50 to-primary-50/30 rounded-xl p-8 text-left shadow-lg border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">What you'll get:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Google My Business setup</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Local keyword optimization</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Fast loading speeds</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="text-primary-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Mobile-friendly design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to grow your business online?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's build something amazing together. Book your free website project today — 
              limited spots available!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" to="/contact" className="hover:scale-105 transition-transform duration-300">
                Get Your Free Website
              </Button>
              <Button variant="secondary" size="lg" to="/about" className="hover:scale-105 transition-transform duration-300">
                Meet Matt
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
