import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import Button from '../components/Button'
import SEO from '../components/SEO'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '6bebede4-5e91-4b28-b520-2b73e99dd6bf',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        })
      } else {
        alert('Something went wrong. Please try again or email me directly.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Something went wrong. Please try again or email me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'matt@thatmattguy.co.uk',
      link: 'mailto:matt@thatmattguy.co.uk',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+44 7889 123939',
      link: 'tel:+447889123939',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Ribble Valley, North West UK',
      link: null,
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Response Time',
      value: 'Within 1 business day',
      link: null,
    },
  ]

  return (
    <>
      <SEO 
        title="Contact"
        description="Get in touch with ThatMattGuy for web design, web development, and automation services in Ribble Valley & North West UK. Free consultation available."
        keywords="Contact Web Designer Ribble Valley, Web Design Enquiry North West, Get a Quote Web Design, Free Website Consultation Ribble Valley"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Chat About Your Project
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Whether you're ready to start or just exploring options, I'd love to hear from you. 
              No pressure, just a friendly conversation about how I can help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                I typically respond within 1 business day. Feel free to reach out via the form, 
                email, or phone — whichever works best for you.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="text-primary-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h3>
                      {item.link ? (
                        <a 
                          href={item.link}
                          className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-bold text-gray-900 mb-2">
                  Free Projects Available
                </h3>
                <p className="text-sm text-gray-600">
                  I'm offering 3-5 free starter websites to build my portfolio. 
                  If you're interested, mention it in your message!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="bg-primary-50 border-2 border-primary-200 rounded-xl p-8 text-center shadow-lg animate-fadeIn">
                  <CheckCircle className="w-16 h-16 text-primary-600 mx-auto mb-4 animate-pulse-subtle" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    I've received your message and will get back to you within 1 business day.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="hover:scale-105 transition-transform duration-300"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="+44 7889 123939"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="starter">Starter Website (Free)</option>
                        <option value="business">Business Website</option>
                        <option value="ecommerce">E-Commerce Site</option>
                        <option value="webapp">Web Application</option>
                        <option value="automation">Automation</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                      Tell Me About Your Project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your business and what you're looking for. The more details you provide, the better I can help!"
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="mt-1"
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      I agree to be contacted about my enquiry and understand my data will be stored securely. *
                    </label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full md:w-auto group hover:scale-105 transition-transform duration-300"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                  </Button>

                  <p className="text-sm text-gray-500">
                    * Required fields
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Based in Ribble Valley, Serving the North West
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I work with businesses across Ribble Valley, Lancaster, Blackpool, and the wider North West region.
            </p>
          </div>

          {/* Google Maps Embed - Replace with actual coordinates */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg" style={{ height: '450px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37726.05842890625!2d-2.7177!3d53.7632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b73b0f32e178b%3A0x947d2c9b786c8f8!2sRibble Valley%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ribble Valley, North West UK Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Common Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: 'How quickly will you respond?',
                  a: 'I aim to respond to all enquiries within 1 business day, usually much sooner. If you need urgent help, call me directly.',
                },
                {
                  q: 'Are the free websites really free?',
                  a: 'Yes! I\'m offering 3-5 completely free starter websites to build my portfolio. The only "cost" is your time for a testimonial and permission to showcase the project.',
                },
                {
                  q: 'Do you work with businesses outside Ribble Valley?',
                  a: 'Absolutely! While I\'m based in Ribble Valley, I work with businesses across the entire North West and can work remotely with anyone in the UK.',
                },
                {
                  q: 'What happens after the free project?',
                  a: 'After completion, I provide ongoing support and can help with updates, maintenance, or additional features at my standard rates. No obligation though!',
                },
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-primary-50 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-bold text-gray-900 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
