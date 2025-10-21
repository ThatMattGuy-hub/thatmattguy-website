import { CheckCircle, Zap, Clock, TrendingUp, Workflow, Brain, MessageSquare, BarChart3 } from 'lucide-react'
import Button from '../../components/Button'
import SEO from '../../components/SEO'

export default function Automation() {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Save Time',
      description: 'Automate repetitive tasks and free up hours every week for your Ribble Valley business to focus on growth and customer service.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Reduce Errors',
      description: 'Eliminate human error in data entry, calculations, and routine processes, improving accuracy and reliability for your Lancashire business.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Increase Efficiency',
      description: 'Streamline workflows and complete tasks faster, allowing your North West business to do more with the same resources.'
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: 'Scale Your Business',
      description: 'Handle more work without hiring more staff. Automation grows with your business, supporting expansion across the region.'
    }
  ]

  const aiAutomations = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI-Powered Chatbots',
      description: 'Intelligent chatbots that understand customer queries and provide helpful responses 24/7, improving customer service for your Lancashire business.',
      examples: ['Customer support automation', 'Lead qualification', 'FAQ responses', 'Appointment booking', 'Product recommendations']
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'AI Content Generation',
      description: 'Automate content creation for emails, social media, and marketing materials using AI, saving hours of writing time for your Ribble Valley business.',
      examples: ['Email copywriting', 'Social media posts', 'Product descriptions', 'Blog content', 'Marketing campaigns']
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'AI Data Analysis',
      description: 'Let AI analyze your business data to identify trends, predict outcomes, and provide actionable insights for better decision-making.',
      examples: ['Sales forecasting', 'Customer behavior analysis', 'Inventory optimization', 'Pricing recommendations', 'Performance insights']
    }
  ]

  const automationTypes = [
    {
      title: 'Email Automation',
      description: 'Automated email sequences, follow-ups, newsletters, and customer communications that nurture leads and keep customers engaged.',
      examples: ['Welcome email series', 'Abandoned cart reminders', 'Customer onboarding', 'Review requests', 'Newsletter scheduling']
    },
    {
      title: 'Data Entry & Processing',
      description: 'Eliminate manual data entry with automated systems that collect, process, and organize information from multiple sources.',
      examples: ['Form data to spreadsheets', 'Invoice processing', 'Customer data management', 'Inventory updates', 'Order processing']
    },
    {
      title: 'Report Generation',
      description: 'Automatically generate and distribute reports on sales, analytics, inventory, or any business metrics you need to track.',
      examples: ['Sales reports', 'Analytics dashboards', 'Inventory reports', 'Financial summaries', 'Performance metrics']
    },
    {
      title: 'Social Media Automation',
      description: 'Schedule posts, monitor mentions, and manage your social media presence efficiently across multiple platforms.',
      examples: ['Post scheduling', 'Content calendars', 'Engagement tracking', 'Cross-platform posting', 'Analytics reporting']
    },
    {
      title: 'Workflow Automation',
      description: 'Connect your business tools and automate workflows between different systems to create seamless processes.',
      examples: ['CRM updates', 'Task creation', 'File organization', 'Notification systems', 'Approval workflows']
    },
    {
      title: 'Customer Service Automation',
      description: 'Chatbots, automated responses, and ticketing systems that provide instant support to your customers.',
      examples: ['FAQ chatbots', 'Ticket routing', 'Auto-responses', 'Support workflows', 'Customer feedback collection']
    }
  ]

  const process = [
    {
      step: '1',
      title: 'Process Analysis',
      description: 'I analyze your current workflows and identify opportunities for automation. We\'ll discuss which tasks take the most time and where automation can have the biggest impact on your Ribble Valley or Lancashire business.'
    },
    {
      step: '2',
      title: 'Solution Design',
      description: 'I design a custom automation solution tailored to your specific needs. This includes selecting the right tools, mapping out workflows, and planning integrations between your existing systems.'
    },
    {
      step: '3',
      title: 'Implementation',
      description: 'I build and configure your automation systems, thoroughly testing to ensure everything works reliably. You\'ll see the automation in action before it goes live.'
    },
    {
      step: '4',
      title: 'Training & Support',
      description: 'I provide comprehensive training so you can manage and monitor your automations. Plus, ongoing support to optimize and expand your automation as your business grows.'
    }
  ]

  const useCases = [
    {
      industry: 'Professional Services',
      examples: 'Automated client onboarding, appointment reminders, invoice generation, and document workflows for solicitors, accountants, and consultants in the Ribble Valley.'
    },
    {
      industry: 'Retail & E-Commerce',
      examples: 'Order processing, inventory updates, customer communications, and marketing automation for Lancashire retailers and online shops.'
    },
    {
      industry: 'Hospitality',
      examples: 'Booking confirmations, review requests, social media posting, and customer feedback collection for restaurants and hotels across the North West.'
    },
    {
      industry: 'Real Estate',
      examples: 'Lead nurturing, property alerts, viewing confirmations, and client follow-ups for estate agents in Clitheroe and Lancashire.'
    },
    {
      industry: 'Healthcare',
      examples: 'Appointment reminders, patient communications, form processing, and administrative workflows for medical practices in the region.'
    },
    {
      industry: 'Manufacturing',
      examples: 'Inventory tracking, order processing, supplier communications, and production reporting for North West manufacturers.'
    }
  ]

  return (
    <>
      <SEO 
        title="AI Automation Solutions North West | Business Process Automation Lancashire"
        description="AI-powered automation services in Lancashire and Ribble Valley. AI chatbots, intelligent workflows, and business process automation. Streamline your North West business with cutting-edge AI automation solutions."
        keywords="AI automation Lancashire, AI chatbot Ribble Valley, business automation North West, AI integration Clitheroe, intelligent automation Lancashire, AI business solutions North West, process automation Ribble Valley"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI-Powered Automation Solutions for North West Businesses
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Stop wasting time on repetitive tasks. I create AI-powered automation solutions that streamline your business processes, 
              save hours every week, and let you focus on what matters most. From intelligent chatbots to automated workflows, 
              I help businesses across the Ribble Valley, Clitheroe, Lancashire, and throughout the North West harness the power of AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button to="/contact" size="lg">
                Get AI Automation
              </Button>
              <Button to="/portfolio" variant="outline" size="lg">
                View Automation Examples
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
              Why Automation is Essential for Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In today's competitive market, efficiency is everything. Automation helps your Ribble Valley or Lancashire business 
              work smarter, not harder, giving you a competitive edge in the North West market.
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

      {/* AI Automation Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Integration for Lancashire Businesses
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations. I integrate cutting-edge AI 
              technology into your workflows, making your Ribble Valley or Lancashire business more efficient, intelligent, and competitive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {aiAutomations.map((ai, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-accent-400 mb-4">
                  {ai.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  {ai.title}
                </h3>
                <p className="opacity-90 mb-6">
                  {ai.description}
                </p>
                <div className="border-t border-white/20 pt-4">
                  <h4 className="text-sm font-semibold mb-3 opacity-75">Use Cases:</h4>
                  <ul className="space-y-2">
                    {ai.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm opacity-90">
                        <CheckCircle className="flex-shrink-0 mt-0.5" size={16} />
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Why AI Automation for Your North West Business?</h3>
              <div className="prose prose-lg prose-invert max-w-none opacity-90">
                <p className="mb-4">
                  Artificial intelligence isn't just for tech giants anymore. Small and medium businesses in the Ribble Valley, 
                  Clitheroe, and across Lancashire can now leverage AI to compete with larger companies. AI automation can handle 
                  customer inquiries instantly, create personalized marketing content, analyze business data to predict trends, 
                  and make intelligent decisions based on patterns humans might miss.
                </p>
                <p className="mb-4">
                  I specialize in practical AI integration that delivers real ROI. Whether it's an AI chatbot that handles 80% 
                  of customer questions, AI-powered content generation that saves hours of writing time, or intelligent data 
                  analysis that helps you make better business decisions—I implement AI solutions that work for your specific 
                  business needs in the North West market.
                </p>
                <p>
                  The best part? AI automation gets smarter over time, continuously learning from interactions and improving 
                  its performance. This means your investment in AI automation today will deliver even greater returns as it 
                  adapts to your business and customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Traditional Automation Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond AI, I also provide proven automation solutions that streamline your day-to-day operations 
              for your Ribble Valley or Lancashire business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {automationTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {type.description}
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {type.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span>{example}</span>
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
              My Automation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that identifies the best automation opportunities and implements reliable, 
              scalable solutions for your business.
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

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Automation for Every Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No matter your industry, there are automation opportunities that can transform your business operations 
              in the Ribble Valley and Lancashire area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {useCase.industry}
                </h3>
                <p className="text-gray-600">
                  {useCase.examples}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              The ROI of Business Automation
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                Automation isn't just about convenience—it's a smart business investment that pays for itself. Consider this: 
                if you spend just 2 hours per day on tasks that could be automated, that's 10 hours per week or 520 hours per year. 
                At an average hourly rate, that's thousands of pounds worth of time that could be redirected to growing your 
                Ribble Valley or Lancashire business.
              </p>
              <p className="mb-6">
                Beyond time savings, automation reduces errors that can cost your business money and damage customer relationships. 
                It ensures consistency in your processes, improves customer experience with faster response times, and provides 
                valuable data insights that help you make better business decisions.
              </p>
              <p className="mb-6">
                Many of my North West clients see a return on their automation investment within the first few months, with 
                ongoing benefits that compound over time. Whether you're a small business in Clitheroe or a growing company 
                across Lancashire, automation can transform your operations and bottom line.
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
              Automation Solutions for Ribble Valley & Lancashire Businesses
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="mb-6">
                As a web automation specialist serving the Ribble Valley, Clitheroe, and Lancashire area, I understand the 
                specific challenges facing local businesses. Whether you're dealing with seasonal fluctuations, limited staff, 
                or simply trying to compete with larger companies, automation can level the playing field.
              </p>
              <p className="mb-6">
                I work with businesses across the North West to identify automation opportunities that make the biggest impact. 
                From simple email sequences to complex multi-system integrations, I create solutions that are reliable, scalable, 
                and easy to manage. My focus is on practical automation that delivers real results, not complicated systems that 
                require constant maintenance.
              </p>
              <p className="mb-6">
                Automation pricing is custom-quoted based on the complexity of your needs, but most projects start from £500-£1,500 
                for basic automation and scale up for more complex workflows. I also offer ongoing support to help you optimize 
                and expand your automation as your business grows. Contact me for a free consultation to discuss how automation 
                can transform your Ribble Valley or Lancashire business.
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
              Ready to Automate Your Business?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's identify the automation opportunities that will save you the most time and money. 
              Get in touch for a free consultation and discover how automation can transform your North West business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" to="/contact" className="hover:scale-105 transition-transform duration-300">
                Get Started with Automation
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
