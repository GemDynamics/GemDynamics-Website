import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm, { AuthFormData } from './components/AuthForm';

const LandingSignUpPage: React.FC = () => {
    const handleSignUp = (data: AuthFormData) => {
        console.log('Sign Up Data:', data);
        // Hier würde die tatsächliche Registrierungs-Logik implementiert
        alert('Sign-up attempt (see console for data).');
    };

    return (
        <div className="flex min-h-[calc(100vh-128px)] flex-col items-center justify-center bg-gray-900 px-4 py-12 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                        Create your GemDynamics account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-400">
                        Already have an account?{' '}
                        <Link
                            to="/signin"
                            className="font-medium text-purple-400 hover:text-purple-300"
                        >
                            Sign in here
                        </Link>
                    </p>
                </div>
                <AuthForm formType="signUp" onSubmit={handleSignUp} />
            </div>
        </div>
    );
};

export default LandingSignUpPage;
