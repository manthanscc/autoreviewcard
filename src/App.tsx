import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ReactGA from "react-ga4";
import { AdminDashboard } from "./components/AdminDashboard";
import { CompactReviewCardView } from "./components/CompactReviewCardView";
import { LoginPage } from "./components/LoginPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { storage } from "./utils/storage";
import { auth } from "./utils/auth";
import Homepage from "./components/Home page/Homepage";
import PrivacyPolicy from "./components/Policies/PrivacyPolicy";
import TermsOfService from "./components/Policies/TermsOfService";
import CookiePolicy from "./components/Policies/CookiePolicy";
import { CustomerForm } from "./components/Home page/CustomerForm";

ReactGA.initialize("G-YE1SGYY8P4"); // your measurement ID
ReactGA.send("pageview");

function App() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Admin Dashboard Route */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Home page route */}
        <Route path="/" element={<Homepage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />

        {/* Dynamic Review Card Routes */}
        <Route path="/:slug" element={<DynamicReviewCard />} />
        <Route path="/contact-form" element={<CustomerForm />} />
      </Routes>
    </Router>
  );
}

// Component to handle dynamic review card routing
const DynamicReviewCard: React.FC = () => {
  const [card, setCard] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const slug = window.location.pathname.slice(1); // Remove leading slash

  React.useEffect(() => {
    const loadCard = async () => {
      try {
        const foundCard = await storage.getCardBySlug(slug);
        setCard(foundCard);
      } catch (error) {
        console.error("Error loading card:", error);
        setCard(null);
      } finally {
        setLoading(false);
      }
    };

    loadCard();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">
            Loading Review Card
          </h1>
          <p className="text-slate-400">Please wait...</p>
        </div>
      </div>
    );
  }

  if (!card) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">❌</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Card Not Found</h1>
          <p className="text-slate-400 mb-8">
            The review card for "/{slug}" doesn't exist or has been removed.
          </p>
          <a
            href="/admin"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Go to Dashboard
          </a>
        </div>
      </div>
    );
  }

  return <CompactReviewCardView card={card} />;
};

export default App;
