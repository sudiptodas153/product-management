import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-blue-900 text-gray-300 py-12 px-6 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* About */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Productify</h3>
                    <p className="text-gray-400">
                        Your trusted online marketplace offering high-quality products, fast delivery, and excellent customer service.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#features" className="hover:text-blue-400 transition">Features</a>
                        </li>
                        <li>
                            <a href="#trending" className="hover:text-blue-400 transition">Trending Products</a>
                        </li>
                        <li>
                            <Link href="/about">
                            <p className="hover:text-blue-400 transition">About Us</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contractSection">
                            <p className="hover:text-blue-400 transition">Contact</p>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
                    <p>Email: support@productify.com</p>
                    <p>Phone: +8801865224903</p>
                    <p>Address: Sylhet, Bangladesh.</p>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
                    <div className="flex space-x-4 text-gray-400">
                        <a href="https://www.facebook.com/sudipto.das.601834"  target="blank" className="hover:text-blue-500 transition" aria-label="Facebook">
                            <svg
                                className="w-6 h-6 fill-current"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-3v-3h3v-2c0-3 1.8-4.6 4.5-4.6 1.3 0 2.6.2 2.6.2v3h-1.5c-1.5 0-2 1-2 2v2h3.5l-.5 3h-3v7A10 10 0 0 0 22 12" />
                            </svg>
                        </a>
                        <a href="#" className="hover:text-blue-400 transition" aria-label="Twitter">
                            <svg
                                className="w-6 h-6 fill-current"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M23 3a10.9 10.9 0 0 1-3.1.9 4.9 4.9 0 0 0 2.1-2.7 10.7 10.7 0 0 1-3.3 1.3 4.9 4.9 0 0 0-8.4 4.5 14 14 0 0 1-10-5 4.9 4.9 0 0 0 1.5 6.5A4.8 4.8 0 0 1 2 9v.1a4.9 4.9 0 0 0 4 4.9 4.9 4.9 0 0 1-2.2.1 4.9 4.9 0 0 0 4.6 3.4 9.8 9.8 0 0 1-6 2c-.4 0-.8 0-1.2-.1A14 14 0 0 0 7.9 21c9 0 14-7.5 14-14v-.6A9.7 9.7 0 0 0 23 3z" />
                            </svg>
                        </a>
                        <a href="#" className="hover:text-pink-500 transition" aria-label="Instagram">
                            <svg
                                className="w-6 h-6 fill-current"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M7 2C4 2 2 4 2 7v10c0 3 2 5 5 5h10c3 0 5-2 5-5V7c0-3-2-5-5-5H7zm10 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
