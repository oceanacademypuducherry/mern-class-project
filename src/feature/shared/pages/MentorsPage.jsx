import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
    MentorName: yup.string().required('Mentor name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    mobile: yup.string().max(10, 'Mobile number must be exactly 10 digits').required('Mobile number is required'),
    bio: yup.string().max(500, 'Bio cannot exceed 500 characters'),
}).required();

const MentorsPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-6 bg-white text-pr shadow-lg rounded-md">
            <h1 className="text-2xl font-semibold text-center mb-6">Mentor Profile</h1>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Mentor Name</label>
                <input
                    type="text"
                    {...register('mentorName')}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.MentorName && <p className="mt-1 text-sm text-red-600">{errors.MentorName.message}</p>}
            </div>


            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    {...register('email')}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Mobile</label>
                <input
                    type="tel"
                    {...register('Mobile')}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.mobile && <p className="mt-1 text-sm text-red-600">{errors.mobile.message}</p>}
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700">Bio</label>
                <textarea
                    {...register('bio')}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    rows="4"
                />
                {errors.bio && <p className="mt-1 text-sm text-red-600">{errors.bio.message}</p>}
            </div>

            <button
                type="submit"
                className="w-full py-2 px-4 bg-purple-500 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
                Save Profile
            </button>
        </form>
    );
};

export default MentorsPage;
