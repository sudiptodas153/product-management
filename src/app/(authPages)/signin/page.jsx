import Link from 'next/link'
import React from 'react'

export default function signin() {
    return (
        <div>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center px-4">
                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
                        <p className="text-sm text-gray-500">Log in to your Productify account</p>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <button className="btn w-full bg-white text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex-1 h-px bg-gray-300"></div>
                            <span className="text-xs text-gray-400">OR</span>
                            <div className="flex-1 h-px bg-gray-300"></div>
                        </div>

                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Email address"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

                            />
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
                                
                            >
                                Sign in
                            </button>
                        </form>
                    </div>

                    <div className="text-xs flex gap-2 text-center text-gray-400 mt-6">
                        Don’t have an account?  <Link href="/signup"><p className="text-blue-600 hover:underline">Create one</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
