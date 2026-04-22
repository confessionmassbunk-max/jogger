import React, { useState, useEffect } from 'react';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#111] border-t border-white/10 z-[100] px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-sm text-white/70 max-w-4xl font-light">
        We use cookies to personalize content and ads, to provide social media features and to analyze our traffic. 
        We also share information about your use of our site with our social media, advertising and analytics partners 
        who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services.
      </div>
      <div className="flex gap-4 shrink-0">
        <button 
          onClick={handleAccept}
          className="bg-white text-black px-6 py-2 rounded-full text-sm uppercase tracking-widest font-semibold hover:bg-white/90 transition-colors cursor-pointer"
        >
          Accept All
        </button>
      </div>
    </div>
  );
};
