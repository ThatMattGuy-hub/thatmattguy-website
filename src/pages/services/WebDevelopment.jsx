import { CheckCircle, Code, Zap, Shield, Rocket } from 'lucide-react'
import Button from '../../components/Button'
import SEO from '../../components/SEO'

export default function WebDevelopment() {
  const benefits = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Clean, Modern Code',
      description: 'Built with the latest web technologies and best practices, ensuring your website is fast, secure, and maintainable for years to come.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Lightning-Fast Performance',
      description: 'Optimized code and efficient architecture mean your Lancashire customers enjoy blazing-fast load times on any device.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security First',
      description: 'Built-in security measures protect your business and customer data, giving you peace of mind and building trust with your Ribble Valley audience.'
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: 'Scalable Solutions',
      description: 'Your website grows with your business. Whether you\'re expanding across the North West or adding new features, your site can handle it.'
    }
  ]

  const technologies = [
    'React & Modern JavaScript',
    'HTML5 & CSS3',
    'Responsive Frameworks (Tailwind CSS)',
    'Node.js & Express',
    'RESTful APIs',
    'Database Integration (SQL, NoSQL)',
    'Version Control (Git)',
    'Performance Optimization',
    'SEO-Friendly Architecture',
    'Progressive Web Apps (PWA)',
    'Content Management Systems',
    'Third-Party Integrations'
  ]

  const process = [
    {
      step: '1',
      title: 'Requirements Analysis',
      description: 'I work with you to understand exactly what your website needs to do. Whether it\'s a simple brochure site or a complex web application, I\'ll map out the technical requirements and create a development plan.'
    },
    {
      step: '2',
      title: 'Architecture & Planning',
      description: 'I design the technical architecture, choosing the right technologies and frameworks for your project. This ensures your website is built on a solid foundation that can scale with your Ribble Valley business.'
    },
    {
      step: '3',
      title: 'Development & Testing',
      description: 'I build your website using modern development practices, with regular testing to ensure everything works perfectly. You\'ll receive progress updates and can see your site taking shape.'
    },
    {
      step: '4',
      title: 'Launch & Optimization',
      description: 'After thorough testing, I launch your website and monitor its performance. I optimize for speed, SEO, and user experience to ensure your Lancashire customers have the best possible experience.'
    }
  ]

  const services = [
    {
      title: 'Custom Website Development',
      description: 'Fully custom websites built from scratch to meet your exact specifications and business goals.'
    },
    {
      title: 'CMS Development',
      description: 'Content management systems that let you easily update your website without technical knowledge.'
    },
    {
      title: 'API Development & Integration',
      description: 'Connect your website to third-party services, payment gateways, and business tools.'
    },
    {
      title: 'Database Design',
      description: 'Efficient database architecture for storing and managing your business data securely.'
    },
    {
      title: 'Performance Optimization',
      description: 'Speed up existing websites with code optimization, caching, and modern best practices.'
    },
    {
      title: 'Website Maintenance',
      description: 'Ongoing support, updates, and improvements to keep your website running smoothly.'
    }
  ]

  return (
    <>
      <SEO 
        title="Web Development Ribble Valley | Custom Website Development Lancashire"
        description="Professional web development services in Ribble Valley and Lancashire. Custom-coded websites, web applications, and API integrations for North West businesses. Expert developers you can trust."
        keywords="web development Ribble Valley, website development Lancashire, web developer Clitheroe, custom web development North West, professional web development Lancashire, web programming Ribble Valley"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Expert Web Development in Ribble Valley & Lancashire
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Professional web development services that bring your vision to life. From simple websites to complex web applications, 
              I build robust, scalable solutions for businesses across the Ribble Valley, Clitheroe, and throughout Lancashire and the North West.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" size="lg">
                Discuss Your Project
              </Button>
              <Button to="/portfolio" variant="outline" size="lg">
                View My Work
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
              Why Professional Web Development Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A well-developed website is more than just good looks—it's about performance, security, and functionality. 
              Professional web development ensures your Ribble Valley or Lancashire business has a website that works as hard as you do.
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

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Web Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive development services tailored to your business needs in the Ribble Valley and Lancashire area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              My Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured, transparent approach that ensures your project is delivered on time, on budget, and exceeds your expectations.
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

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Modern Technologies & Tools
            </h2>
            <p className="text-xl text-gray-600 mb-12 text-center">
              I use the latest, industry-standard technologies to build websites that are fast, secure, and future-proof:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm">
                  <CheckCircle className="text-primary-600 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Focus Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Web Development for Ribble Valley & Lancashire Businesses
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                As a web developer serving the Ribble Valley, Clitheroe, and Lancashire area, I understand the unique challenges 
                and opportunities facing local businesses. Whether you're a startup looking to establish your online presence or 
                an established company needing a website refresh, I provide web development services that deliver results.
              </p>
              <p className="mb-6">
                My web development approach combines technical excellence with local market knowledge. I build websites that not only 
                look great and function flawlessly but also rank well in local searches like "web development Ribble Valley" and 
                "web developer Lancashire". This means more visibility and more customers for your North West business.
              </p>
              <p className="mb-6">
                Every website I develop includes mobile responsiveness, fast loading speeds, SEO optimization, security best practices, 
                and ongoing support. With competitive pricing and flexible payment plans, professional web development is accessible 
                to businesses of all sizes in the Ribble Valley and Lancashire area.
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
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your web development project. Whether you need a simple website or a complex web application, 
              I'm here to help your Ribble Valley or Lancashire business succeed online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" to="/contact" className="hover:scale-105 transition-transform duration-300">
                Start Your Project
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
