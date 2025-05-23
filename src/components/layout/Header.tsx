import React from 'react';
import TopBarTabMenu from './TopBarTabMenu';

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 flex h-16 items-center justify-between bg-gray-900/80 px-4 backdrop-blur-md sm:px-6 lg:px-8">
            <div className="flex-shrink-0">
                <span className="text-xl font-bold text-white">
                    GemDynamics
                </span>
            </div>
            <TopBarTabMenu />
        </header>
    );
};

export default Header;
