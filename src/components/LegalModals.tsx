import React, { useEffect } from 'react';

export const LegalModals: React.FC = () => {
  useEffect(() => {
    const handleOpenModal = (e: any) => {
      const { type } = e.detail;
      const modal: any = document.getElementById(`modal-${type}`);
      if (modal) {
        modal.showModal();
      }
    };

    window.addEventListener('open-legal-modal', handleOpenModal);
    return () => window.removeEventListener('open-legal-modal', handleOpenModal);
  }, []);

  const close = (type: string) => {
    const modal: any = document.getElementById(`modal-${type}`);
    if (modal) {
      modal.close();
    }
  };

  return (
    <>
      <dialog id="modal-privacy" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24px] shadow-2xl border border-white/10 p-0 m-0 w-[90%] max-w-3xl max-h-[80vh] backdrop:bg-black/80 bg-[#0A0A0A] text-[#F5F5F5] overflow-hidden z-[200]">
        <div className="relative h-full flex flex-col max-h-[80vh]">
          <div className="sticky top-0 right-0 flex justify-end p-4 border-b border-white/10 bg-[#0A0A0A] z-10">
            <button onClick={() => close('privacy')} className="text-white/50 hover:text-white bg-black/80 backdrop-blur rounded-full w-10 h-10 flex items-center justify-center border border-white/10 transition-colors cursor-pointer">✕</button>
          </div>
          <div className="p-8 overflow-y-auto font-light text-white/80 space-y-6">
            <h2 className="text-2xl uppercase tracking-widest font-medium text-white">Privacy Policy</h2>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h3 className="text-xl text-white">1. Information We Collect</h3>
            <p>We collect information that you provide directly to us, such as when you create an account, make a purchase, or contact customer support. This may include your name, email address, shipping address, and payment information.</p>
            
            <h3 className="text-xl text-white">2. How We Use Information</h3>
            <p>We use the information we collect to process transactions, communicate with you, and improve our services. We may also use your information to personalize your experience and provide targeted advertising.</p>

            <h3 className="text-xl text-white">3. Third-Party Advertising (Google AdSense)</h3>
            <p>We use third-party advertising companies to serve ads when you visit our website. These companies may use information (not including your name, address, email address, or telephone number) about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Third party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.</li>
              <li>Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.</li>
              <li>Users may opt out of personalized advertising by visiting <a href="https://myadcenter.google.com/" target="_blank" rel="noreferrer" className="underline text-white">Ads Settings</a>. (Alternatively, you can direct users to opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://aboutads.info" target="_blank" rel="noreferrer" className="underline text-white">www.aboutads.info</a>.)</li>
            </ul>

            <h3 className="text-xl text-white">4. Cookies</h3>
            <p>We use cookies to enhance your experience, gather general visitor information, and track visits to our website. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies via your browser settings.</p>

            <h3 className="text-xl text-white">5. Contact Us</h3>
            <p>If you have any questions about this Privacy Policy, please contact us at Lazelab2026@gmail.com.</p>
          </div>
        </div>
      </dialog>

      <dialog id="modal-terms" className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[24px] shadow-2xl border border-white/10 p-0 m-0 w-[90%] max-w-3xl max-h-[80vh] backdrop:bg-black/80 bg-[#0A0A0A] text-[#F5F5F5] overflow-hidden z-[200]">
        <div className="relative h-full flex flex-col max-h-[80vh]">
          <div className="sticky top-0 right-0 flex justify-end p-4 border-b border-white/10 bg-[#0A0A0A] z-10">
            <button onClick={() => close('terms')} className="text-white/50 hover:text-white bg-black/80 backdrop-blur rounded-full w-10 h-10 flex items-center justify-center border border-white/10 transition-colors cursor-pointer">✕</button>
          </div>
          <div className="p-8 overflow-y-auto font-light text-white/80 space-y-6">
            <h2 className="text-2xl uppercase tracking-widest font-medium text-white">Terms of Service</h2>
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h3 className="text-xl text-white">1. Acceptance of Terms</h3>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
            
            <h3 className="text-xl text-white">2. Use License</h3>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on Laze Labs's website for personal, non-commercial transitory viewing only.</p>

            <h3 className="text-xl text-white">3. Disclaimer</h3>
            <p>The materials on Laze Labs's website are provided on an 'as is' basis. Laze Labs makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

            <h3 className="text-xl text-white">4. Limitations</h3>
            <p>In no event shall Laze Labs or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Laze Labs's website.</p>
          </div>
        </div>
      </dialog>
    </>
  );
};
