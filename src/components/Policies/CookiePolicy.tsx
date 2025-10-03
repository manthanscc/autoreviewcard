import React from 'react';
import { Cookie, Settings, Target, BarChart3, Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../Home page/Footer';

export const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
              <Cookie className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Cookie Policy</h1>
              <p className="text-slate-300">Last updated: January 2025</p>
            </div>
          </div>
          <p className="text-xl text-slate-300">
            Learn how we use cookies and similar technologies to improve your experience.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* What Are Cookies */}
        <section className="mb-12 bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Cookie className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">What Are Cookies?</h2>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">
            Cookies are small text files stored on your device when you visit websites. They help us 
            remember your preferences, understand how you use our Service, and provide a better experience.
          </p>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6">
            <h3 className="font-bold text-slate-900 mb-3">🍪 Types of Data We Collect:</h3>
            <ul className="space-y-2 text-slate-600">
              <li>• Session identifiers and user preferences</li>
              <li>• Device information and browser type</li>
              <li>• Pages visited and features used</li>
              <li>• Login timestamps and authentication tokens</li>
            </ul>
          </div>
        </section>

        {/* Types of Cookies */}
        <section className="mb-12 bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Types of Cookies We Use</h2>
          
          <div className="space-y-6">
            {/* Essential Cookies */}
            <div className="border-l-4 border-red-500 pl-6 bg-red-50 rounded-r-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Essential Cookies</h3>
              </div>
              <p className="text-slate-600 mb-3">
                <strong>Purpose:</strong> Required for basic website functionality and security.
              </p>
              <p className="text-slate-600 mb-3">
                <strong>Examples:</strong> Authentication, session management, security tokens
              </p>
              <div className="bg-white rounded-xl p-3 text-sm">
                <span className="font-semibold text-red-600">Cannot be disabled</span> - These are necessary 
                for the Service to function properly.
              </div>
            </div>

            {/* Functional Cookies */}
            <div className="border-l-4 border-blue-500 pl-6 bg-blue-50 rounded-r-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Functional Cookies</h3>
              </div>
              <p className="text-slate-600 mb-3">
                <strong>Purpose:</strong> Remember your preferences and settings.
              </p>
              <p className="text-slate-600 mb-3">
                <strong>Examples:</strong> Language preference (English/Hindi/Gujarati), dashboard layout, 
                theme settings
              </p>
              <div className="bg-white rounded-xl p-3 text-sm">
                <span className="font-semibold text-blue-600">Can be disabled</span> - But you'll need to 
                reset preferences each visit.
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="border-l-4 border-purple-500 pl-6 bg-purple-50 rounded-r-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Analytics Cookies</h3>
              </div>
              <p className="text-slate-600 mb-3">
                <strong>Purpose:</strong> Understand how visitors interact with our Service.
              </p>
              <p className="text-slate-600 mb-3">
                <strong>Examples:</strong> Page views, time spent, feature usage, conversion tracking
              </p>
              <div className="bg-white rounded-xl p-3 text-sm">
                <span className="font-semibold text-purple-600">Can be disabled</span> - We collect 
                anonymized data to improve the Service.
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="border-l-4 border-green-500 pl-6 bg-green-50 rounded-r-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Marketing Cookies</h3>
              </div>
              <p className="text-slate-600 mb-3">
                <strong>Purpose:</strong> Track marketing campaign effectiveness.
              </p>
              <p className="text-slate-600 mb-3">
                <strong>Examples:</strong> Ad performance, referral sources, campaign attribution
              </p>
              <div className="bg-white rounded-xl p-3 text-sm">
                <span className="font-semibold text-green-600">Can be disabled</span> - You'll still see 
                ads but they won't be personalized.
              </div>
            </div>
          </div>
        </section>

        {/* Third-Party Cookies */}
        <section className="mb-12 bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Third-Party Cookies</h2>
          <p className="text-slate-600 mb-6">
            We use trusted third-party services that may set their own cookies:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span>🔍</span> Google Analytics
              </h3>
              <p className="text-slate-600 text-sm mb-2">
                Tracks website usage and user behavior patterns
              </p>
              <a 
                href="https://policies.google.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                View Google's Privacy Policy →
              </a>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span>⭐</span> Google Business
              </h3>
              <p className="text-slate-600 text-sm mb-2">
                Facilitates review posting to Google Business Profile
              </p>
              <a 
                href="https://policies.google.com/technologies/cookies" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-700 text-sm font-medium"
              >
                View Cookie Information →
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span>💳</span> Payment Processors
              </h3>
              <p className="text-slate-600 text-sm mb-2">
                Securely process subscription payments
              </p>
              <p className="text-slate-500 text-xs">
                Cookies used for fraud prevention and secure transactions
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span>💬</span> Support Chat
              </h3>
              <p className="text-slate-600 text-sm mb-2">
                Powers our WhatsApp and live chat support
              </p>
              <p className="text-slate-500 text-xs">
                Cookies for chat history and support context
              </p>
            </div>
          </div>
        </section>

        {/* Managing Cookies */}
        <section className="mb-12 bg-white rounded-3xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <Settings className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Managing Your Cookie Preferences</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-3">🎛️ Through Our Website</h3>
              <p className="text-slate-600 mb-4">
                When you first visit, you'll see a cookie consent banner. You can:
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>• Accept all cookies for the best experience</li>
                <li>• Customize your preferences by cookie type</li>
                <li>• Reject non-essential cookies (limited functionality)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
              <h3 className="font-bold text-slate-900 mb-3">🌐 Through Your Browser</h3>
              <p className="text-slate-600 mb-4">
                Most browsers allow you to control cookies through settings:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <a 
                  href="https://support.google.com/chrome/answer/95647" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl p-3 hover:shadow-md transition-shadow"
                >
                  <span className="font-medium text-slate-900">Chrome</span>
                  <span className="text-blue-600 text-sm block">→ Learn more</span>
                </a>
                <a 
                  href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl p-3 hover:shadow-md transition-shadow"
                >
                  <span className="font-medium text-slate-900">Firefox</span>
                  <span className="text-blue-600 text-sm block">→ Learn more</span>
                </a>
                <a 
                  href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl p-3 hover:shadow-md transition-shadow"
                >
                  <span className="font-medium text-slate-900">Safari</span>
                  <span className="text-blue-600 text-sm block">→ Learn more</span>
                </a>
                <a 
                  href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl p-3 hover:shadow-md transition-shadow"
                >
                  <span className="font-medium text-slate-900">Edge</span>
                  <span className="text-blue-600 text-sm block">→ Learn more</span>
                </a>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-2xl">
              <p className="text-orange-900">
                <strong>⚠️ Note:</strong> Disabling cookies may affect your ability to use certain 
                features of our Service, such as staying logged in or saving preferences.
              </p>
            </div>
          </div>
        </section>

        {/* Updates to Policy */}
        <section className="mb-12 bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Updates to This Policy</h2>
          <p className="text-slate-600 mb-4">
            We may update this Cookie Policy from time to time to reflect changes in technology, 
            legislation, or our business practices.
          </p>
          <div className="bg-blue-50 rounded-2xl p-6">
            <p className="text-slate-700">
              📅 We'll notify you of significant changes by:
            </p>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>• Email notification to registered users</li>
              <li>• Banner on our website</li>
              <li>• Update the "Last updated" date at the top of this page</li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Cookie className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Questions About Cookies?</h2>
          </div>
          <p className="mb-6 text-white/90">
            If you have questions about our use of cookies, please contact us:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:cookies@aireviews.com"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 px-6 py-3 rounded-xl transition-colors text-center"
            >
              cookies@aireviews.com
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

export default CookiePolicy;