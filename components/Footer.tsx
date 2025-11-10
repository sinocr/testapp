import React from 'react';
import { LogoIcon, TwitterIcon, LinkedInIcon, GithubIcon } from './icons';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <a href="#home" className="flex items-center gap-2">
                            <LogoIcon />
                            <span className="text-2xl font-bold text-white">ProLand</span>
                        </a>
                        <p className="text-gray-400">The all-in-one solution to boost your productivity.</p>
                        <div className="flex space-x-4">
                           <a href="#" className="text-gray-400 hover:text-white transition-colors"><TwitterIcon /></a>
                           <a href="#" className="text-gray-400 hover:text-white transition-colors"><LinkedInIcon /></a>
                           <a href="#" className="text-gray-400 hover:text-white transition-colors"><GithubIcon /></a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="font-semibold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                            <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
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
                    &copy; {new Date().getFullYear()} ProLand. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
