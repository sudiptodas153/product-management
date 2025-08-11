"use client"
import React from 'react'
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2';


export default function Signin() {
    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        try {
            const response = await signIn("credentials", { email, password, callbackUrl: "/", redirect: false })
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'Welcome back!',
                    timer: 2000,
                    showConfirmButton: false,
                });
                setTimeout(() => {
                    router.push("/");
                }, 5000)
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Wrong Candidate',
                    text: '!!!',
                    timer: 2000,
                    showConfirmButton: false,
                });
            }

        }
        catch (error) {
            console.log(error)
            alert('wrong')
        }

        //   console.log(email, password)

    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="email"
                placeholder="Email address"
                name='email'
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

            />
            <input
                type="password"
                placeholder="Password"
                name='password'
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
    )
}
