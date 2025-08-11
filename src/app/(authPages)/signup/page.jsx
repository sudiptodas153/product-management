import Link from 'next/link'
import React from 'react'
import Signup from './Compmonents/Signup'

export default function signup() {
    return (
        <div>
            <div className="min-h-screen bg-gradient-to-br from-pink-100 to-indigo-100 flex items-center justify-center px-4">
                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-bold text-gray-800">Create Your Account</h1>
                        <p className="text-sm text-gray-500">Sign up and start managing your products</p>
                    </div>

                    <div className="space-y-4">
                       

                       <Signup/>
                    </div>

                    <div className="text-xs flex gap-2 text-center text-gray-400 mt-6">
                         Already have an account?{" "} <Link href="/signin"><p className="text-blue-600 hover:underline">Login</p></Link>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
