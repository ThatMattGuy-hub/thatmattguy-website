import SEO from '../components/SEO'
import { FileText, AlertCircle, Scale, Ban, CheckCircle } from 'lucide-react'

export default function Terms() {
  const lastUpdated = "10th October 2025"

  return (
    <>
      <SEO 
        title="Terms & Conditions"
        description="Terms and Conditions for ThatMattGuy web design and automation services. Read our service terms, payment policies, and client responsibilities."
        keywords="Terms and Conditions, Service Agreement, Web Design Terms, Legal Terms"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
              <Scale className="w-8 h-8 text-primary-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-600">
              Please read these terms carefully before using our services.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Introduction */}
            <div className="mb-12">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Agreement to Terms</h2>
                  <p className="text-gray-600 leading-relaxed">
                    These Terms and Conditions ("Terms") govern your use of the ThatMattGuy website (thatmattguy.co.uk) and the 
                    services we provide. By accessing our website or engaging our services, you agree to be bound by these Terms.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-3">
                    If you do not agree with any part of these Terms, please do not use our website or services.
                  </p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Provided</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                ThatMattGuy provides the following services:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Web design and development</li>
                <li>E-commerce website development</li>
                <li>Custom web applications</li>
                <li>Business automation solutions</li>
                <li>AI integration and automation</li>
                <li>Website maintenance and support</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                Specific details of each project will be outlined in a separate project agreement or statement of work.
              </p>
            </div>

            {/* Project Process */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Process</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-6">1. Initial Consultation</h3>
              <p className="text-gray-600 leading-relaxed">
                We begin with a free consultation to understand your requirements, goals, and budget. This helps us provide an 
                accurate quote and project timeline.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-6">2. Proposal and Agreement</h3>
              <p className="text-gray-600 leading-relaxed">
                Following the consultation, we provide a detailed proposal including scope of work, timeline, deliverables, and 
                pricing. Work begins once you accept the proposal and any required deposit is paid.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-6">3. Development</h3>
              <p className="text-gray-600 leading-relaxed">
                We keep you informed throughout the development process with regular updates and opportunities for feedback at 
                agreed milestones.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-6">4. Review and Revisions</h3>
              <p className="text-gray-600 leading-relaxed">
                You'll have the opportunity to review the work and request revisions. The number of revision rounds will be 
                specified in your project agreement.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-6">5. Launch and Handover</h3>
              <p className="text-gray-600 leading-relaxed">
                Once approved, we launch your project and provide all necessary documentation, training, and support materials.
              </p>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Payment Terms</h2>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Pricing</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  All prices are quoted in British Pounds (GBP) and exclude VAT unless otherwise stated. Custom quotes are valid 
                  for 30 days from the date of issue.
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Payment Schedule</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li><strong>Starter Websites (£495):</strong> Full payment upfront (or free for first 3-5 clients)</li>
                  <li><strong>Business Websites (£995+):</strong> 50% deposit, 50% on completion</li>
                  <li><strong>E-Commerce/Advanced (£1,795+):</strong> 33% deposit, 33% at midpoint, 34% on completion</li>
                  <li><strong>Custom Projects:</strong> Payment schedule agreed in project proposal</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Late Payments</h3>
                <p className="text-gray-600 leading-relaxed">
                  Invoices are due within 14 days of issue unless otherwise agreed. Late payments may incur interest charges and 
                  may result in suspension of services or project work.
                </p>
              </div>
            </div>

            {/* Client Responsibilities */}
            <div className="mb-12">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Client Responsibilities</h2>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    To ensure successful project completion, clients are responsible for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Providing timely feedback and approvals at agreed milestones</li>
                    <li>Supplying all necessary content (text, images, logos) in a timely manner</li>
                    <li>Ensuring all provided content is legally owned or licensed for use</li>
                    <li>Providing access to necessary accounts, hosting, or third-party services</li>
                    <li>Making timely payments according to the agreed schedule</li>
                    <li>Communicating any changes to requirements or scope promptly</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed mt-3">
                    Delays caused by late client feedback or content provision may result in extended project timelines.
                  </p>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-6">Client Ownership</h3>
              <p className="text-gray-600 leading-relaxed">
                Upon full payment, you own the final deliverables created specifically for your project, including custom designs, 
                code, and content we create on your behalf.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-6">Third-Party Components</h3>
              <p className="text-gray-600 leading-relaxed">
                Projects may include third-party components (frameworks, libraries, plugins) that are subject to their own licenses. 
                You receive a license to use these components as part of your project.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-6">Portfolio Use</h3>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to display completed projects in our portfolio, case studies, and marketing materials unless 
                otherwise agreed in writing.
              </p>
            </div>

            {/* Warranties and Limitations */}
            <div className="mb-12">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Warranties and Disclaimers</h2>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Our Warranty</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    We warrant that:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Services will be performed with reasonable skill and care</li>
                    <li>Work will be substantially as described in the project agreement</li>
                    <li>We will fix bugs and errors discovered within the support period at no additional cost</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-6">Disclaimer</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Except as expressly stated above, we provide services "as is" without warranties of any kind. We do not 
                    guarantee specific results, rankings, traffic, or revenue from our services.
                  </p>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                To the fullest extent permitted by law:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Our total liability for any claim shall not exceed the amount paid by you for the specific service in question</li>
                <li>We are not liable for indirect, consequential, or incidental damages including lost profits or business interruption</li>
                <li>We are not responsible for third-party services, hosting, or platforms beyond our control</li>
                <li>We are not liable for issues arising from client-provided content or modifications made by third parties</li>
              </ul>
            </div>

            {/* Cancellation and Refunds */}
            <div className="mb-12">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Ban className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Cancellation and Refunds</h2>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-4">Client Cancellation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You may cancel a project at any time by providing written notice. In the event of cancellation:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-2">
                    <li>You will be invoiced for all work completed to date</li>
                    <li>Deposits are non-refundable</li>
                    <li>You will receive all work completed up to the cancellation date</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2 mt-6">Our Cancellation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We reserve the right to cancel a project if:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-2">
                    <li>Payment terms are not met</li>
                    <li>Client fails to provide necessary materials or feedback</li>
                    <li>Project requirements change significantly from the original agreement</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed mt-3">
                    In such cases, you will be refunded for any work not yet completed.
                  </p>
                </div>
              </div>
            </div>

            {/* Support and Maintenance */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Support and Maintenance</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                All projects include a support period as specified in your project agreement (typically 1-6 months). During this 
                period, we provide:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Bug fixes and error corrections</li>
                <li>Technical support via email</li>
                <li>Minor content updates (as specified in agreement)</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                After the initial support period, ongoing maintenance and support can be arranged at our standard hourly rate or 
                through a maintenance package.
              </p>
            </div>

            {/* Confidentiality */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Confidentiality</h2>
              <p className="text-gray-600 leading-relaxed">
                We respect the confidentiality of your business information. Any confidential information shared during the course 
                of our engagement will be kept confidential and not disclosed to third parties, except as required by law or with 
                your permission.
              </p>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms are governed by the laws of England and Wales. Any disputes arising from these Terms or our services 
                shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to These Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated "Last 
                updated" date. Continued use of our services after changes constitutes acceptance of the new Terms.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About These Terms?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> <a href="mailto:matt@thatmattguy.co.uk" className="text-primary-600 hover:text-primary-700">matt@thatmattguy.co.uk</a></p>
                <p><strong>Phone:</strong> <a href="tel:+447889123939" className="text-primary-600 hover:text-primary-700">+44 7889 123939</a></p>
                <p><strong>Location:</strong> Ribble Valley, Lancashire, United Kingdom</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
