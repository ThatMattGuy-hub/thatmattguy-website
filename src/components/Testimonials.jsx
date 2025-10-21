import { Star, Quote } from 'lucide-react'

export default function Testimonials({ testimonials = [] }) {
  // Default placeholder testimonial if none provided
  const defaultTestimonials = [
    {
      name: 'Coming Soon',
      business: 'First Client Project',
      text: 'Testimonials from my first clients will appear here soon. Want to be featured? Get in touch to discuss your project today!',
      rating: 5,
      isPlaceholder: true,
    },
  ]

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {testimonials.length > 0 ? 'What Clients Say' : 'Client Testimonials Coming Soon'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {testimonials.length > 0 
              ? 'Real feedback from real businesses I\'ve helped grow online'
              : 'I\'m currently working with my first clients. Their testimonials will be featured here soon!'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {displayTestimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-8 shadow-lg relative ${
                testimonial.isPlaceholder ? 'border-2 border-dashed border-primary-300' : ''
              }`}
            >
              <Quote className="text-primary-200 absolute top-4 right-4" size={40} />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`${testimonial.isPlaceholder ? 'text-gray-300' : 'text-yellow-400'} fill-current`}
                    size={20} 
                  />
                ))}
              </div>

              <p className={`text-gray-700 mb-6 leading-relaxed ${testimonial.isPlaceholder ? 'italic' : ''}`}>
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4">
                <p className={`font-bold ${testimonial.isPlaceholder ? 'text-gray-400' : 'text-gray-900'}`}>
                  {testimonial.name}
                </p>
                <p className={`text-sm ${testimonial.isPlaceholder ? 'text-gray-400' : 'text-gray-600'}`}>
                  {testimonial.business}
                </p>
              </div>
            </div>
          ))}
        </div>

        {testimonials.length === 0 && (
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Want to be one of my first featured clients?
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              Get Started Today →
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
