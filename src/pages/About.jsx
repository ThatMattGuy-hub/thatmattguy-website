import { Heart, Target, Users, MessageCircle, CheckCircle, Coffee } from 'lucide-react'
import Button from '../components/Button'
import SEO from '../components/SEO'

export default function About() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Genuine Care',
      description: 'Your success is my success. I genuinely care about helping your business grow and thrive online.',
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: 'Clear Communication',
      description: 'No jargon, no confusion. I explain everything in plain English and keep you updated every step of the way.',
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Reliability',
      description: 'When I commit to a deadline, I stick to it. You can count on me to deliver quality work on time.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Results-Focused',
      description: 'Pretty websites are great, but what matters most is helping your business achieve its goals.',
    },
  ]

  const process = [
    {
      step: '1',
      title: 'Free Consultation',
      description: 'We chat about your business, goals, and what you need. No pressure, just a friendly conversation.',
    },
    {
      step: '2',
      title: 'Proposal & Planning',
      description: 'I create a clear proposal with timeline and pricing. Once approved, we plan the details together.',
    },
    {
      step: '3',
      title: 'Design & Development',
      description: 'I build your website or app, keeping you updated with regular progress checks and previews.',
    },
    {
      step: '4',
      title: 'Review & Refine',
      description: 'You review the work and I make any adjustments needed until you\'re completely happy.',
    },
    {
      step: '5',
      title: 'Launch & Support',
      description: 'We launch your site and I provide training and ongoing support to ensure your success.',
    },
  ]

  return (
    <>
      <SEO 
        title="About Matt"
        description="Meet Matt, a freelance web designer and developer in Ribble Valley helping small businesses in the North West with websites, web apps, and automation."
        keywords="Freelance Web Designer Ribble Valley, About ThatMattGuy, Web Developer North West, Local Web Design Ribble Valley"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Hi, I'm Matt
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A freelance web designer and developer helping small businesses in the Ribble Valley & the North West 
                build their online presence
              </p>
            </div>

            {/* Family photo */}
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8 mb-8 shadow-xl max-w-2xl mx-auto">
              <img 
                src="/family.jpg" 
                alt="Matt and family" 
                className="rounded-xl shadow-2xl mx-auto w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              My Story
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                Hi, I'm Matt and I've started ThatMattGuy because I know how hard it can be for small businesses to get a good website without paying agency prices or dealing with tech jargon.
              </p>

              <p className="text-xl leading-relaxed">
                I'm not trying to sound like a big company or a slick marketer, I just want to help local businesses get online, look good, and work smarter.
              </p>

              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg my-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">My Experience</h3>
                <p className="leading-relaxed mb-4">
                  For the last 7 years, I've worked for a local company building websites, web apps, and automation tools. I've learned what works (and what doesn't), and I've helped businesses make their tech simpler and more useful.
                </p>
                <p className="leading-relaxed mb-0">
                  Now, I'm taking that experience and putting it to work for smaller businesses — the ones that don't have big budgets but still deserve proper, professional websites and digital tools that make life easier.
                </p>
              </div>

              <p className="leading-relaxed">
                I live here in the Ribble Valley with my wife and kids. Like most people running a household or a small business, I know what it's like to juggle time, watch the pennies, and need people you can actually rely on. That's the kind of service I want to offer — straightforward, honest, and helpful.
              </p>

              <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-lg my-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How I Work</h3>
                <p className="leading-relaxed mb-4">
                  I'll always be upfront about costs and timeframes. I won't try to upsell you things you don't need. When I build something, I want it to work for you long after it's launched, not just look good on day one.
                </p>
                <p className="leading-relaxed mb-0">
                  If you need ongoing help, I'll be here. If you just need a one-off build, that's fine too. Either way, I aim to make the whole process clear and stress-free.
                </p>
              </div>


              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-lg my-6 shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What I Offer</h3>
                <p className="leading-relaxed mb-4">
                  I'm excited to work with small businesses in Ribble Valley, Lancaster, Blackpool, and across the North West.
                </p>
                <p className="leading-relaxed mb-0">
                  Whether you need a website, an online store, or a simple automation to save time, I'd love to help. With competitive pricing and flexible payment plans, I make professional web development accessible to businesses of all sizes. Let's build something that actually makes a difference for your business.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button to="/contact" size="lg" className="hover:scale-105 transition-transform duration-300">
                Let's Work Together
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <Coffee className="text-primary-600 w-12 h-12 animate-float" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                Why Being Local Matters
              </h2>

              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Working with a local freelancer means you're not just another ticket number in a queue. 
                  You can meet me for a coffee, call me directly, and know that I'm invested in the success 
                  of our local business community.
                </p>

                <p>
                  I understand the North West market, the local competition, and what customers in Ribble Valley, 
                  Lancaster, Blackpool, and surrounding areas are looking for. This local knowledge helps me 
                  create websites that truly resonate with your target audience.
                </p>

                <p className="font-semibold text-gray-900">
                  Plus, when you support a local freelancer, you're supporting a local family. Every project 
                  helps me provide for my wife and children while building something I'm passionate about.
                </p>
              </div>

              <div className="mt-8 text-center">
                <Button to="/contact" variant="primary" size="lg" className="hover:scale-105 transition-transform duration-300">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's build something together
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you need a simple website or a complex web application, I'm here to help. 
              Let's have a chat about your project — no pressure, just possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" to="/contact" className="hover:scale-105 transition-transform duration-300">
                Get in Touch
              </Button>
              <Button variant="secondary" size="lg" to="/services" className="hover:scale-105 transition-transform duration-300">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
