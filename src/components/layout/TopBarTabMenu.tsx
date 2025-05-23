import React from 'react';
import { topBarTabNavigation } from '../../config/navigationConfig';
import TabMenuItem from './TabMenuItem';

const TopBarTabMenu: React.FC = () => {
    return (
        <nav className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
            {topBarTabNavigation.map((item) => (
                <TabMenuItem
                    key={item.path}
                    label={item.label}
                    path={item.path}
                />
            ))}
        </nav>
    );
};

export default TopBarTabMenu;
