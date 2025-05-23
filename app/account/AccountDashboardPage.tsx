import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button'; // Annahme
import { User, CreditCard, BarChart2, MessageSquare, Bell } from 'lucide-react';

const DashboardCard: React.FC<{
    title: string;
    icon: React.ElementType;
    children: React.ReactNode;
    linkTo?: string;
    linkText?: string;
}> = ({ title, icon: Icon, children, linkTo, linkText }) => (
    <div className="rounded-lg bg-gray-800 p-6 shadow-lg transition-shadow duration-300 hover:shadow-purple-500/30">
        <div className="mb-3 flex items-center text-purple-400">
            <Icon className="mr-3 h-6 w-6" />
            <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <div className="text-gray-300">{children}</div>
        {linkTo && linkText && (
            <div className="mt-4">
                <Link to={linkTo}>
                    <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                    >
                        {linkText}
                    </Button>
                </Link>
            </div>
        )}
    </div>
);

const AccountDashboardPage: React.FC = () => {
    return (
        <div className="space-y-8">
            <h1 className="mb-8 text-3xl font-bold text-white">
                Account Dashboard
            </h1>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <DashboardCard
                    title="Profile Overview"
                    icon={User}
                    linkTo="/account/settings/profile"
                    linkText="Manage Profile"
                >
                    <p>
                        Quick summary of your profile information. Click below
                        to edit details.
                    </p>
                    {/* Placeholder für tatsächliche Daten */}
                    <p className="mt-2 text-sm">Email: user@example.com</p>
                </DashboardCard>

                <DashboardCard
                    title="Active Subscriptions"
                    icon={CreditCard}
                    linkTo="/account/settings/subscriptions"
                    linkText="Manage Subscriptions"
                >
                    <p>
                        Current plan:{' '}
                        <span className="font-semibold text-green-400">
                            Pro Tier
                        </span>
                        .
                    </p>
                    <p className="text-sm">Renews on: 2024-12-31</p>
                </DashboardCard>

                <DashboardCard
                    title="Token Usage (Monthly)"
                    icon={BarChart2}
                    linkTo="/account/settings/usage"
                    linkText="View Detailed Usage"
                >
                    <p>Tokens used: 1,234,567 / 5,000,000</p>
                    {/* Placeholder für eine kleine Visualisierung oder Fortschrittsbalken */}
                    <div className="mt-2 h-2.5 w-full rounded-full bg-gray-700">
                        <div
                            className="h-2.5 rounded-full bg-purple-500"
                            style={{ width: '24.69%' }}
                        ></div>
                    </div>
                </DashboardCard>

                <DashboardCard
                    title="Recent Support Tickets"
                    icon={MessageSquare}
                    linkTo="/support"
                    linkText="View Tickets"
                >
                    <p>
                        You have{' '}
                        <span className="font-semibold">2 open tickets</span>.
                    </p>
                    <p className="text-sm">
                        Last update: Ticket #1234 - 'Pending Developer Response'
                    </p>
                </DashboardCard>

                <DashboardCard title="Notifications" icon={Bell}>
                    <p>No new notifications.</p>
                    {/* <ul className="list-disc list-inside text-sm">
            <li>Your subscription has been renewed.</li>
            <li>New feature X is now available!</li>
          </ul> */}
                </DashboardCard>
            </div>
        </div>
    );
};

export default AccountDashboardPage;
