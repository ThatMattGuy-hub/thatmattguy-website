import { CheckCircle, Sparkles, Rocket, Crown, Code, Zap, Palette, ShoppingCart, ArrowRight } from 'lucide-react'
import Button from '../components/Button'
import SEO from '../components/SEO'
import { Link } from 'react-router-dom'

export default function Services() {
  const serviceCategories = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Web Design',
      description: 'Custom, mobile-responsive web design that captures your brand and converts visitors into customers.',
      link: '/services/web-design',
      highlights: ['Custom visual design', 'Mobile-first approach', 'User-centered layouts', 'Modern aesthetics'],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Professional web development with clean code, fast performance, and scalable architecture.',
      link: '/services/web-development',
      highlights: ['Modern technologies', 'Lightning-fast performance', 'Security first', 'Scalable solutions'],
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'E-Commerce Sites',
      description: 'Complete online stores with secure payments, inventory management, and powerful analytics.',
      link: '/services/e-commerce',
      highlights: ['Full e-commerce features', 'Secure payments', 'Inventory management', 'Sales analytics'],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'AI & Automation Solutions',
      description: 'Streamline your business with AI-powered automation. From intelligent chatbots to automated workflows that save hours every week.',
      link: '/services/automation',
      highlights: ['AI chatbots', 'Intelligent automation', 'Workflow optimization', 'AI content generation'],
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Web Applications',
      description: 'Custom web applications built specifically for your business needs and processes.',
      link: '/services/web-applications',
      highlights: ['Booking systems', 'Customer portals', 'Data dashboards', 'Internal tools'],
    },
  ]

  const pricingTiers = [
    {
      name: 'Starter Website',
      price: '£595',
      badge: 'Most Popular',
      description: 'Perfect for small businesses just getting started online',
      features: [
        'Up to 5 pages',
        'Mobile-responsive design',
        'Contact form',
        'Google Maps integration',
        'Basic SEO setup',
        'Social media links',
        '1 month support',
        'Fast loading speed',
      ],
      cta: 'Get Started',
      popular: true,
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      name: 'Business Website',
      price: 'From £995',
      description: 'For established businesses wanting a professional online presence',
      features: [
        'Up to 10 pages',
        'Custom design',
        'Advanced contact forms',
        'Blog/news section',
        'Advanced SEO optimisation',
        'Google Analytics setup',
        'Newsletter integration',
        '3 months support',
        'Content management system',
      ],
      cta: 'Request Quote',
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      name: 'E-Commerce / Advanced',
      price: 'From £1,895',
      description: 'Full-featured online stores and complex websites',
      features: [
        'Unlimited pages',
        'E-commerce functionality',
        'Payment gateway integration',
        'Product management',
        'Customer accounts',
        'Advanced analytics',
        'Email marketing integration',
        '6 months support',
        'Training included',
      ],
      cta: 'Request Quote',
      icon: <Crown className="w-6 h-6" />,
    },
  ]

  return (
    <>
      <SEO 
        title="Services & Pricing"
        description="Affordable web design, web development, and automation services for small businesses in Ribble Valley & North West UK. Starter websites from £595."
        keywords="Web Design Pricing Ribble Valley, Affordable Web Design North West, Small Business Website Cost, Web Development Services Ribble Valley"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Services & Pricing
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Transparent, affordable pricing for small businesses in Ribble Valley & Lancashire. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What I Can Do For Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From design to development, e-commerce to automation—I offer comprehensive web services 
              tailored to small businesses across the Ribble Valley and North West.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {serviceCategories.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="bg-gray-50 rounded-xl p-8 border-2 border-transparent hover:border-primary-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="text-primary-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                      <CheckCircle className="text-primary-600 flex-shrink-0" size={16} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <ArrowRight size={20} className="ml-2" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Website Pricing Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent pricing for websites. Choose the package that fits your needs, 
              or contact me for a custom quote.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 group ${
                  tier.popular 
                    ? 'border-primary-500 shadow-2xl scale-105' 
                    : 'border-gray-200 hover:border-primary-300 hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg animate-bounce-subtle">
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div className="text-primary-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tier.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>

                <div className="mb-4">
                  {tier.originalPrice && (
                    <div className="flex items-center space-x-2">
                      <span className="text-4xl font-bold text-primary-600">
                        {tier.originalPrice}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        {tier.price}
                      </span>
                    </div>
                  )}
                  {!tier.originalPrice && (
                    <div className="text-4xl font-bold text-gray-900">
                      {tier.price}
                    </div>
                  )}
                </div>

                <p className="text-gray-600 mb-6">
                  {tier.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="text-primary-600 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  to="/contact" 
                  variant={tier.popular ? 'primary' : 'outline'}
                  className="w-full hover:scale-105 transition-transform duration-300"
                >
                  {tier.cta}
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              All prices exclude VAT. Payment plans available for Business and E-Commerce packages.
            </p>
          </div>
        </div>
      </section>


      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              What's Included With Every Project
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Mobile-responsive design',
                'Fast loading speeds',
                'SEO-friendly structure',
                'Google Analytics setup',
                'Contact form integration',
                'Social media integration',
                'Browser compatibility',
                'Security best practices',
                'Training & documentation',
                'Post-launch support',
                'Free minor updates',
                'Honest communication',
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-primary-600 flex-shrink-0" size={24} />
                  <span className="text-gray-700 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's chat about your project. No pressure, just a friendly conversation about how I can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" to="/contact" className="hover:scale-105 transition-transform duration-300">
                Get Started Today
              </Button>
              <Button variant="secondary" size="lg" to="/about" className="hover:scale-105 transition-transform duration-300">
                Learn More About Me
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
