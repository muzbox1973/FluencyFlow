import React, { useState } from 'react';
import { View, NavItem } from '../types';

interface NavbarProps {
    currentView: View;
    onNavigate: (view: View) => void;
}

const NAV_ITEMS: NavItem[] = [
    { label: 'Home', view: View.HOME },
    { label: 'Technology', view: View.TECHNOLOGY },
    { label: 'Curriculum', view: View.CURRICULUM },
    { label: 'Reviews', view: View.REVIEWS },
    { label: 'Pricing', view: View.PRICING, highlight: true },
];

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavClick = (view: View) => {
        onNavigate(view);
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div 
                        className="flex-shrink-0 cursor-pointer" 
                        onClick={() => handleNavClick(View.HOME)}
                    >
                        <span className="text-2xl font-extrabold tracking-tight text-white">
                            Fluency<span className="text-brand-primary">Flow</span>
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.view}
                                onClick={() => handleNavClick(item.view)}
                                className={`text-sm font-medium transition ${
                                    item.highlight 
                                        ? 'text-brand-accent hover:text-white'
                                        : currentView === item.view 
                                            ? 'text-white' 
                                            : 'text-gray-300 hover:text-brand-accent'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-slate-900 border-b border-slate-800 animate-fade-in">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.view}
                                onClick={() => handleNavClick(item.view)}
                                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition ${
                                     item.highlight 
                                        ? 'text-brand-accent hover:text-white hover:bg-slate-800'
                                        : currentView === item.view 
                                            ? 'text-white bg-slate-800'
                                            : 'text-gray-300 hover:text-white hover:bg-slate-800'
                                }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;