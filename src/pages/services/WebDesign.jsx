import { CheckCircle, Palette, Layout, Smartphone, Sparkles } from 'lucide-react'
import Button from '../../components/Button'
import SEO from '../../components/SEO'

export default function WebDesign() {
  const benefits = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Custom Visual Design',
      description: 'Unique designs tailored to your brand identity and target audience in the Ribble Valley and Lancashire area.'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Mobile-First Approach',
      description: 'Responsive designs that look stunning on all devices, ensuring your customers have a great experience whether they\'re in Clitheroe or anywhere else.'
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: 'User-Centered Design',
      description: 'Intuitive layouts that guide visitors to take action, increasing conversions for your North West business.'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: 'Modern Aesthetics',
      description: 'Contemporary design trends that make your business stand out in the competitive Lancashire market.'
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Discovery & Research',
      description: 'We start by understanding your business, target audience in the Ribble Valley, and competitors. I\'ll research what works in your industry and local market.'
    },
    {
      step: '2',
      title: 'Design Concepts',
      description: 'I create initial design mockups that reflect your brand and appeal to your Lancashire customers. You\'ll see exactly how your site will look before development begins.'
    },
    {
      step: '3',
      title: 'Refinement',
      description: 'Based on your feedback, I refine the design until it\'s perfect. Your input is crucial to creating a website that truly represents your business.'
    },
    {
      step: '4',
      title: 'Development & Launch',
      description: 'Once approved, I build your website using modern technologies and launch it with full SEO optimization for local Ribble Valley searches.'
    }
  ]

  const examples = [
    'Small business websites for Ribble Valley companies',
    'Professional service websites (solicitors, accountants, consultants)',
    'Restaurant and hospitality websites in Lancashire',
    'Retail and shop websites across the North West',
    'Portfolio and personal brand websites',
    'Landing pages for local marketing campaigns'
  ]

  return (
    <>
      <SEO 
        title="Web Design Ribble Valley | Professional Website Design Lancashire"
        description="Expert web design services in Ribble Valley and Lancashire. Custom, mobile-responsive websites that attract customers and grow your North West business."
        keywords="web design Ribble Valley, website design Lancashire, web designer Clitheroe, professional web design North West, custom website design Lancashire, responsive web design Ribble Valley"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Web Design in Ribble Valley & Lancashire
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Transform your online presence with custom web design that captures your brand and converts visitors into customers. 
              Serving small businesses across the Ribble Valley, Clitheroe, and throughout Lancashire and the North West.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" size="lg">
                Get Started Today
              </Button>
              <Button to="/portfolio" variant="outline" size="lg">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Professional Web Design?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In today's digital landscape, your website is often the first impression potential customers have of your business. 
              A professionally designed website builds trust, showcases your expertise, and drives growth for your Ribble Valley or Lancashire business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="text-primary-600 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Web Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A transparent, collaborative approach that ensures your website exceeds expectations. 
              I work closely with you throughout the entire process to create a website that truly represents your business.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {process.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Web Design Services for Every Business
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Whether you're a startup in Clitheroe or an established business in Lancashire, I create websites that work for your specific needs:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {examples.map((example, index) => (
                <div key={index} className="flex items-center space-x-3 bg-gray-50 rounded-lg p-4">
                  <CheckCircle className="text-primary-600 flex-shrink-0" size={24} />
                  <span className="text-gray-700 text-lg">{example}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Focus Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Web Design Tailored for Ribble Valley & Lancashire Businesses
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                As a web designer based in the North West, I understand the unique needs of local businesses in the Ribble Valley, 
                Clitheroe, and across Lancashire. Your website needs to appeal to your local customer base while also being 
                discoverable by people searching for your services in the area.
              </p>
              <p className="mb-6">
                I incorporate local SEO best practices into every design, ensuring your website ranks well for searches like 
                "web design Ribble Valley" and related local queries. This means more visibility, more traffic, and more customers 
                for your business.
              </p>
              <p className="mb-6">
                My web design services include everything you need to succeed online: custom visual design, mobile responsiveness, 
                fast loading speeds, SEO optimization, and ongoing support. With competitive pricing and flexible payment plans, 
                professional web design is accessible to businesses of all sizes in the Ribble Valley and Lancashire area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Affordable Web Design Pricing
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Transparent pricing with no hidden fees. Starter websites from £595.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/services" variant="outline" size="lg">
                View All Pricing
              </Button>
              <Button to="/contact" size="lg">
                Get a Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create a website that showcases your business and attracts customers in the Ribble Valley and beyond. 
              Get in touch for a free consultation.
            </p>
            <Button variant="accent" size="lg" to="/contact" className="hover:scale-105 transition-transform duration-300">
              Start Your Web Design Project
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
