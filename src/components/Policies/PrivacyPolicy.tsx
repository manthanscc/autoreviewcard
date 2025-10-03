import React from 'react';
import { Shield, Lock, Eye, Database, UserCheck, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../Home page/Footer';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Privacy Policy</h1>
              <p className="text-slate-300">Last updated: January 2025</p>
            </div>
          </div>
          <p className="text-xl text-slate-300">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Introduction */}
        <section className="mb-12 bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Introduction</h2>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">
            Welcome to AI Reviews. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you about how we look after your personal data when you visit our 
            website and use our AI-powered review generation services.
          </p>
          <p className="text-slate-600 leading-relaxed">
            AI Reviews provides QR code-based review collection services that help businesses gather Google 
            reviews through AI-assisted content generation. We process minimal personal information necessary 
            to provide our services effectively.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-12 bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Database className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Information We Collect</h2>
          </div>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Business Information</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Business name and location</li>
                <li>Contact details (email, phone number)</li>
                <li>Google Business Profile information</li>
                <li>Industry and service categories</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Customer Data</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>QR code scan timestamps (anonymous)</li>
                <li>Device type and browser information</li>
                <li>IP addresses (for security purposes only)</li>
                <li>Language preferences</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Usage Data</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Number of reviews generated</li>
                <li>AI feature usage statistics</li>
                <li>Service preferences and settings</li>
                <li>Dashboard analytics data</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-12 bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <UserCheck className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">How We Use Your Information</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Service Delivery</h3>
                <p className="text-slate-600">
                  Generate personalized QR codes, create AI-powered review suggestions, 
                  and facilitate the review posting process to Google.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-purple-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Analytics & Improvement</h3>
                <p className="text-slate-600">
                  Analyze usage patterns to improve our AI algorithms, enhance user experience, 
                  and provide better review generation capabilities.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Communication</h3>
                <p className="text-slate-600">
                  Send service updates, respond to support inquiries, and provide 
                  important notifications about your account.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-orange-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Security & Fraud Prevention</h3>
                <p className="text-slate-600">
                  Monitor for suspicious activity, prevent abuse of our services, 
                  and ensure compliance with Google's review policies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Protection */}
        <section className="mb-12 bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <Lock className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Data Protection & Security</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-3">🔐 Encryption</h3>
              <p className="text-slate-600 text-sm">
                All data transmitted between your device and our servers is encrypted using 
                industry-standard SSL/TLS protocols.
              </p>
            </div>

            <div className="bg-purple-50 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-3">🔒 Secure Storage</h3>
              <p className="text-slate-600 text-sm">
                Your data is stored on secure servers with restricted access, regular backups, 
                and comprehensive disaster recovery plans.
              </p>
            </div>

            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-3">👥 Access Control</h3>
              <p className="text-slate-600 text-sm">
                Only authorized personnel have access to your data, and all access is logged 
                and monitored for security purposes.
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-3">🛡️ Compliance</h3>
              <p className="text-slate-600 text-sm">
                We comply with GDPR, CCPA, and other data protection regulations to ensure 
                your rights are protected.
              </p>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-12 bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <UserCheck className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Your Rights</h2>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-6">
            <p className="text-slate-700 font-medium mb-4">You have the right to:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">✓</span>
                <span className="text-slate-600">Access your personal data and request a copy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">✓</span>
                <span className="text-slate-600">Correct inaccurate or incomplete information</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">✓</span>
                <span className="text-slate-600">Request deletion of your data (right to be forgotten)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">✓</span>
                <span className="text-slate-600">Object to processing of your personal data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">✓</span>
                <span className="text-slate-600">Request data portability to another service</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">✓</span>
                <span className="text-slate-600">Withdraw consent at any time</span>
              </li>
            </ul>
          </div>

          <p className="text-slate-600">
            To exercise any of these rights, please contact us at{' '}
            <a href="mailto:privacy@aireviews.com" className="text-blue-600 hover:text-blue-700 font-medium">
              privacy@aireviews.com
            </a>
          </p>
        </section>

        {/* Third-Party Services */}
        <section className="mb-12 bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Third-Party Services</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="font-bold text-slate-900 mb-2">Google Services</h3>
              <p className="text-slate-600">
                We integrate with Google Business Profile and Google Reviews. Review data 
                posted through our service is subject to Google's Terms of Service and Privacy Policy.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="font-bold text-slate-900 mb-2">Analytics Providers</h3>
              <p className="text-slate-600">
                We use analytics tools to understand how our service is used. These providers 
                may collect anonymous usage data in accordance with their own privacy policies.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="font-bold text-slate-900 mb-2">Payment Processors</h3>
              <p className="text-slate-600">
                Payment information is processed securely by our payment partners. We do not 
                store your credit card details on our servers.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Contact Us</h2>
          </div>
          
          <p className="mb-6 text-white/90">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <p className="font-semibold mb-1">Email</p>
              <a href="mailto:privacy@aireviews.com" className="text-white/90 hover:text-white">
                privacy@aireviews.com
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <p className="font-semibold mb-1">WhatsApp</p>
              <a href="https://wa.me/9426479677" className="text-white/90 hover:text-white">
                +91 94264 79677
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;