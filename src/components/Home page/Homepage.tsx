import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import FAQSection from "./faq";
import { CustomerSuccess } from "./CustomerSuccess";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Features from "./Features";
import Reviewcards from "./Reviewcards";
import Industries from "./Industries";
import Solution from "./Solution";
import Problem from "./Problem";
import Heropage from "./Heropage";
import WhatsAppButton from "./WhatsApp";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Smooth scroll helper
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = "#contact";
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <WhatsAppButton phoneNumber="9426479677" />

      <Heropage isVisible={isVisible} scrollToContact={scrollToContact} />

      <Problem />
      <Solution />
      <Industries />
      <Reviewcards />
      <Features />
      <Pricing />
      <Testimonials />
      <CustomerSuccess />
      <FAQSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
