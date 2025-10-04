import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber = '9426479677' 
}) => {
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState({ form: false, whatsapp: false });

  return (
    <>
      {/* Floating Buttons Container */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        
        {/* Customer Form Button */}
        <div className="relative group">
          <button
            className="relative w-16 h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 hover:from-blue-600 hover:via-blue-700 hover:to-purple-700 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500 ease-out hover:scale-110 hover:rotate-3 animate-float"
            onClick={() => navigate('/contact-form')}
            onMouseEnter={() => setShowTooltip({ ...showTooltip, form: true })}
            onMouseLeave={() => setShowTooltip({ ...showTooltip, form: false })}
            aria-label="Open contact form"
          >
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 animate-gradient"></div>
            
            {/* Pulsing ring */}
            <div className="absolute inset-0 rounded-2xl bg-blue-400/30 animate-ping-slow"></div>
            
            {/* Glow effect */}
            <div className="absolute inset-[-4px] rounded-2xl bg-gradient-to-r from-blue-500/50 to-purple-500/50 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Icon container with subtle animation */}
            <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
              <img
                src="/userpen.png"
                alt="Contact Form"
                className="w-9 h-9 object-contain drop-shadow-lg filter brightness-0 invert"
              />
            </div>
            
            {/* Notification badge with pulse */}
            <div className="absolute -top-2 -right-2 z-20">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
                <div className="relative w-5 h-5 bg-gradient-to-br from-red-500 to-red-600 border-2 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xs font-bold text-white">!</span>
                </div>
              </div>
            </div>

            {/* Shimmer effect */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></div>
            </div>
          </button>

          {/* Enhanced Tooltip */}
          <div 
            className={`absolute bottom-full right-0 mb-3 transition-all duration-300 ${
              showTooltip.form ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
          >
            <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white px-4 py-3 rounded-xl shadow-2xl border border-slate-700/50 backdrop-blur-sm">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Build your Review Card</span>
              </div>
              {/* Arrow */}
              <div className="absolute top-full right-6 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-transparent border-t-slate-800"></div>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="relative group">
          <button
            className="relative w-16 h-16 bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 hover:from-green-600 hover:via-green-700 hover:to-emerald-700 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500 ease-out hover:scale-110 hover:rotate-3 animate-float-delayed"
            onClick={() => window.open(`https://wa.me/${phoneNumber}`, '_blank')}
            onMouseEnter={() => setShowTooltip({ ...showTooltip, whatsapp: true })}
            onMouseLeave={() => setShowTooltip({ ...showTooltip, whatsapp: false })}
            aria-label="Contact us on WhatsApp"
          >
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 animate-gradient"></div>
            
            {/* Pulsing ring */}
            <div className="absolute inset-0 rounded-2xl bg-green-400/30 animate-ping-slow"></div>
            
            {/* Glow effect */}
            <div className="absolute inset-[-4px] rounded-2xl bg-gradient-to-r from-green-500/50 to-emerald-500/50 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* WhatsApp SVG Icon */}
            <svg
              viewBox="0 0 24 24"
              className="relative z-10 w-9 h-9 text-white fill-current drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>

            {/* Online status indicator */}
            <div className="absolute -top-2 -right-2 z-20">
              <div className="relative">
                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
                <div className="relative w-5 h-5 bg-gradient-to-br from-green-400 to-green-500 rounded-full border-2 border-white shadow-lg"></div>
              </div>
            </div>

            {/* Shimmer effect */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></div>
            </div>
          </button>

          {/* Enhanced Tooltip */}
          <div 
            className={`absolute bottom-full right-0 mb-3 transition-all duration-300 ${
              showTooltip.whatsapp ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
          >
            <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white px-4 py-3 rounded-xl shadow-2xl border border-slate-700/50 backdrop-blur-sm">
              <div className="flex items-center gap-2 whitespace-nowrap">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Chat on WhatsApp</span>
              </div>
              {/* Arrow */}
              <div className="absolute top-full right-6 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-transparent border-t-slate-800"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.4;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
        
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;