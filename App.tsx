import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Technology from './views/Technology';
import Curriculum from './views/Curriculum';
import Reviews from './views/Reviews';
import Pricing from './views/Pricing';
import { View } from './types';

const App: React.FC = () => {
    const [currentView, setCurrentView] = useState<View>(View.HOME);

    const navigate = (view: View) => {
        setCurrentView(view);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const renderView = () => {
        switch (currentView) {
            case View.HOME:
                return <Home onNavigate={navigate} />;
            case View.TECHNOLOGY:
                return <Technology onNavigate={navigate} />;
            case View.CURRICULUM:
                return <Curriculum onNavigate={navigate} />;
            case View.REVIEWS:
                return <Reviews onNavigate={navigate} />;
            case View.PRICING:
                return <Pricing onNavigate={navigate} />;
            default:
                return <Home onNavigate={navigate} />;
        }
    };

    return (
        <div className="min-h-screen bg-brand-dark text-brand-text selection:bg-brand-primary selection:text-white">
            <Navbar currentView={currentView} onNavigate={navigate} />
            <main className="relative">
                {renderView()}
            </main>
            <Footer />
        </div>
    );
};

export default App;