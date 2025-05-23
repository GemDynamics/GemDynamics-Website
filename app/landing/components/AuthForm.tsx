import React, { useState } from 'react';
import { Button } from '@/components/ui/button'; // Annahme
// Annahme für InputField, kann auch ein Standard-Input sein oder eine eigene Komponente
// import InputField from '@/components/ui/input';

export type AuthFormData = {
    email: string;
    password: string;
    displayName?: string;
};

type FormType = 'signIn' | 'signUp';

interface AuthFormProps {
    formType: FormType;
    onSubmit: (data: AuthFormData) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ formType, onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [displayName, setDisplayName] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formType === 'signUp' && password !== confirmPassword) {
            alert("Passwords don't match!"); // Einfache Validierung
            return;
        }
        const data =
            formType === 'signIn'
                ? { email, password }
                : { email, password, displayName };
        onSubmit(data);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full max-w-md space-y-6 rounded-lg bg-gray-800 p-8 shadow-xl"
        >
            <div>
                <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-gray-300"
                >
                    Email address
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-500 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
                />
            </div>

            {formType === 'signUp' && (
                <div>
                    <label
                        htmlFor="displayName"
                        className="mb-1 block text-sm font-medium text-gray-300"
                    >
                        Display Name
                    </label>
                    <input
                        id="displayName"
                        name="displayName"
                        type="text"
                        autoComplete="name"
                        required
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        className="block w-full appearance-none rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-500 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
                    />
                </div>
            )}

            <div>
                <label
                    htmlFor="password"
                    className="mb-1 block text-sm font-medium text-gray-300"
                >
                    Password
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete={
                        formType === 'signIn'
                            ? 'current-password'
                            : 'new-password'
                    }
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-500 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
                />
            </div>

            {formType === 'signUp' && (
                <div>
                    <label
                        htmlFor="confirmPassword"
                        className="mb-1 block text-sm font-medium text-gray-300"
                    >
                        Confirm Password
                    </label>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        autoComplete="new-password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="block w-full appearance-none rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-500 shadow-sm focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
                    />
                </div>
            )}

            <div>
                <Button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                    {formType === 'signIn' ? 'Sign In' : 'Create Account'}
                </Button>
            </div>
        </form>
    );
};

export default AuthForm;
