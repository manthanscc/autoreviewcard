import React, { useRef, useImperativeHandle, forwardRef, useState } from 'react';
import QRCode from 'react-qr-code';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface BusinessCardData {
  id: string;
  businessName: string;
  category: string;
  type: string;
  description?: string;
  location?: string;
  logoUrl?: string;
  slug: string;
  tagline?: string; // <--- added
}

export interface QRCodeCardProps {
  card: BusinessCardData;
  className?: string;
}

export interface QRCodeCardHandle {
  downloadPDF: () => Promise<void>;
  getDataURL: () => Promise<string | null>;
}

export const QRCodeCard = forwardRef<QRCodeCardHandle, QRCodeCardProps>(
  ({ card, className = '' }, ref) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [downloading, setDownloading] = useState(false);
    const qrUrl = `${window.location.origin}/${card.slug}`;

    useImperativeHandle(ref, () => ({
      downloadPDF: async () => { await exportToPDF(); },
      getDataURL: async () => {
        if (!cardRef.current) return null;
        const canvas = await html2canvas(cardRef.current, {
          backgroundColor: '#ffffff',
          scale: 4,
          useCORS: true
        });
        return canvas.toDataURL('image/png', 1.0);
      }
    }));

    const exportToPDF = async () => {
      if (!cardRef.current) return;
      try {
        setDownloading(true);
        const canvas = await html2canvas(cardRef.current, {
          backgroundColor: '#ffffff',
          scale: 4,
          useCORS: true
        });
        const imgData = canvas.toDataURL('image/png', 1.0);
        const pdf = new jsPDF({
          orientation: 'portrait',
            unit: 'mm',
            format: [101.6, 152.4] // 4x6 inch
        });
        pdf.addImage(imgData, 'PNG', 0, 0, 101.6, 152.4);
        pdf.save(`${card.businessName.replace(/[^a-z0-9]/gi, '-')}-review-card.pdf`);
      } finally {
        setDownloading(false);
      }
    };

    return (
      <div className={`flex flex-col items-start gap-4 ${className}`}>
        {/* Outer fixed 4×6 container WITH decorative border */}
        <div
          ref={cardRef}
          className="
            relative
            w-[384px] h-[576px]
            font-[system-ui]
            print:shadow-none
                            bg-[linear-gradient(135deg,#4f46e5_0%,#6366f1_55%,#4f46e5_100%)]

          "
        >
          {/* Gradient border (Sticker style) */}
            <div
              className="
                absolute inset-0
                rounded-[34px]
                p-[11px]
                bg-[linear-gradient(135deg,#4f46e5_0%,#6366f1_55%,#4f46e5_100%)]
              "
            >
              {/* Inner white card */}
              <div
                className="
                  w-full h-full
                  bg-white
                  rounded-3xl
                  shadow-[0_4px_14px_rgba(0,0,0,0.08)]
                  border border-indigo-100
                  flex flex-col
                  overflow-hidden
                "
              >
                {/* Top slim bar (optional subtle accent) */}
                {/* <div className="h-2 w-full bg-[linear-gradient(135deg,#4f46e5_0%,#6366f1_55%,#4f46e5_100%)] rounded-b-3xl" /> */}

                {/* Top multi‑color bar (replaces old gradient bar) */}
                {/* <div className="w-full h-3 flex rounded-t-3xl rounded-b-xl overflow-hidden"> */}
                  {/* <div className="flex-1 bg-[#2563eb]" />   Blue */}
                  {/* <div className="flex-1 bg-[#16a34a]" />   Green */}
                  {/* <div className="flex-1 bg-[#fbbf24]" />   Yellow */}
                  {/* <div className="flex-1 bg-[#dc2626]" />   Red */}
                {/* </div> */}

                {/* Content */}
                <div className="flex flex-col flex-1 px-6 pt-4 pb-6">
                   {/* Top Section */}
                  <header className="text-center mb-0">
                    {/* Adjusted size: use text-xl (was text-2xl) */}
                    <h1 className="text-xl font-bold tracking-wide uppercase leading-snug">
                      One Scan!<br/> Infinite Impressions
                    </h1>
                   
                   
                  </header>
                  <p className="text-sm font-medium text-gray-600 mt-1"></p>
                  {/* QR Section (Improved sizing) */}
                  <div className="flex flex-col items-center justify-center flex-grow">
                    <div
                      className="
                        relative
                        bg-white
                        p-5
                        rounded-2xl
                        border border-gray-300
                        shadow-[0_3px_10px_rgba(0,0,0,0.07)]
                      "
                      // Reserve explicit size so html2canvas captures crisp edges
                      style={{ width: 300 }}
                    >
                      <QRCode
                        value={qrUrl}
                        // Increased from 200 → 260 for better visual balance on 4x6 card
                        size={260}
                        style={{ width: 260, height: 260 }}
                        fgColor="#1f2937"
                        bgColor="#ffffff"
                        level="H"
                      />

                      {card.logoUrl && (
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                          {/* Increased logo from 64px → 80px with safety ring & shadow for contrast */}
                          <div
                            className="
                              w-20 h-20
                              rounded-full
                              bg-white
                              border border-gray-300
                              ring-4 ring-white
                              shadow-[0_4px_10px_rgba(0,0,0,0.15)]
                              flex items-center justify-center overflow-hidden
                            "
                          >
                            <img
                              src={card.logoUrl}
                              alt={`${card.businessName} logo`}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                              }}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    

                  </div>
                   {/* Top Section */}
                  <header className="text-center mb-0">
                    <h1 className="text-xl font-extrabold tracking-wide uppercase text-indigo-800 leading-snug">
                      {card.businessName}
                    </h1>
                    {/* <p className="text-sm font-medium text-gray-600 mt-1">
                      {card.type}
                    </p> */}
                    {card.tagline && (
                      <p className="mt-1 text-sm font-semibold text-black tracking-wide">
                        {card.tagline}
                      </p>
                    )}
                  </header>

                  {/* Divider */}
                  <div className="mt-4 border-t border-gray300" />

                    {/* Bottom Section (smaller) */}
                    <footer className="pt-1">
                    <p className="text-center text-[10px] leading-tight font-semibold text-gray-600 tracking-wide">
                      Powered by <span className="text-indigo-600">SCC INFOTECH</span>
                    </p>
                    </footer>
                </div>
              </div>

              {/* Small diagonal side accents (optional subtle sticker feel) */}
              <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-5 h-12 bg-white rounded-sm rotate-[40deg] pointer-events-none" />
              <div className="absolute -left-1 top-1/3 -translate-y-1/2 w-5 h-12 bg-white rounded-sm rotate-[40deg] pointer-events-none" />
              <div className="absolute -left-1 top-2/3 -translate-y-1/2 w-5 h-12 bg-white rounded-sm rotate-[40deg] pointer-events-none" />
              <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-5 h-12 bg-white rounded-sm -rotate-[40deg] pointer-events-none" />
              <div className="absolute -right-1 top-1/3 -translate-y-1/2 w-5 h-12 bg-white rounded-sm -rotate-[40deg] pointer-events-none" />
              <div className="absolute -right-1 top-2/3 -translate-y-1/2 w-5 h-12 bg-white rounded-sm -rotate-[40deg] pointer-events-none" />
            </div>
        </div>

        {/* Download Button */}
        <button
          onClick={exportToPDF}
          disabled={downloading}
          className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-semibold shadow hover:bg-indigo-700 disabled:opacity-50"
        >
          {downloading ? 'Generating…' : 'Download 4x6 PDF'}
        </button>
      </div>
    );
  }
);

QRCodeCard.displayName = 'QRCodeCard';