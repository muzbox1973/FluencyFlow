import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 text-center md:text-left">
                        <span className="text-2xl font-extrabold text-white">
                            Fluency<span className="text-brand-primary">Flow</span>
                        </span>
                        <p className="text-sm text-gray-500 mt-2">© 2024 FluencyFlow Inc. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition">
                            <i className="fab fa-instagram text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition">
                            <i className="fab fa-youtube text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition">
                            <i className="fab fa-twitter text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;