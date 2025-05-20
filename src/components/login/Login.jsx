import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
    email: yup
        .string()
        .email('Invalid email address')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
}).required();

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log('Form Data:', data);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-purple-500">
            <div className="w-full max-w-sm p-8 space-y-6 bg-purple-100 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center text-blue -700">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                {...register('email')}
                                className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                {...register('password')}
                                className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                            />
                            {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-6 py-2 text-white bg-purple-800 rounded-md hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
