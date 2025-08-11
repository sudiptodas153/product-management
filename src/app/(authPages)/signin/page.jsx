"use client"
import Link from 'next/link'
import React from 'react'
import Signin from './Components/Signin'
import SocialLogin from './Components/SocialLogin'


export default function signin() {
    return (
        <div>
            <div className="py-10 bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center px-4">
                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
                        <p className="text-sm text-gray-500">Log in to your Productify account</p>
                    </div>

                    <div className="space-y-4">
                       <SocialLogin/>

                        <div className="flex items-center gap-3">
                            <div className="flex-1 h-px bg-gray-300"></div>
                            <span className="text-xs text-gray-400">OR</span>
                            <div className="flex-1 h-px bg-gray-300"></div>
                        </div>

                       <Signin/>
                    </div>

                    <div className="text-xs flex gap-2 text-center text-gray-400 mt-6">
                        Don’t have an account?  <Link href="/signup"><p className="text-blue-600 hover:underline">Create one</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
