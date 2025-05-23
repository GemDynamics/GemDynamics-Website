import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-gray-800 p-4 text-center text-gray-400">
            <p>&copy; {currentYear} GemDynamics Inc. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
