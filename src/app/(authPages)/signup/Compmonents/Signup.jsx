"use client"
import { RegisterUser } from '@/app/action/auth/RegisterUser';
import React from 'react'

export default function Signup() {
    const handleSubmit = async(e) =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
       await RegisterUser({name, email, password})

    }
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                placeholder="Full Name"
                name='name'
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"

            />
            <input
                type="email"
                placeholder="Email address"
                name='email'
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"

            />
            <input
                type="password"
                placeholder="Password"
                name='password'
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"

            />
            <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition disabled:opacity-50"

            >
                Sign Up
            </button>
        </form>
    )
}
