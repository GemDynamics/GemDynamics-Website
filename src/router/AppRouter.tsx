import React from 'react';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

// Landing Seiten
import LandingPage from '../../app/landing/LandingPage';
import LandingSignInPage from '../../app/landing/LandingSignInPage';
import LandingSignUpPage from '../../app/landing/LandingSignUpPage';

// Account Seiten
import AccountDashboardPage from '../../app/account/AccountDashboardPage';
import AccountManagementPage from '../../app/account/AccountManagementPage';
import ProfileSettingsView from '../../app/account/components/profile/ProfileSettingsView';
import SubscriptionsView from '../../app/account/components/subscriptions/SubscriptionsView';
import UsageView from '../../app/account/components/usage/UsageView';
import LinkedAccountsView from '../../app/account/components/linked-accounts/LinkedAccountsView';

// Support Seite
import SupportComingSoonPage from '../../app/support/SupportComingSoonPage';

// Dynamic Personality Seite
import DynamicPersonalityPage from '../../app/dynamic-personality/DynamicPersonalityPage';

// CortexOneSuite Seite
import CortexOneSuitePage from '../../app/cortex-one-suite-presentation/CortexOneSuitePage';

const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <MainLayout>
                        <Outlet />
                    </MainLayout>
                }
            >
                {/* Landing und Auth Routen */}
                <Route index element={<LandingPage />} />
                <Route path="signin" element={<LandingSignInPage />} />
                <Route path="signup" element={<LandingSignUpPage />} />

                {/* Account Routen */}
                <Route path="account" element={<Outlet />}>
                    <Route
                        index
                        element={<Navigate to="dashboard" replace />}
                    />
                    <Route
                        path="dashboard"
                        element={<AccountDashboardPage />}
                    />
                    <Route path="settings" element={<AccountManagementPage />}>
                        <Route
                            index
                            element={<Navigate to="profile" replace />}
                        />
                        <Route
                            path="profile"
                            element={<ProfileSettingsView />}
                        />
                        <Route
                            path="subscriptions"
                            element={<SubscriptionsView />}
                        />
                        <Route path="usage" element={<UsageView />} />
                        <Route
                            path="linked-accounts"
                            element={<LinkedAccountsView />}
                        />
                    </Route>
                </Route>

                {/* Support Route */}
                <Route path="support" element={<SupportComingSoonPage />} />

                {/* Weitere Hauptrouten hier einfügen */}
            </Route>

            {/* Routen ohne MainLayout (z.B. für spezielle Fehlerseiten) */}
            <Route
                path="/dynamic-personality"
                element={<DynamicPersonalityPage />}
            />
            <Route
                path="/cortex-one-suite-presentation"
                element={<CortexOneSuitePage />}
            />
            {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
    );
};

export default AppRouter;
