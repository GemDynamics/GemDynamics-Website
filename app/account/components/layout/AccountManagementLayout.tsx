import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const accountNavItems = [
    { label: 'Profile', path: '/account/settings/profile' },
    { label: 'Subscriptions', path: '/account/settings/subscriptions' },
    { label: 'Usage', path: '/account/settings/usage' },
    { label: 'Linked Accounts', path: '/account/settings/linked-accounts' },
];

const AccountManagementLayout: React.FC = () => {
    return (
        <div className="flex flex-col gap-8 p-4 md:flex-row md:p-6 lg:p-8">
            <aside className="w-full flex-shrink-0 md:w-64">
                <nav className="flex flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-1">
                    {accountNavItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end // Wichtig, damit übergeordnete Pfade nicht fälschlicherweise aktiv sind
                            className={({ isActive }) =>
                                `block rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150 ease-in-out ${
                                    isActive
                                        ? 'bg-purple-600 text-white'
                                        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                                }`
                            }
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
            </aside>
            <section className="flex-grow rounded-lg bg-gray-800 p-6 shadow-lg">
                <Outlet />
            </section>
        </div>
    );
};

export default AccountManagementLayout;
