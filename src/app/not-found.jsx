"use client"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-7xl font-bold text-blue-600">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
      <p className="text-gray-500 mt-2 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Back to Homepage
      </Link>

      
    </div>
  )
}
