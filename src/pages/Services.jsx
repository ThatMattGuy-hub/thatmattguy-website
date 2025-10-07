import { CheckCircle, Sparkles, Rocket, Crown, Code, Zap } from 'lucide-react'
import Button from '../components/Button'
import SEO from '../components/SEO'

export default function Services() {
  const pricingTiers = [
    {
      name: 'Starter Website',
      price: '£495',
      originalPrice: 'FREE',
      badge: 'Limited Time',
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
      cta: 'Get Started Free',
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
      price: 'From £1,795',
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

  const additionalServices = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Application Development',
      description: 'Custom web apps tailored to your specific business needs',
      examples: ['Booking systems', 'Customer portals', 'Internal tools', 'Data dashboards'],
      pricing: 'Custom quote based on requirements',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Automation Solutions',
      description: 'Streamline your business processes and save time',
      examples: ['Email automation', 'Data entry automation', 'Report generation', 'Workflow optimisation'],
      pricing: 'Custom quote based on complexity',
    },
  ]

  return (
    <>
      <SEO 
        title="Services & Pricing"
        description="Affordable web design, web development, and automation services for small businesses in Ribble Valley & North West UK. Starter websites from £495 (free for first clients)."
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
              Transparent, affordable pricing for small businesses. No hidden fees, no surprises. 
              Plus, <span className="font-semibold text-primary-600">3-5 free starter websites available</span> for 
              my first clients!
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-white">
        <div className="container-custom">
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
            <p className="text-gray-600 mb-4">
              <strong>Note:</strong> Free starter websites are available for the first 3-5 clients only. 
              Limited availability based on my schedule.
            </p>
            <p className="text-sm text-gray-500">
              All prices exclude VAT. Payment plans available for Business and E-Commerce packages.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Need something more specialised? I also offer custom web applications and automation solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 border-2 border-gray-100 shadow-lg hover:border-primary-300 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="text-primary-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {service.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-700">
                        <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm font-semibold text-gray-900">
                    Pricing: <span className="text-primary-600">{service.pricing}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/contact" size="lg" className="hover:scale-105 transition-transform duration-300">
              Discuss Your Project
            </Button>
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
                Get Your Free Website
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
