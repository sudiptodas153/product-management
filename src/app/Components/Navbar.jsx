"use client"
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image';
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { FaUserCircle } from "react-icons/fa";
import Swal from 'sweetalert2';

export default function Navbar() {
    const { data: session, status } = useSession();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Click outside dropdown বন্ধ করার জন্য
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="navbar bg-base-100 shadow-sm md:px-12 sticky top-0 z-50">
            <div className="navbar-start">
                {/* Mobile menu toggle */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contractSection">Contact</Link></li>
                    </ul>
                </div>
                <Link href="/" className="font-bold md:text-4xl text-2xl">Productify</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu gap-16 menu-horizontal px-1">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contractSection">Contact</Link></li>
                </ul>
            </div>

            <div className="navbar-end gap-3">
                {
                    status === "authenticated" ? (
                        <div className="relative" ref={dropdownRef}>

                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className=" flex items-center gap-2"
                                aria-expanded={dropdownOpen}
                                aria-haspopup="true"
                            >
                                {!session.user?.image
                                    ? <FaUserCircle /> :
                                    <Image className='rounded-full' src={session.user?.image} width={20} height={20} alt='user' />
                                }

                                {session.user?.name || session.user?.email}
                                <svg className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none" stroke="currentColor" strokeWidth="2"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {dropdownOpen && (
                                <ul
                                    className="menu menu-compact border border-blue-200 dropdown-content mt-2 p-2 shadow bg-base-100 rounded-box w-52 absolute right-0 z-50"
                                >
                                    <li className='px-3'>{session.user?.name}</li>
                                    <li><Link href="/orderList" onClick={() => setDropdownOpen(false)}>Order List</Link></li>
                                    <li>
                                        <button
                                            onClick={() => {
                                                signOut();
                                                setDropdownOpen(false);
                                                Swal.fire({
                                                    icon: 'success',
                                                    title: 'Signed out',
                                                    text: 'You have been signed out successfully.',
                                                    timer: 2000,
                                                    showConfirmButton: false,
                                                });
                                            }}
                                            className="w-full text-left px-4 py-2 hover:bg-gray-100"
                                        >
                                            Signout
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link href="/signin"><button className='btn btn-primary rounded-lg'>Signin</button></Link>
                            <Link href="/signup"><button className='btn btn-primary rounded-lg'>Signup</button></Link>
                        </>
                    )
                }
            </div>
        </div>
    )
}
