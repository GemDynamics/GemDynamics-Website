import React from 'react';
import { Button } from '@/components/ui/button'; // Annahme
import { DownloadCloud, ExternalLink } from 'lucide-react';

const DownloadAndLinkSection: React.FC = () => {
    return (
        <section className="bg-gray-800 py-12 md:py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="mb-8 text-3xl font-bold text-white">
                    Get Started with CortexOneSuite
                </h2>
                <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                    <Button
                        size="lg"
                        className="flex transform items-center rounded-lg bg-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-purple-700"
                        onClick={() =>
                            alert('Download CortexOneSuite App - Placeholder')
                        }
                    >
                        <DownloadCloud className="mr-2 h-5 w-5" />
                        Download CortexOneSuite App
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="flex transform items-center rounded-lg border-purple-500 px-8 py-4 font-semibold text-purple-400 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-purple-500 hover:text-white"
                        onClick={() =>
                            alert('Navigate to Tool Website - Placeholder')
                        }
                    >
                        <ExternalLink className="mr-2 h-5 w-5" />
                        Visit Tool Website
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default DownloadAndLinkSection;
