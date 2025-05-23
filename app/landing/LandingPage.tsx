import React from 'react';
import HeroSectionLanding from './components/HeroSectionLanding';
// import FeaturesSection from './components/FeaturesSection'; // Platzhalter für spätere Erweiterung
// import BenefitsSection from './components/BenefitsSection'; // Platzhalter für spätere Erweiterung

const LandingPage: React.FC = () => {
    return (
        <div className="w-full">
            <HeroSectionLanding />
            {/* Hier könnten weitere Sektionen eingefügt werden */}
            {/* <FeaturesSection /> */}
            {/* <BenefitsSection /> */}
            <div className="container mx-auto px-4 py-16 text-center">
                <h2 className="mb-4 text-3xl font-semibold">
                    Explore More Features
                </h2>
                <p className="text-gray-400">
                    Placeholder for additional content sections like features,
                    testimonials, etc.
                </p>
            </div>
        </div>
    );
};

export default LandingPage;
