import React from 'react';
import { Button } from '@/components/ui/button'; // Annahme
import { LinkIcon, Github, Mail } from 'lucide-react';

const LinkedAccountsView: React.FC = () => {
    // Dummy data
    const linkedServices = [
        { id: 'gmail', name: 'Google Mail', icon: Mail, linked: true },
        { id: 'github', name: 'GitHub', icon: Github, linked: false },
    ];

    return (
        <div>
            <h2 className="mb-6 text-2xl font-semibold text-white">
                Linked Accounts
            </h2>
            <div className="space-y-4">
                {linkedServices.map((service) => (
                    <div
                        key={service.id}
                        className="flex items-center justify-between rounded-lg bg-gray-700 p-4"
                    >
                        <div className="flex items-center">
                            <service.icon
                                className={`mr-3 h-6 w-6 ${service.linked ? 'text-green-400' : 'text-gray-400'}`}
                            />
                            <span className="text-gray-200">
                                {service.name}
                            </span>
                        </div>
                        <Button
                            variant={service.linked ? 'destructive' : 'outline'}
                            size="sm"
                            onClick={() =>
                                alert(
                                    `${service.linked ? 'Unlink' : 'Link'} ${service.name} (placeholder)`,
                                )
                            }
                            className={
                                service.linked
                                    ? 'bg-red-600 text-white hover:bg-red-700'
                                    : 'border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                            }
                        >
                            <LinkIcon className="mr-2 h-4 w-4" />
                            {service.linked ? 'Unlink' : 'Link Account'}
                        </Button>
                    </div>
                ))}
            </div>
            <p className="mt-6 text-sm text-gray-400">
                Connect your other accounts to GemDynamics to unlock more
                features and streamline your workflows.
            </p>
        </div>
    );
};

export default LinkedAccountsView;
