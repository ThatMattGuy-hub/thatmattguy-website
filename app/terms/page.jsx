import PageHeader from '@/components/PageHeader'
import { site } from '@/lib/data'

export const metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms and Conditions for ThatMattGuy web design and automation services. Read our service terms, payment policies, and client responsibilities.',
  alternates: { canonical: '/terms' },
}

const lastUpdated = '10th October 2025'

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow={`Last updated: ${lastUpdated}`}
        title="Terms & Conditions"
        intro="Please read these terms carefully before using our services."
      />

      <section className="py-20">
        <div className="container-site max-w-3xl space-y-14 text-muted [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-char [&_h3]:mt-6 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-char [&_p]:mt-4 [&_p]:leading-relaxed [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_a]:text-accent">
          <div>
            <h2>Agreement to Terms</h2>
            <p>
              These Terms and Conditions (&quot;Terms&quot;) govern your use of the ThatMattGuy website
              (thatmattguy.co.uk) and the services we provide. By accessing our website or engaging our
              services, you agree to be bound by these Terms.
            </p>
            <p>If you do not agree with any part of these Terms, please do not use our website or services.</p>
          </div>

          <div>
            <h2>Services Provided</h2>
            <p>ThatMattGuy provides the following services:</p>
            <ul>
              <li>Web design and development</li>
              <li>E-commerce website development</li>
              <li>Custom web applications</li>
              <li>Business automation solutions</li>
              <li>AI integration and automation</li>
              <li>Website maintenance and support</li>
            </ul>
            <p>
              Specific details of each project will be outlined in a separate project agreement or
              statement of work.
            </p>
          </div>

          <div>
            <h2>Project Process</h2>
            <h3>1. Initial Consultation</h3>
            <p>
              We begin with a free consultation to understand your requirements, goals, and budget. This
              helps us provide an accurate quote and project timeline.
            </p>
            <h3>2. Proposal and Agreement</h3>
            <p>
              Following the consultation, we provide a detailed proposal including scope of work,
              timeline, deliverables, and pricing. Work begins once you accept the proposal and any
              required deposit is paid.
            </p>
            <h3>3. Development</h3>
            <p>
              We keep you informed throughout the development process with regular updates and
              opportunities for feedback at agreed milestones.
            </p>
            <h3>4. Review and Revisions</h3>
            <p>
              You&apos;ll have the opportunity to review the work and request revisions. The number of
              revision rounds will be specified in your project agreement.
            </p>
            <h3>5. Launch and Handover</h3>
            <p>
              Once approved, we launch your project and provide all necessary documentation, training,
              and support materials.
            </p>
          </div>

          <div className="card-soft border-l-2 border-l-accent">
            <h2>Payment Terms</h2>
            <h3>Pricing</h3>
            <p>
              All prices are quoted in British Pounds (GBP) and exclude VAT unless otherwise stated.
              Custom quotes are valid for 30 days from the date of issue.
            </p>
            <h3>Payment Schedule</h3>
            <ul>
              <li><strong className="text-char">Starter Websites (£595):</strong> Full payment upfront</li>
              <li><strong className="text-char">Business Websites (£995+):</strong> 50% deposit, 50% on completion</li>
              <li><strong className="text-char">E-Commerce/Advanced (£1,895+):</strong> 33% deposit, 33% at midpoint, 34% on completion</li>
              <li><strong className="text-char">Custom Projects:</strong> Payment schedule agreed in project proposal</li>
            </ul>
            <h3>Late Payments</h3>
            <p>
              Invoices are due within 14 days of issue unless otherwise agreed. Late payments may incur
              interest charges and may result in suspension of services or project work.
            </p>
          </div>

          <div>
            <h2>Client Responsibilities</h2>
            <p>To ensure successful project completion, clients are responsible for:</p>
            <ul>
              <li>Providing timely feedback and approvals at agreed milestones</li>
              <li>Supplying all necessary content (text, images, logos) in a timely manner</li>
              <li>Ensuring all provided content is legally owned or licensed for use</li>
              <li>Providing access to necessary accounts, hosting, or third-party services</li>
              <li>Making timely payments according to the agreed schedule</li>
              <li>Communicating any changes to requirements or scope promptly</li>
            </ul>
            <p>
              Delays caused by late client feedback or content provision may result in extended project
              timelines.
            </p>
          </div>

          <div>
            <h2>Intellectual Property Rights</h2>
            <h3>Client Ownership</h3>
            <p>
              Upon full payment, you own the final deliverables created specifically for your project,
              including custom designs, code, and content we create on your behalf.
            </p>
            <h3>Third-Party Components</h3>
            <p>
              Projects may include third-party components (frameworks, libraries, plugins) that are
              subject to their own licenses. You receive a license to use these components as part of
              your project.
            </p>
            <h3>Portfolio Use</h3>
            <p>
              We reserve the right to display completed projects in our portfolio, case studies, and
              marketing materials unless otherwise agreed in writing.
            </p>
          </div>

          <div>
            <h2>Warranties and Disclaimers</h2>
            <h3>Our Warranty</h3>
            <p>We warrant that:</p>
            <ul>
              <li>Services will be performed with reasonable skill and care</li>
              <li>Work will be substantially as described in the project agreement</li>
              <li>We will fix bugs and errors discovered within the support period at no additional cost</li>
            </ul>
            <h3>Disclaimer</h3>
            <p>
              Except as expressly stated above, we provide services &quot;as is&quot; without warranties
              of any kind. We do not guarantee specific results, rankings, traffic, or revenue from our
              services.
            </p>
          </div>

          <div>
            <h2>Limitation of Liability</h2>
            <p>To the fullest extent permitted by law:</p>
            <ul>
              <li>Our total liability for any claim shall not exceed the amount paid by you for the specific service in question</li>
              <li>We are not liable for indirect, consequential, or incidental damages including lost profits or business interruption</li>
              <li>We are not responsible for third-party services, hosting, or platforms beyond our control</li>
              <li>We are not liable for issues arising from client-provided content or modifications made by third parties</li>
            </ul>
          </div>

          <div>
            <h2>Cancellation and Refunds</h2>
            <h3>Client Cancellation</h3>
            <p>You may cancel a project at any time by providing written notice. In the event of cancellation:</p>
            <ul>
              <li>You will be invoiced for all work completed to date</li>
              <li>Deposits are non-refundable</li>
              <li>You will receive all work completed up to the cancellation date</li>
            </ul>
            <h3>Our Cancellation</h3>
            <p>We reserve the right to cancel a project if:</p>
            <ul>
              <li>Payment terms are not met</li>
              <li>Client fails to provide necessary materials or feedback</li>
              <li>Project requirements change significantly from the original agreement</li>
            </ul>
            <p>In such cases, you will be refunded for any work not yet completed.</p>
          </div>

          <div>
            <h2>Support and Maintenance</h2>
            <p>
              All projects include a support period as specified in your project agreement (typically
              1-6 months). During this period, we provide:
            </p>
            <ul>
              <li>Bug fixes and error corrections</li>
              <li>Technical support via email</li>
              <li>Minor content updates (as specified in agreement)</li>
            </ul>
            <p>
              After the initial support period, ongoing maintenance and support can be arranged at our
              standard hourly rate or through a maintenance package.
            </p>
          </div>

          <div>
            <h2>Confidentiality</h2>
            <p>
              We respect the confidentiality of your business information. Any confidential information
              shared during the course of our engagement will be kept confidential and not disclosed to
              third parties, except as required by law or with your permission.
            </p>
          </div>

          <div>
            <h2>Governing Law</h2>
            <p>
              These Terms are governed by the laws of England and Wales. Any disputes arising from these
              Terms or our services shall be subject to the exclusive jurisdiction of the courts of
              England and Wales.
            </p>
          </div>

          <div>
            <h2>Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms at any time. Changes will be posted on this
              page with an updated &quot;Last updated&quot; date. Continued use of our services after
              changes constitutes acceptance of the new Terms.
            </p>
          </div>

          <div className="card-soft">
            <h2>Questions About These Terms?</h2>
            <p>If you have any questions about these Terms and Conditions, please contact us:</p>
            <ul className="!list-none !pl-0">
              <li><strong className="text-char">Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><strong className="text-char">Phone:</strong> <a href={site.phoneHref}>{site.phone}</a></li>
              <li><strong className="text-char">Location:</strong> Ribble Valley, Lancashire, United Kingdom</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
