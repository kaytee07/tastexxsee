import React from 'react';
import { Lato } from 'next/font/google';

const latoBold = Lato({ weight: '400', subsets: ['latin'] });

const Footer = () => {
  return (
    <div>
      {/* Footer container */}
      <footer className={`${latoBold.className} bg-[#ffd900e1] text-black text-center text-xl text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left ax-sm:px-5 max-sm:py-3 px-16 pt-10`}>
        <div className="flex items-center justify-center border-b-2 border-black p-6 dark:border-white/10 lg:justify-between">
          <div className="me-12 hidden lg:block font-bold">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Social network icons container */}
          <div className="flex justify-center">
              <a target="_blank"  href="https://www.tikok.com/taste.xx.see" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-music-2"><circle cx="8" cy="18" r="4"/><path d="M12 18V2l7 4"/></svg>
              </a>
              <a target="_blank"  href="https://www.instagram.com/tastexxsee" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a target="_blank"  href="https://www.facebook.com/tastexsee" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>         
          </div>
        </div>

        {/* Contact section */}
        <div className="pt-10">
          <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
            Contact
          </h6>
          <p className="mb-4 flex items-center justify-center md:justify-start">
            <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
            </span>
            Lady&apos;s Cottage Broadcasting<br/>(After West Hills Mall)
          </p>
          <a href="mailto:tastexseegh@gmail.com"><p className="mb-4 flex items-center justify-center md:justify-start">
            <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </span>
            tastexseegh@gmail.com
          </p>
          </a>
          <a href="tel:+233539004177"><p className="mb-4 flex items-center justify-center md:justify-start">
            <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
            </span>
            +233539004177
          </p>
          </a>
          {/* <p className="flex items-center justify-center md:justify-start">
            <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.375a.75.75 0 010 1.5h-.375a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              </svg>
            </span>
            Location
          </p> */}
        </div>
        
        {/* Bottom text */}
        <div className="p-6 text-center text-neutral-500 dark:text-neutral-400">
          <span>© 2024 All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
