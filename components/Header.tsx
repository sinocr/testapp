import React, { useState } from 'react';
import { LogoIcon } from './icons';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Features', href: '#features' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Pricing', href: '#pricing' },
    ];

    return (
        <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <a href="#home" className="flex items-center gap-2">
                        <LogoIcon />
                        <span className="text-2xl font-bold text-emerald-600">ProLand</span>
                    </a>
                    
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-gray-600 hover:text-emerald-600 font-medium transition duration-300">
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <a href="#pricing" className="hidden md:block bg-emerald-600 text-white font-bold py-2 px-6 rounded-full hover:bg-emerald-700 transition duration-300">
                        Get Started
                    </a>
                    
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
                            <a href="#pricing" className="bg-emerald-600 text-white font-bold py-3 px-6 rounded-full text-center hover:bg-emerald-700 transition duration-300" onClick={() => setIsOpen(false)}>
                                Get Started
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
