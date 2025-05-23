import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button'; // Annahme: ShadCN/UI Button ist oder wird verfügbar sein
import { Zap } from 'lucide-react';

const HeroSectionLanding: React.FC = () => {
    return (
        <section className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-16 text-white md:py-24 lg:py-32">
            <div className="container mx-auto px-4 text-center">
                <Zap
                    size={64}
                    className="mx-auto mb-6 animate-pulse text-purple-400"
                />
                <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    Unlock the Power of{' '}
                    <span className="text-purple-400">Dynamic Interaction</span>
                </h1>
                <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300 sm:text-xl md:text-2xl">
                    GemDynamics provides cutting-edge AI solutions to
                    revolutionize how you connect with your digital world.
                    Experience the future, today.
                </p>
                <Link to="/signup">
                    <Button
                        size="lg"
                        className="transform rounded-lg bg-purple-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-purple-700"
                    >
                        Get Started Now
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default HeroSectionLanding;
