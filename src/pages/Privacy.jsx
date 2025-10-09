import SEO from '../components/SEO'
import { Shield, Lock, Eye, Mail, Cookie, FileText } from 'lucide-react'

export default function Privacy() {
  const lastUpdated = "10th October 2025"

  return (
    <>
      <SEO 
        title="Privacy Policy"
        description="Privacy Policy for ThatMattGuy. Learn how we collect, use, and protect your personal information when you use our web design and automation services."
        keywords="Privacy Policy, Data Protection, GDPR, Personal Information"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
              <Shield className="w-8 h-8 text-primary-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Introduction</h2>
                  <p className="text-gray-600 leading-relaxed">
                    ThatMattGuy ("we", "us", or "our") operates the website thatmattguy.co.uk. This page informs you of our 
                    policies regarding the collection, use, and disclosure of personal information we receive from users of our website 
                    and services.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-3">
                    We are committed to protecting your privacy and complying with the UK General Data Protection Regulation (UK GDPR) 
                    and the Data Protection Act 2018.
                  </p>
                </div>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Information We Collect</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-6">Personal Information</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    When you contact us or request our services, we may collect:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Name and contact details (email address, phone number)</li>
                    <li>Business name and industry</li>
                    <li>Project requirements and preferences</li>
                    <li>Any other information you choose to provide in communications</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-6">Automatically Collected Information</h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    When you visit our website, we may automatically collect:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>IP address and browser type</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website addresses</li>
                    <li>Device information (type, operating system)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Lock className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">How We Use Your Information</h2>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li><strong>Service Delivery:</strong> To provide web design, development, and automation services</li>
                    <li><strong>Communication:</strong> To respond to your inquiries and provide customer support</li>
                    <li><strong>Project Management:</strong> To understand your requirements and deliver tailored solutions</li>
                    <li><strong>Website Improvement:</strong> To analyze how visitors use our website and improve user experience</li>
                    <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Cookies and Tracking</h2>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Our website may use cookies and similar tracking technologies to enhance your browsing experience. Cookies are 
                    small text files stored on your device that help us:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Remember your preferences</li>
                    <li>Understand how you use our website</li>
                    <li>Improve website functionality</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed mt-3">
                    You can control cookies through your browser settings. However, disabling cookies may affect website functionality.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Sharing */}
            <div className="mb-12">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Data Sharing and Third Parties</h2>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li><strong>Service Providers:</strong> Trusted third-party services that help us operate our website (e.g., hosting providers, analytics tools)</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights</li>
                    <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                  </ul>
                  <p className="text-gray-600 leading-relaxed mt-3">
                    All third-party service providers are required to maintain the confidentiality and security of your information.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
                  or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights Under UK GDPR</h2>
              <p className="text-gray-600 leading-relaxed mb-3">
                You have the following rights regarding your personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data (subject to legal obligations)</li>
                <li><strong>Right to Restrict Processing:</strong> Request limitation on how we use your data</li>
                <li><strong>Right to Data Portability:</strong> Request transfer of your data to another service provider</li>
                <li><strong>Right to Object:</strong> Object to processing of your personal data</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time where we rely on consent</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                To exercise any of these rights, please contact us at <a href="mailto:info@thatmattguy.co.uk" className="text-primary-600 hover:text-primary-700 font-semibold">info@thatmattguy.co.uk</a>
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
              <p className="text-gray-600 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy 
                Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, 
                we will securely delete or anonymize it.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information 
                from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </div>

            {/* Changes to Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy 
                Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> <a href="mailto:info@thatmattguy.co.uk" className="text-primary-600 hover:text-primary-700">info@thatmattguy.co.uk</a></p>
                <p><strong>Phone:</strong> <a href="tel:+447123456789" className="text-primary-600 hover:text-primary-700">+44 7123 456789</a></p>
                <p><strong>Location:</strong> Ribble Valley, Lancashire, United Kingdom</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
