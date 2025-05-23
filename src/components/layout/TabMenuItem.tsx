import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from '../../config/navigationConfig'; // Pfad anpassen, falls nötig

const TabMenuItem: React.FC<NavItem> = ({ label, path }) => {
    return (
        <NavLink
            to={path}
            className={({ isActive }) =>
                `rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150 ease-in-out ${
                    isActive
                        ? 'bg-gray-700 text-white' // Aktiver Zustand: dunklerer Hintergrund, weißer Text
                        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white' // Inaktiver Zustand: heller Text, Hover-Effekt
                }`
            }
        >
            {label}
        </NavLink>
    );
};

export default TabMenuItem;
