import React from 'react';

const ProfileSettingsView: React.FC = () => {
    return (
        <div>
            <h2 className="mb-6 text-2xl font-semibold text-white">
                Profile Settings
            </h2>
            <div className="space-y-6">
                <div className="rounded-lg bg-gray-700 p-4">
                    <h3 className="text-lg font-medium text-gray-200">
                        Avatar Placeholder
                    </h3>
                    <p className="text-sm text-gray-400">
                        Imagine a cool avatar uploader here.
                    </p>
                </div>
                <div className="rounded-lg bg-gray-700 p-4">
                    <h3 className="text-lg font-medium text-gray-200">
                        Name Fields Placeholder
                    </h3>
                    <p className="text-sm text-gray-400">
                        Inputs for first name, last name, display name.
                    </p>
                </div>
                <div className="rounded-lg bg-gray-700 p-4">
                    <h3 className="text-lg font-medium text-gray-200">
                        Password Change Placeholder
                    </h3>
                    <p className="text-sm text-gray-400">
                        Form to change password.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfileSettingsView;
