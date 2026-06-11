import PageHeader from '@/components/PageHeader'
import { site } from '@/lib/data'

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for ThatMattGuy. Learn how we collect, use, and protect your personal information when you use our web design and automation services.',
  alternates: { canonical: '/privacy' },
}

const lastUpdated = '10th October 2025'

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow={`Last updated: ${lastUpdated}`}
        title="Privacy Policy"
        intro="Your privacy is important to us. This policy explains how we collect, use, and protect your personal information."
      />

      <section className="py-20">
        <div className="container-site max-w-3xl space-y-14 text-muted [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-char [&_h3]:mt-6 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-char [&_p]:mt-4 [&_p]:leading-relaxed [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_a]:text-accent">
          <div>
            <h2>Introduction</h2>
            <p>
              ThatMattGuy (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the website
              thatmattguy.co.uk. This page informs you of our policies regarding the collection, use,
              and disclosure of personal information we receive from users of our website and services.
            </p>
            <p>
              We are committed to protecting your privacy and complying with the UK General Data
              Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </div>

          <div>
            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>When you contact us or request our services, we may collect:</p>
            <ul>
              <li>Name and contact details (email address, phone number)</li>
              <li>Business name and industry</li>
              <li>Project requirements and preferences</li>
              <li>Any other information you choose to provide in communications</li>
            </ul>
            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>IP address and browser type</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Device information (type, operating system)</li>
            </ul>
          </div>

          <div>
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul>
              <li><strong className="text-char">Service Delivery:</strong> To provide web design, development, and automation services</li>
              <li><strong className="text-char">Communication:</strong> To respond to your inquiries and provide customer support</li>
              <li><strong className="text-char">Project Management:</strong> To understand your requirements and deliver tailored solutions</li>
              <li><strong className="text-char">Website Improvement:</strong> To analyze how visitors use our website and improve user experience</li>
              <li><strong className="text-char">Legal Compliance:</strong> To comply with legal obligations and protect our rights</li>
            </ul>
          </div>

          <div>
            <h2>Cookies and Tracking</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your browsing
              experience. Cookies are small text files stored on your device that help us:
            </p>
            <ul>
              <li>Remember your preferences</li>
              <li>Understand how you use our website</li>
              <li>Improve website functionality</li>
            </ul>
            <p>
              You can control cookies through your browser settings. However, disabling cookies may
              affect website functionality.
            </p>
          </div>

          <div>
            <h2>Data Sharing and Third Parties</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share
              your information with:
            </p>
            <ul>
              <li><strong className="text-char">Service Providers:</strong> Trusted third-party services that help us operate our website (e.g., hosting providers, analytics tools)</li>
              <li><strong className="text-char">Legal Requirements:</strong> When required by law or to protect our legal rights</li>
              <li><strong className="text-char">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
            </ul>
            <p>
              All third-party service providers are required to maintain the confidentiality and
              security of your information.
            </p>
          </div>

          <div>
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. However,
              no method of transmission over the internet or electronic storage is 100% secure, and we
              cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2>Your Rights Under UK GDPR</h2>
            <p>You have the following rights regarding your personal data:</p>
            <ul>
              <li><strong className="text-char">Right to Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong className="text-char">Right to Rectification:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong className="text-char">Right to Erasure:</strong> Request deletion of your personal data (subject to legal obligations)</li>
              <li><strong className="text-char">Right to Restrict Processing:</strong> Request limitation on how we use your data</li>
              <li><strong className="text-char">Right to Data Portability:</strong> Request transfer of your data to another service provider</li>
              <li><strong className="text-char">Right to Object:</strong> Object to processing of your personal data</li>
              <li><strong className="text-char">Right to Withdraw Consent:</strong> Withdraw consent at any time where we rely on consent</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>

          <div>
            <h2>Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes
              outlined in this Privacy Policy, unless a longer retention period is required or permitted
              by law. When we no longer need your information, we will securely delete or anonymize it.
            </p>
          </div>

          <div>
            <h2>Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly
              collect personal information from children. If you believe we have collected information
              from a child, please contact us immediately.
            </p>
          </div>

          <div>
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by
              posting the new Privacy Policy on this page and updating the &quot;Last updated&quot;
              date. We encourage you to review this Privacy Policy periodically.
            </p>
          </div>

          <div className="card-soft">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how we handle your personal
              information, please contact us:
            </p>
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
