export const site = {
  name: 'ThatMattGuy',
  url: 'https://thatmattguy.co.uk',
  email: 'matt@thatmattguy.co.uk',
  phone: '+44 7889 123939',
  phoneHref: 'tel:+447889123939',
  location: 'Ribble Valley, North West UK',
  tagline: 'Design. Code. Motion.',
  description:
    'Creative web design & development studio in the Ribble Valley. High-performance websites, e-commerce, web apps and AI automation for ambitious businesses across the North West.',
}

export const services = [
  {
    slug: 'web-design',
    title: 'Web Design',
    short: 'Design',
    index: '01',
    description:
      'Custom, mobile-first web design that captures your brand and converts visitors into customers.',
    long: 'Every pixel earns its place. We design interfaces that look exceptional, load instantly, and guide visitors towards action — built around your brand, not a template.',
    highlights: ['Custom visual design', 'Mobile-first approach', 'User-centered layouts', 'Motion & interaction design'],
    deliverables: [
      'Bespoke visual identity translated to the web',
      'Responsive layouts for every screen size',
      'Interaction & motion design that elevates UX',
      'Conversion-focused page architecture',
      'Accessibility built in (WCAG AA)',
      'Design systems you can grow with',
    ],
    faqs: [
      {
        q: 'Do you use templates?',
        a: 'No. Every site is designed from scratch around your brand, audience and goals. Templates look like templates — custom design is what makes you stand out.',
      },
      {
        q: 'Will my site work on mobile?',
        a: 'Every design starts mobile-first. Your site will look and perform beautifully on phones, tablets and desktops.',
      },
    ],
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    short: 'Development',
    index: '02',
    description:
      'Professional web development with clean code, fast performance, and scalable architecture.',
    long: 'Modern engineering practices, clean code, and performance budgets enforced from day one. The same discipline behind this very site goes into every project.',
    highlights: ['Modern technologies', 'Lightning-fast performance', 'Security first', 'Scalable solutions'],
    deliverables: [
      'Modern, server-rendered builds on proven frameworks',
      '90+ Lighthouse performance scores',
      'SEO-optimised, semantic markup',
      'Secure, maintainable codebases',
      'Analytics & monitoring set up',
      'Documentation and handover training',
    ],
    faqs: [
      {
        q: 'What technologies do you use?',
        a: 'We work with modern, industry-standard frameworks and tooling — the same technologies trusted by leading global brands. The right tools are chosen for each project, whether that is a content-driven website, a complex web application or animation-heavy interactive work.',
      },
      {
        q: 'How fast will my site be?',
        a: 'We build to performance budgets and target 90+ Lighthouse scores. Fast sites rank higher and convert better — it is non-negotiable.',
      },
    ],
  },
  {
    slug: 'e-commerce',
    title: 'E-Commerce',
    short: 'E-Commerce',
    index: '03',
    description:
      'Complete online stores with secure payments, inventory management, and powerful analytics.',
    long: 'From product catalogue to checkout, we build stores that are fast, trustworthy and effortless to manage — so you can focus on selling.',
    highlights: ['Full e-commerce features', 'Secure payments', 'Inventory management', 'Sales analytics'],
    deliverables: [
      'Full product catalogue & management',
      'Secure payment gateway integration (Stripe, PayPal)',
      'Customer accounts & order tracking',
      'Inventory & stock management',
      'Sales analytics dashboards',
      'Email marketing integration',
    ],
    faqs: [
      {
        q: 'Which payment providers do you support?',
        a: 'Stripe and PayPal as standard, with others available on request. All payments are PCI-compliant and secure.',
      },
      {
        q: 'Can I manage products myself?',
        a: 'Yes — every store comes with an admin dashboard and training so you can add products, manage orders and update content without touching code.',
      },
    ],
  },
  {
    slug: 'automation',
    title: 'AI & Automation',
    short: 'Automation',
    index: '04',
    description:
      'AI-powered automation that saves hours every week — intelligent chatbots, automated workflows, and smarter business processes.',
    long: 'Stop doing manually what software can do instantly. We build AI chatbots, intelligent workflows and automations that give you your time back.',
    highlights: ['AI chatbots', 'Intelligent automation', 'Workflow optimization', 'AI content generation'],
    deliverables: [
      'AI chatbots trained on your business',
      'Automated workflows (bookings, invoicing, follow-ups)',
      'Data entry & processing automation',
      'AI content generation pipelines',
      'System integrations (CRM, email, calendars)',
      'Ongoing optimisation & support',
    ],
    faqs: [
      {
        q: 'What can actually be automated?',
        a: 'More than you would think — enquiry handling, appointment booking, invoice generation, review requests, data entry, reporting. If you do it repeatedly, it can probably be automated.',
      },
      {
        q: 'Is AI right for a small business?',
        a: 'Absolutely. AI tools are now affordable and accessible. A chatbot that answers enquiries 24/7 or a workflow that saves 5 hours a week pays for itself quickly.',
      },
    ],
  },
  {
    slug: 'web-applications',
    title: 'Web Applications',
    short: 'Web Apps',
    index: '05',
    description:
      'Custom web applications built specifically for your business needs and processes.',
    long: 'When off-the-shelf software does not fit, we build tools that do — booking systems, customer portals, dashboards and internal tools shaped around how you actually work.',
    highlights: ['Booking systems', 'Customer portals', 'Data dashboards', 'Internal tools'],
    deliverables: [
      'Custom booking & scheduling systems',
      'Customer portals with secure login',
      'Real-time data dashboards',
      'Internal tools & admin systems',
      'Third-party API integrations',
      'Scalable cloud infrastructure',
    ],
    faqs: [
      {
        q: 'How long does a web app take to build?',
        a: 'It depends on complexity — a simple booking system might take 3-4 weeks, a full customer portal 2-3 months. You will get a clear timeline in your proposal.',
      },
      {
        q: 'Will it scale as my business grows?',
        a: 'Yes. Every application is architected to scale — more users, more data, more features — without needing a rebuild.',
      },
    ],
  },
]

export const pricing = [
  {
    name: 'Starter',
    price: '£595',
    badge: 'Most Popular',
    popular: true,
    description: 'Perfect for small businesses getting started online.',
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
  },
  {
    name: 'Business',
    price: 'From £995',
    popular: false,
    description: 'For established businesses wanting a professional presence.',
    features: [
      'Up to 10 pages',
      'Custom design',
      'Advanced contact forms',
      'Blog / news section',
      'Advanced SEO optimisation',
      'Google Analytics setup',
      'Newsletter integration',
      '3 months support',
      'Content management system',
    ],
    cta: 'Request Quote',
  },
  {
    name: 'E-Commerce / Advanced',
    price: 'From £1,895',
    popular: false,
    description: 'Full-featured online stores and complex builds.',
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
  },
]

export const projects = [
  {
    title: 'Local Restaurant Website',
    category: 'Web Design',
    description: 'Modern, mobile-friendly website with online menu and reservation system.',
    features: ['Responsive design', 'Online bookings', 'Menu showcase', 'Maps integration'],
    isDemo: true,
  },
  {
    title: 'E-Commerce Store',
    category: 'E-Commerce',
    description: 'Full-featured online shop with payment processing and inventory management.',
    features: ['Product catalogue', 'Secure checkout', 'Order tracking', 'Admin dashboard'],
    isDemo: true,
  },
  {
    title: 'Booking System',
    category: 'Web Application',
    description: 'Custom appointment booking app for service-based businesses.',
    features: ['Calendar integration', 'Email reminders', 'Client management', 'Payments'],
    isDemo: true,
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Free Consultation',
    description: 'We discuss your business, goals, and requirements. No pressure, no obligation — just a clear conversation.',
  },
  {
    step: '02',
    title: 'Proposal & Planning',
    description: 'A clear proposal with timeline and pricing. Once approved, we plan the details together.',
  },
  {
    step: '03',
    title: 'Design & Development',
    description: 'We build your website or application, keeping you updated with regular progress checks and previews.',
  },
  {
    step: '04',
    title: 'Review & Refine',
    description: 'You review the work and we make any adjustments needed until you are completely happy.',
  },
  {
    step: '05',
    title: 'Launch & Support',
    description: 'We launch your site and provide training and ongoing support to ensure your success.',
  },
]

export const stats = [
  { value: 7, suffix: '+', label: 'Years of experience' },
  { value: 90, suffix: '+', label: 'Lighthouse score target' },
  { value: 100, suffix: '%', label: 'Custom-built, no templates' },
  { value: 1, suffix: ' day', label: 'Response time' },
]
