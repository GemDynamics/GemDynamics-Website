import React from 'react';
import { HelpCircle, ListChecks, MessageCircle } from 'lucide-react';

const SupportComingSoonPage: React.FC = () => {
    return (
        <div className="flex min-h-[calc(100vh-128px)] flex-col items-center justify-center rounded-lg bg-gray-800 p-8 text-center shadow-xl">
            <HelpCircle className="mb-8 h-24 w-24 animate-bounce text-purple-400" />
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                Support & Help Center - Coming Soon!
            </h1>
            <p className="mb-10 max-w-2xl text-lg text-gray-300 md:text-xl">
                We are working hard to bring you a comprehensive support
                experience. Soon you'll find FAQs, a ticketing system, and much
                more right here.
            </p>
            <div className="grid w-full max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3">
                <div className="rounded-lg bg-gray-700 p-6 shadow-md">
                    <ListChecks className="mx-auto mb-4 h-12 w-12 text-purple-300" />
                    <h3 className="mb-2 text-xl font-semibold text-white">
                        FAQ Database
                    </h3>
                    <p className="text-sm text-gray-400">
                        Quick answers to common questions.
                    </p>
                </div>
                <div className="rounded-lg bg-gray-700 p-6 shadow-md">
                    <MessageCircle className="mx-auto mb-4 h-12 w-12 text-purple-300" />
                    <h3 className="mb-2 text-xl font-semibold text-white">
                        Ticket System
                    </h3>
                    <p className="text-sm text-gray-400">
                        Submit and track your support requests.
                    </p>
                </div>
                <div className="rounded-lg bg-gray-700 p-6 shadow-md">
                    {/* Placeholder for a Live Chat icon or similar */}
                    <HelpCircle className="mx-auto mb-4 h-12 w-12 text-purple-300" />
                    <h3 className="mb-2 text-xl font-semibold text-white">
                        Live Chat (Future)
                    </h3>
                    <p className="text-sm text-gray-400">
                        Instant help when you need it.
                    </p>
                </div>
            </div>
            <p className="mt-12 text-gray-500">Thank you for your patience!</p>
        </div>
    );
};

export default SupportComingSoonPage;
