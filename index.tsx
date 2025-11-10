import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// === ICONS ===
const LogoIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-emerald-600">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
  
const FeatureIcon1 = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
    </svg>
);

const FeatureIcon2 = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
    </svg>
);
  
const FeatureIcon3 = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
    </svg>
);
  
const StarIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
);

const TwitterIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.49-1.74.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21c7.35 0 11.37-6.08 11.37-11.37 0-.17 0-.34-.01-.51.78-.56 1.45-1.26 1.98-2.02z"></path>
    </svg>
);
const LinkedInIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
    </svg>
);
const InstagramIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.012-3.584.07-4.85c.148-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.442c-3.116 0-3.473.012-4.69.068-2.61.12-3.847 1.353-3.968 3.968-.056 1.217-.067 1.574-.067 4.69s.011 3.473.067 4.69c.12 2.615 1.358 3.848 3.968 3.968 1.217.056 1.574.067 4.69.067s3.473-.011 4.69-.067c2.61-.12 3.848-1.353 3.968-3.968.056-1.217.067-1.574.067-4.69s-.011-3.473-.067-4.69c-.12-2.615-1.358-3.848-3.968-3.968C15.473 3.616 15.116 3.605 12 3.605zM12 7.297c-2.597 0-4.703 2.106-4.703 4.703s2.106 4.703 4.703 4.703 4.703-2.106 4.703-4.703-2.106-4.703-4.703-4.703zm0 7.792c-1.701 0-3.089-1.388-3.089-3.089s1.388-3.089 3.089-3.089 3.089 1.388 3.089 3.089-1.388 3.089-3.089 3.089zm4.868-8.22a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"></path>
    </svg>
);
const TelegramIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-1.42.2-1.86l18-7c.75-.29 1.4.29.96 1.03L11.66 17.6c-.2.27-.5.37-.8.3l-1.08-.25z"></path>
    </svg>
);
const GithubIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
    </svg>
);

// === HEADER ===
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Features', href: '#features' },
        { name: 'Testimonials', href: '#testimonials' },
    ];

    return (
        <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="#home" className="flex items-center gap-2">
                        <LogoIcon />
                        <span className="text-2xl font-bold text-emerald-600">Opilor</span>
                    </a>
                    
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-gray-600 hover:text-emerald-600 font-medium transition duration-300">
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-emerald-600 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden mt-4">
                        <nav className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} className="text-gray-600 hover:text-emerald-600 font-medium block py-2 text-center" onClick={() => setIsOpen(false)}>
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

// === FOOTER ===
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <a href="#home" className="flex items-center gap-2">
                            <LogoIcon />
                            <span className="text-2xl font-bold text-white">Opilor</span>
                        </a>
                        <p className="text-gray-400">The all-in-one solution to boost your productivity.</p>
                        <div className="flex space-x-4">
                           <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter"><TwitterIcon /></a>
                           <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn"><LinkedInIcon /></a>
                           <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram"><InstagramIcon /></a>
                           <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Telegram"><TelegramIcon /></a>
                           <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Github"><GithubIcon /></a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                            <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-500">
                    &copy; {new Date().getFullYear()} Opilor. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

// === APP SECTIONS ===
const Hero = () => (
    <section id="home" className="bg-emerald-50 text-gray-800 py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Elevate Your Workflow to the <span className="text-emerald-600">Next Level</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Opilor is the all-in-one solution designed to boost your productivity, streamline processes, and drive success.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#features" className="bg-emerald-600 text-white font-bold py-3 px-8 rounded-full hover:bg-emerald-700 transition duration-300 transform hover:scale-105">
            Learn More
          </a>
        </div>
      </div>
    </section>
);
  
const Features = () => (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Why Choose Opilor?</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Discover the powerful features that make our platform the best choice for your business.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="inline-block bg-emerald-100 text-emerald-600 rounded-full p-4 mb-4">
              <FeatureIcon1 />
            </div>
            <h3 className="text-xl font-bold mb-2">Intuitive Interface</h3>
            <p className="text-gray-600">Seamlessly navigate through our clean, modern, and user-friendly design, built for efficiency.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="inline-block bg-emerald-100 text-emerald-600 rounded-full p-4 mb-4">
              <FeatureIcon2 />
            </div>
            <h3 className="text-xl font-bold mb-2">Powerful Analytics</h3>
            <p className="text-gray-600">Gain valuable insights with our advanced data visualization and reporting tools.</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="inline-block bg-emerald-100 text-emerald-600 rounded-full p-4 mb-4">
              <FeatureIcon3 />
            </div>
            <h3 className="text-xl font-bold mb-2">Secure & Reliable</h3>
            <p className="text-gray-600">Your data is protected with enterprise-grade security protocols and 99.9% uptime.</p>
          </div>
        </div>
      </div>
    </section>
);
  
const Testimonials = () => (
    <section id="testimonials" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Trusted by Professionals Worldwide</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Don't just take our word for it. Here's what our users are saying.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex text-yellow-400 mb-4">
              <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
            </div>
            <p className="text-gray-600 mb-6">"Opilor has revolutionized our workflow. The intuitive design and powerful features have boosted our team's productivity by 40%."</p>
            <div className="flex items-center">
              <img src="https://picsum.photos/id/1005/50/50" alt="User" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="font-bold text-gray-800">Jane Doe</p>
                <p className="text-sm text-gray-500">CEO, Innovate Inc.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="flex text-yellow-400 mb-4">
              <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
            </div>
            <p className="text-gray-600 mb-6">"The analytics are a game-changer. We can now make data-driven decisions with confidence. Highly recommended!"</p>
            <div className="flex items-center">
              <img src="https://picsum.photos/id/1011/50/50" alt="User" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="font-bold text-gray-800">John Smith</p>
                <p className="text-sm text-gray-500">Marketing Director, Solutions Co.</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
             <div className="flex text-yellow-400 mb-4">
              <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
            </div>
            <p className="text-gray-600 mb-6">"Customer support is top-notch. They are responsive, knowledgeable, and genuinely care about our success."</p>
            <div className="flex items-center">
              <img src="https://picsum.photos/id/1027/50/50" alt="User" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="font-bold text-gray-800">Samantha Lee</p>
                <p className="text-sm text-gray-500">Project Manager, TechForward</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
);
  
const CTA = () => (
    <section className="bg-emerald-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-emerald-200 mb-8 max-w-2xl mx-auto">Join thousands of users who are already transforming their work with Opilor.</p>
            <a href="#home" className="bg-white text-emerald-700 font-bold py-4 px-10 rounded-full hover:bg-emerald-100 transition duration-300 transform hover:scale-105">
                Sign Up Now
            </a>
        </div>
    </section>
);
  
// === MAIN APP COMPONENT ===
function App() {
  return (
    <div className="bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

// === RENDER APP ===
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);