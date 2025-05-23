import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm, { AuthFormData } from './components/AuthForm';

const LandingSignInPage: React.FC = () => {
    const handleSignIn = (data: AuthFormData) => {
        console.log('Sign In Data:', data);
        // Hier würde die tatsächliche Anmelde-Logik implementiert
        alert('Sign-in attempt (see console for data).');
    };

    return (
        <div className="flex min-h-[calc(100vh-128px)] flex-col items-center justify-center bg-gray-900 px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-400">
                        Or{' '}
                        <Link
                            to="/signup"
                            className="font-medium text-purple-400 hover:text-purple-300"
                        >
                            create a new account
                        </Link>
                    </p>
                </div>
                <AuthForm formType="signIn" onSubmit={handleSignIn} />
            </div>
        </div>
    );
};

export default LandingSignInPage;
