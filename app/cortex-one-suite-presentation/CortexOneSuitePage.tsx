import React from 'react';
import { Zap, Briefcase, Users, Brain, Puzzle, Settings } from 'lucide-react'; // Passende Icons
import DownloadAndLinkSection from './components/DownloadAndLinkSection';
// Ggf. Import für presentation-style.css, wenn dort relevante Klassen definiert sind
// import '../../src/styles/presentation-style.css';

const FeatureCard: React.FC<{
    icon: React.ElementType;
    title: string;
    description: string;
}> = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col items-center rounded-lg bg-slate-800 p-6 text-center shadow-lg transition-shadow duration-300 hover:shadow-purple-500/20">
        <div className="mb-4 rounded-full bg-purple-600/20 p-3">
            <Icon className="h-8 w-8 text-purple-400" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-slate-400">{description}</p>
    </div>
);

const CortexOneSuitePage: React.FC = () => {
    const features = [
        {
            icon: Briefcase, // GSuite Integration
            title: 'Seamless GSuite Integration',
            description:
                'Integrate directly with your Google Workspace for unparalleled productivity and data flow.',
        },
        {
            icon: Zap, // Gemini KI-Power
            title: 'Gemini AI Power',
            description:
                "Leverage the cutting-edge capabilities of Google's Gemini models for advanced tasks and insights.",
        },
        {
            icon: Users, // CortexCoop
            title: 'CortexCoop for Team Collaboration',
            description:
                'Enhance teamwork with shared AI capabilities and collaborative project environments.',
        },
        {
            icon: Brain, // CortexSynapse
            title: 'CortexSynapse for Custom AI Agents',
            description:
                'Build and deploy bespoke AI agents tailored to your specific business needs and workflows.',
        },
        {
            icon: Puzzle, // Plugin-System
            title: 'Extendable Plugin System',
            description:
                'Customize and expand CortexOneSuite with a rich ecosystem of plugins and integrations.',
        },
    ];

    // TODO: Implement scroll-based animations similar to DynamicPersonalityPage if needed

    return (
        <div className="min-h-screen overflow-x-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white">
            {/* Eigener Header für diese Präsentationsseite, falls gewünscht, oder Nutzung des globalen Headers */}
            {/* Für den Moment nehmen wir an, dass es wie DynamicPersonalityPage eine Onepage-Scroller ist */}
            {/* und der globale Header/Footer nicht stört, da der Content den Viewport füllt. */}
            {/* Alternativ: Ein minimaler eigener Header hier. */}

            {/* Hero Section */}
            <section className="bg-slate-900/50 py-20 text-center backdrop-blur-sm md:py-28 lg:py-36">
                <div className="container mx-auto px-4">
                    <Settings
                        size={72}
                        className="animate-spin-slow mx-auto mb-8 text-purple-500"
                    />
                    <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                        CortexOneSuite: Your AI-Powered Productivity Hub
                    </h1>
                    <p className="mx-auto mb-10 max-w-3xl text-lg text-gray-300 sm:text-xl">
                        Revolutionize your Google Workspace experience with a
                        unified suite of intelligent tools, powered by Gemini
                        and designed for seamless collaboration and
                        customization.
                    </p>
                </div>
            </section>

            {/* Features Overview Section */}
            <section className="bg-slate-800/30 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <h2 className="mb-16 text-center text-3xl font-bold text-white md:text-4xl">
                        Core Capabilities
                    </h2>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Optional: Mockup/Gallery Section - Placeholder */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
                        Visual Showcase (Placeholder)
                    </h2>
                    <div className="flex h-96 w-full items-center justify-center rounded-lg bg-gray-700 text-gray-400">
                        <p>
                            Imagine a beautiful gallery or product mockup here.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <DownloadAndLinkSection />
        </div>
    );
};

export default CortexOneSuitePage;
