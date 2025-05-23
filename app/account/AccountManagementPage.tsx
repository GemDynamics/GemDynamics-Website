import React from 'react';
import { Outlet } from 'react-router-dom';
import AccountManagementLayout from './components/layout/AccountManagementLayout';

const AccountManagementPage: React.FC = () => {
    return (
        <AccountManagementLayout>
            <Outlet />
        </AccountManagementLayout>
    );
};

export default AccountManagementPage;
