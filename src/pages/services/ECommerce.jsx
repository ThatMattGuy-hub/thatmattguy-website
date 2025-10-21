import { CheckCircle, ShoppingCart, CreditCard, TrendingUp, Lock } from 'lucide-react'
import Button from '../../components/Button'
import SEO from '../../components/SEO'

export default function ECommerce() {
  const benefits = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: 'Complete Online Store',
      description: 'Full-featured e-commerce functionality including product catalogs, shopping carts, and inventory management for your Ribble Valley business.'
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Secure Payment Processing',
      description: 'Integrated payment gateways (Stripe, PayPal, and more) that keep your Lancashire customers\' data safe and transactions smooth.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Sales & Analytics',
      description: 'Track your sales, monitor customer behavior, and make data-driven decisions to grow your North West e-commerce business.'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Security & Compliance',
      description: 'Built with security best practices and compliance standards to protect your business and build customer trust.'
    }
  ]

  const features = [
    'Product catalog management',
    'Shopping cart & checkout',
    'Payment gateway integration',
    'Customer account system',
    'Order management',
    'Inventory tracking',
    'Shipping & tax calculations',
    'Discount codes & promotions',
    'Email notifications',
    'Mobile-responsive design',
    'SEO optimization',
    'Analytics & reporting',
    'Customer reviews',
    'Wishlist functionality',
    'Multi-currency support',
    'Social media integration'
  ]

  const process = [
    {
      step: '1',
      title: 'Business Analysis',
      description: 'I start by understanding your products, target market in the Ribble Valley and Lancashire area, and business goals. We\'ll discuss your competitors, pricing strategy, and what makes your e-commerce store unique.'
    },
    {
      step: '2',
      title: 'Platform Selection',
      description: 'Based on your needs and budget, I recommend the best e-commerce platform or custom solution. Whether it\'s Shopify, WooCommerce, or a fully custom build, I\'ll ensure it fits your business perfectly.'
    },
    {
      step: '3',
      title: 'Design & Development',
      description: 'I create a beautiful, user-friendly design that showcases your products and makes buying easy. The development includes all necessary features, payment integration, and thorough testing.'
    },
    {
      step: '4',
      title: 'Launch & Growth',
      description: 'After launch, I provide training on managing your store and offer ongoing support. I also help with SEO optimization to ensure your Lancashire customers can find you online.'
    }
  ]

  const examples = [
    {
      type: 'Retail Stores',
      description: 'Clothing, accessories, home goods, and general retail products for Ribble Valley shoppers.'
    },
    {
      type: 'Food & Beverage',
      description: 'Local produce, specialty foods, craft beverages, and catering services across Lancashire.'
    },
    {
      type: 'Handmade & Crafts',
      description: 'Artisan products, handmade goods, and unique creations from North West makers.'
    },
    {
      type: 'Professional Services',
      description: 'Bookable services, consultations, and digital products for service-based businesses.'
    },
    {
      type: 'B2B E-Commerce',
      description: 'Wholesale platforms, trade accounts, and business-to-business sales systems.'
    },
    {
      type: 'Subscription Services',
      description: 'Recurring products, membership sites, and subscription box businesses.'
    }
  ]

  return (
    <>
      <SEO 
        title="E-Commerce Web Design Lancashire | Online Shop Development Ribble Valley"
        description="Professional e-commerce website design and development in Lancashire and Ribble Valley. Custom online shops with secure payments, inventory management, and SEO. Grow your North West retail business online."
        keywords="e-commerce web design Lancashire, online shop Ribble Valley, e-commerce website development North West, online store Lancashire, e-commerce Clitheroe, web shop development Ribble Valley"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              E-Commerce Web Design in Lancashire & Ribble Valley
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Transform your retail business with a professional online store. From product catalogs to secure payments, 
              I build complete e-commerce solutions that help Ribble Valley and Lancashire businesses sell more online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" size="lg">
                Start Your Online Store
              </Button>
              <Button to="/portfolio" variant="outline" size="lg">
                View E-Commerce Examples
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
              Why Your Ribble Valley Business Needs E-Commerce
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              An online store opens your business to customers 24/7, expands your reach beyond your local area, 
              and provides valuable insights into customer behavior. Whether you're in Clitheroe or anywhere in Lancashire, 
              e-commerce can transform your business.
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

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Complete E-Commerce Features
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Everything you need to run a successful online store in the Ribble Valley and Lancashire area:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
                  <CheckCircle className="text-primary-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My E-Commerce Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven process that takes your business from concept to a fully functional online store, 
              ready to serve customers across the North West and beyond.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {process.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
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
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              E-Commerce Solutions for Every Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're selling physical products, digital goods, or services, I create e-commerce solutions 
              tailored to your specific industry and business model.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {examples.map((example, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {example.type}
                </h3>
                <p className="text-gray-600">
                  {example.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Focus Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              E-Commerce for Lancashire & Ribble Valley Retailers
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                As an e-commerce specialist serving the Ribble Valley, Clitheroe, and Lancashire area, I understand the unique 
                challenges facing local retailers. Whether you're a boutique shop in Clitheroe looking to expand online or a 
                Lancashire manufacturer wanting to sell direct to consumers, I can help you succeed in e-commerce.
              </p>
              <p className="mb-6">
                My e-commerce solutions are designed with local businesses in mind. I integrate local SEO best practices to ensure 
                your online store ranks well for searches like "e-commerce web design Lancashire" and related local queries. This 
                means customers in your area can easily find and shop from your store, while you also reach customers across the UK.
              </p>
              <p className="mb-6">
                Every e-commerce website I build includes mobile-responsive design (essential as most online shopping happens on phones), 
                fast loading speeds, secure payment processing, inventory management, and comprehensive analytics. I also provide training 
                so you can confidently manage your online store and ongoing support to help you grow.
              </p>
              <p className="mb-6">
                E-commerce pricing starts from £1,895 for a complete online store with all essential features. I also offer payment plans 
                to make it easier for Ribble Valley and Lancashire businesses to get started online and grow their e-commerce presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Selling Online?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's build an online store that grows your Ribble Valley or Lancashire business. 
              Get in touch for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" to="/contact" className="hover:scale-105 transition-transform duration-300">
                Get Your E-Commerce Quote
              </Button>
              <Button variant="secondary" size="lg" to="/services" className="hover:scale-105 transition-transform duration-300">
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
