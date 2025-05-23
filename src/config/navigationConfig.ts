// src/config/navigationConfig.ts
export type NavItem = {
    label: string;
    path: string;
};

export const topBarTabNavigation: NavItem[] = [
    { label: 'Account', path: '/account/dashboard' },
    { label: 'Dynamic Personality', path: '/dynamic-personality' },
    { label: 'ApexAnalytics', path: '/apex-analytics' },
    { label: 'CortexOneSuite', path: '/cortex-one-suite-presentation' },
    { label: 'Support', path: '/support' },
];
