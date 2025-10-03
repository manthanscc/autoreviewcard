import React from 'react';
import { FileText, AlertCircle, CheckCircle, XCircle, Scale, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../Home page/Footer';

export const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <FileText className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Terms of Service</h1>
              <p className="text-slate-300">Last updated: January 2025</p>
            </div>
          </div>
          <p className="text-xl text-slate-300">
            Please read these terms carefully before using our AI-powered review generation service.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Agreement */}
        <section className="mb-12 bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <Scale className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Agreement to Terms</h2>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">
            By accessing or using AI Reviews ("Service"), you agree to be bound by these Terms of Service ("Terms"). 
            If you disagree with any part of these terms, you may not access the Service.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl">
            <p className="text-slate-700 font-medium">
              💡 These Terms apply to all users, including businesses, administrators, and end-users 
              who scan QR codes to leave reviews.
            </p>
          </div>
        </section>

        {/* Service Description */}
        <section className="mb-12 bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Service Description</h2>
          
          <div className="space-y-4">
            <p className="text-slate-600 leading-relaxed">
              AI Reviews provides:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">QR Code Generation</h3>
                <p className="text-slate-600 text-sm">
                  Custom QR codes linking to your Google Business Profile for easy review submission.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
                <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">AI Review Writing</h3>
                <p className="text-slate-600 text-sm">
                  AI-powered suggestions to help customers write detailed, authentic reviews.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Multi-language Support</h3>
                <p className="text-slate-600 text-sm">
                  Review generation in English, Hindi, and Gujarati for diverse customer bases.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6">
                <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Analytics Dashboard</h3>
                <p className="text-slate-600 text-sm">
                  Real-time tracking of review requests, responses, and business growth metrics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* User Obligations */}
        <section className="mb-12 bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Your Obligations</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 font-bold text-lg">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Authentic Use</h3>
                <p className="text-slate-600">
                  Use the Service only to collect genuine reviews from real customers who have 
                  experienced your business.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 font-bold text-lg">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Compliance with Google Policies</h3>
                <p className="text-slate-600">
                  Follow all Google Business Profile and Google Reviews guidelines. Do not 
                  incentivize, manipulate, or fake reviews.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 font-bold text-lg">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Account Security</h3>
                <p className="text-slate-600">
                  Maintain the confidentiality of your account credentials and notify us immediately 
                  of any unauthorized access.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 font-bold text-lg">✓</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Accurate Information</h3>
                <p className="text-slate-600">
                  Provide accurate business information and keep your profile updated with 
                  current details.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Prohibited Activities */}
        <section className="mb-12 bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Prohibited Activities</h2>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl mb-6">
            <p className="text-red-900 font-semibold mb-4">You must NOT:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">✕</span>
                <span className="text-red-900">Post fake, fraudulent, or misleading reviews</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">✕</span>
                <span className="text-red-900">Offer incentives or compensation for positive reviews</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">✕</span>
                <span className="text-red-900">Use automated systems to generate artificial reviews</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">✕</span>
                <span className="text-red-900">Manipulate or filter reviews to only show positive feedback</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">✕</span>
                <span className="text-red-900">Share your account with unauthorized third parties</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">✕</span>
                <span className="text-red-900">Attempt to reverse engineer or exploit the Service</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-xl">
            <p className="text-orange-900">
              <strong>Warning:</strong> Violation of these terms may result in immediate account 
              suspension and potential legal action.
            </p>
          </div>
        </section>

        {/* Pricing & Payment */}
        <section className="mb-12 bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Pricing & Payment</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="font-bold text-slate-900 mb-2">Subscription Plans</h3>
              <p className="text-slate-600">
                We offer Starter (₹1,499/year) and Business (₹6,500/year) plans with automatic 
                renewal unless cancelled before the renewal date.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="font-bold text-slate-900 mb-2">Payment Terms</h3>
              <p className="text-slate-600">
                All fees are in Indian Rupees (INR) and must be paid in advance. We accept major 
                credit cards, debit cards, and UPI payments.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="font-bold text-slate-900 mb-2">Refund Policy</h3>
              <p className="text-slate-600">
                30-day money-back guarantee for first-time subscribers. Renewal fees are non-refundable 
                but you can cancel anytime to prevent future charges.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="font-bold text-slate-900 mb-2">Price Changes</h3>
              <p className="text-slate-600">
                We reserve the right to modify pricing with 30 days' notice. Existing subscribers 
                will maintain their current rate until the next renewal period.
              </p>
            </div>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="mb-12 bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Intellectual Property</h2>
          <p className="text-slate-600 mb-4">
            The Service, including all content, features, and functionality, is owned by AI Reviews 
            and protected by international copyright, trademark, and other intellectual property laws.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-xl p-4">
              <h3 className="font-bold text-slate-900 mb-2">Your Content</h3>
              <p className="text-slate-600 text-sm">
                You retain ownership of your business data and customer information. We only use 
                it to provide the Service.
              </p>
            </div>
            <div className="bg-purple-50 rounded-xl p-4">
              <h3 className="font-bold text-slate-900 mb-2">Our Content</h3>
              <p className="text-slate-600 text-sm">
                You may not copy, modify, distribute, or reverse engineer any part of our Service 
                without permission.
              </p>
            </div>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-12 bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Limitation of Liability</h2>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-2xl">
            <p className="text-slate-700 mb-4">
              <strong>DISCLAIMER:</strong> The Service is provided "as is" without warranties of any kind. 
              We do not guarantee:
            </p>
            <ul className="space-y-2 text-slate-600">
              <li>• Specific number of reviews or review quality</li>
              <li>• Uninterrupted or error-free service operation</li>
              <li>• Compatibility with all devices or browsers</li>
              <li>• Google's acceptance of all generated reviews</li>
            </ul>
          </div>
        </section>

        {/* Termination */}
        <section className="mb-12 bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Termination</h2>
          <p className="text-slate-600 mb-4">
            Either party may terminate this agreement at any time:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-2xl">👤</span>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">By You</h3>
                <p className="text-slate-600">
                  Cancel your subscription anytime through your dashboard or by contacting support. 
                  Access continues until the end of the billing period.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">⚖️</span>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">By Us</h3>
                <p className="text-slate-600">
                  We may suspend or terminate your account immediately if you violate these Terms, 
                  engage in fraudulent activity, or misuse the Service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
          <p className="mb-6 text-white/90">
            If you have any questions or concerns about these Terms of Service, please reach out to us:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:legal@aireviews.com"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 py-3 rounded-xl transition-colors text-center"
            >
              legal@aireviews.com
            </a>
            <a 
              href="https://wa.me/9426479677"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 py-3 rounded-xl transition-colors text-center"
            >
              WhatsApp: +91 94264 79677
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;