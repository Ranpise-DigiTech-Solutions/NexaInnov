'use client';

import { useState, useEffect } from 'react';

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (consent !== 'granted' && consent !== 'declined') {
      setTimeout(() => setIsVisible(true), 1000);
    } else if (consent === 'granted') {
      // Load scripts immediately if consent was already given
      loadGA4();
      loadClarity();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'granted');
    setIsVisible(false);

    loadGA4();
    loadClarity();
  };

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined');
    setIsVisible(false);
  };

  const loadGA4 = () => {
    if (!window.gtag) {
      // Add GA script
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-K1FHJFZ19P';
      document.head.appendChild(script1);

      // Initialize GA
      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-K1FHJFZ19P');
      `;
      document.head.appendChild(script2);
    }
  };

  const loadClarity = () => {
    if (!window.clarity) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.innerHTML = `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "u4siwshxib");`;
      document.head.appendChild(script);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[1000] p-4 bg-gray-900 text-white shadow-2xl transition-all duration-500 ease-in-out transform">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 md:space-x-4">
        <p className="text-sm text-center md:text-left">
          We use cookies to improve your experience and analyze site traffic. By clicking "Accept All", you consent to our use of cookies.
          <a href="/privacy-policy" className="underline font-medium text-blue-400 hover:text-blue-300 ml-1">
            Read our policy.
          </a>
        </p>
        <div className="flex space-x-3 flex-shrink-0">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm border border-white/50 rounded-lg hover:bg-gray-700 transition"
          >
            Reject All
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
