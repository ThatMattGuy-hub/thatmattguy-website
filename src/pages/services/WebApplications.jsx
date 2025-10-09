import { CheckCircle, Code, Database, Users, BarChart } from 'lucide-react'
import Button from '../../components/Button'
import SEO from '../../components/SEO'

export default function WebApplications() {
  const benefits = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Custom Functionality',
      description: 'Built specifically for your business needs, not generic off-the-shelf software that forces you to adapt your processes.'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Centralized Data',
      description: 'All your business data in one place, accessible from anywhere, making it easier to manage your Ribble Valley or Lancashire operations.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Improved Collaboration',
      description: 'Team members can work together seamlessly, whether they\'re in the office, at home, or on the road across the North West.'
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: 'Better Insights',
      description: 'Real-time dashboards and reporting give you the data you need to make informed decisions for your business.'
    }
  ]

  const applicationTypes = [
    {
      title: 'Booking & Scheduling Systems',
      description: 'Custom booking platforms for appointments, reservations, or resource scheduling. Perfect for service businesses, restaurants, and venues in the Ribble Valley and Lancashire.',
      features: ['Online booking', 'Calendar management', 'Automated reminders', 'Payment integration', 'Customer management']
    },
    {
      title: 'Customer Portals',
      description: 'Secure portals where your customers can access their accounts, view orders, download documents, and communicate with your team.',
      features: ['User authentication', 'Document access', 'Order history', 'Support tickets', 'Self-service features']
    },
    {
      title: 'Internal Business Tools',
      description: 'Custom tools to streamline your internal operations, from inventory management to project tracking and team collaboration.',
      features: ['Workflow management', 'Task tracking', 'Team collaboration', 'Document sharing', 'Custom reporting']
    },
    {
      title: 'Data Dashboards',
      description: 'Visual dashboards that bring together data from multiple sources, giving you real-time insights into your business performance.',
      features: ['Real-time data', 'Custom metrics', 'Visual charts', 'Export capabilities', 'Multi-user access']
    },
    {
      title: 'CRM Systems',
      description: 'Customer relationship management systems tailored to your sales process and customer journey, helping you close more deals.',
      features: ['Contact management', 'Sales pipeline', 'Activity tracking', 'Email integration', 'Reporting & analytics']
    },
    {
      title: 'Inventory Management',
      description: 'Track stock levels, manage suppliers, and automate reordering for your retail or manufacturing business in Lancashire.',
      features: ['Stock tracking', 'Supplier management', 'Automated alerts', 'Order processing', 'Multi-location support']
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Discovery & Planning',
      description: 'I start by understanding your business processes, pain points, and goals. We\'ll map out exactly what the application needs to do and how it will integrate with your existing systems in your Ribble Valley or Lancashire business.'
    },
    {
      step: '2',
      title: 'Design & Prototyping',
      description: 'I create wireframes and prototypes so you can see and interact with the application before development begins. This ensures we\'re building exactly what you need.'
    },
    {
      step: '3',
      title: 'Development & Testing',
      description: 'I build your web application using modern, scalable technologies. Throughout development, you\'ll receive regular updates and can test features as they\'re completed.'
    },
    {
      step: '4',
      title: 'Launch & Training',
      description: 'After thorough testing, I launch your application and provide comprehensive training for your team. I also offer ongoing support and can add new features as your business evolves.'
    }
  ]

  const examples = [
    {
      industry: 'Professional Services',
      description: 'Client portals, project management tools, and time tracking systems for solicitors, accountants, and consultants in the Ribble Valley.',
      applications: ['Client portals', 'Project tracking', 'Time & billing', 'Document management']
    },
    {
      industry: 'Healthcare',
      description: 'Patient portals, appointment systems, and medical record management for practices across Lancashire.',
      applications: ['Patient portals', 'Appointment booking', 'Medical records', 'Prescription management']
    },
    {
      industry: 'Hospitality',
      description: 'Booking systems, table management, and customer loyalty platforms for restaurants and hotels in the North West.',
      applications: ['Reservation systems', 'Table management', 'Loyalty programs', 'Event booking']
    },
    {
      industry: 'Education',
      description: 'Student portals, course management, and learning platforms for schools and training providers.',
      applications: ['Student portals', 'Course management', 'Assignment tracking', 'Progress reporting']
    },
    {
      industry: 'Real Estate',
      description: 'Property management systems, tenant portals, and listing platforms for estate agents in Clitheroe and Lancashire.',
      applications: ['Property management', 'Tenant portals', 'Maintenance tracking', 'Document storage']
    },
    {
      industry: 'Manufacturing',
      description: 'Production tracking, quality control, and supply chain management tools for North West manufacturers.',
      applications: ['Production tracking', 'Quality control', 'Inventory management', 'Supplier portals']
    }
  ]

  return (
    <>
      <SEO 
        title="Web Application Development Lancashire | Custom Web Apps Ribble Valley"
        description="Professional web application development in Lancashire and Ribble Valley. Custom booking systems, customer portals, dashboards, and business tools for North West companies. Scalable web app solutions."
        keywords="web application development Lancashire, custom web apps Ribble Valley, web app developer North West, business web applications Lancashire, custom software Clitheroe, web app development Ribble Valley"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Custom Web Application Development in Lancashire & Ribble Valley
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Transform your business with custom web applications that solve your unique challenges. From booking systems to 
              customer portals and data dashboards, I build powerful tools that streamline operations for businesses across 
              the Ribble Valley, Clitheroe, Lancashire, and throughout the North West.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" size="lg">
                Discuss Your Web App
              </Button>
              <Button to="/portfolio" variant="outline" size="lg">
                View Examples
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
              Why Choose Custom Web Applications?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Off-the-shelf software forces you to adapt your business to fit the software. Custom web applications are built 
              around your processes, giving your Ribble Valley or Lancashire business exactly what you need, nothing you don't.
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

      {/* Application Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Types of Web Applications I Build
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From simple tools to complex enterprise systems, I create web applications that solve real business problems 
              for companies across the Ribble Valley and Lancashire.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {applicationTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {type.description}
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                        <CheckCircle className="text-primary-600 flex-shrink-0 mt-0.5" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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
              My Web Application Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collaborative, transparent approach that ensures your web application is delivered on time, on budget, 
              and exceeds your expectations.
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

      {/* Industry Examples Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Web Applications for Every Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No matter your industry, custom web applications can streamline your operations and improve customer experience 
              for your North West business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {examples.map((example, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {example.industry}
                </h3>
                <p className="text-gray-600 mb-4">
                  {example.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {example.applications.map((app, idx) => (
                    <span key={idx} className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Modern, Scalable Technology
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                I build web applications using modern, proven technologies that ensure your application is fast, secure, and scalable. 
                This includes React for dynamic user interfaces, Node.js for robust backend systems, and cloud hosting for reliability 
                and performance.
              </p>
              <p className="mb-6">
                Every web application I develop includes user authentication and security, responsive design for all devices, 
                real-time updates where needed, API integrations with your existing tools, comprehensive testing, and thorough 
                documentation. Your Ribble Valley or Lancashire business gets an enterprise-quality application without the 
                enterprise price tag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Focus Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Web Application Development for Ribble Valley & Lancashire Businesses
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                As a web application developer serving the Ribble Valley, Clitheroe, and Lancashire area, I work with businesses 
                of all sizes to create custom solutions that drive growth and efficiency. Whether you're a small business looking 
                to automate manual processes or a larger company needing a complex multi-user system, I can help.
              </p>
              <p className="mb-6">
                My approach focuses on understanding your business first, then building technology to support it. I don't believe 
                in over-engineering or adding unnecessary complexity. Instead, I create clean, intuitive applications that your 
                team will actually want to use and that deliver measurable results for your North West business.
              </p>
              <p className="mb-6">
                Web application pricing varies based on complexity, but most projects start from £2,500 for simple tools and scale 
                up for more complex systems. I provide detailed quotes after our initial consultation, so you know exactly what to 
                expect. I also offer ongoing support and can add new features as your business grows. Contact me for a free 
                consultation to discuss your web application needs.
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
              Ready to Build Your Custom Web Application?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your business needs and create a web application that solves your unique challenges. 
              Get in touch for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" to="/contact" className="hover:scale-105 transition-transform duration-300">
                Start Your Web App Project
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
