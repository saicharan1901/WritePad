import React, { useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Header() {
    const { data: session } = useSession()

    const handleSignin = (e) => {
        e.preventDefault()
        signIn()
    }

    const handleSignout = (e) => {
        e.preventDefault()
        signOut()
    }
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-[#202124] shadow-lg">
            <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                    <Link href="/home" passHref>
                        <div className="hidden sm:block">

                            <button className="text-white hover:bg-yellow-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Home
                            </button>
                        </div>
                    </Link>
                    {session &&
                        <Link href="/note" passHref>
                            <div className="hidden sm:block">

                                <button className="text-white hover:bg-yellow-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Notes
                                </button>
                            </div>
                        </Link>
                    }
                    {session &&
                        <div className="hidden sm:block ">
                            <div className="flex space-x-4">
                                <button className="text-white hover:bg-yellow-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={handleSignout}>
                                    Sign out
                                </button>
                            </div>
                        </div>
                    }
                    {!session &&
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <button className="text-white hover:bg-yellow-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={handleSignin}>
                                    Sign in
                                </button>
                            </div>
                        </div>
                    }
                    {session &&
                        <Link href="/profile">
                            <p className="text-white hover:bg-yellow-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Profile
                            </p>
                        </Link>
                    }
                </div>
            </div>
            {/* Mobile menu button */}
            <div className="-mr-2 flex sm:hidden">
                <button
                    type="button"
                    className="bg-[#FBBF24] inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    aria-expanded={menuOpen}
                    onClick={handleMenuToggle}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    <svg
                        className="hidden h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            {/* Mobile menu */}
            <div className={`${menuOpen ? "block" : "hidden"} sm:hidden bg-[#202124] pb-3`}>

                <Link href="/home" passHref>
                    <p className="block px-3 py-2 text-white hover:bg-yellow-600 hover:text-white rounded-md text-sm font-medium">Home</p>
                </Link>

                {session &&
                    <Link href="/note" passHref>
                        <p className="block px-3 py-2 text-white hover:bg-yellow-600 hover:text-white rounded-md text-sm font-medium">Notes</p>
                    </Link>
                }
                {session &&
                    <div
                        className="text-white cursor-pointer hover:bg-yellow-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        onClick={handleSignout}
                        style={{ userSelect: 'none', cursor: 'pointer' }}
                    >
                        Sign out
                    </div>


                }


                {!session &&
                    <div
                        className="text-white cursor-pointer hover:bg-yellow-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        onClick={handleSignin}
                        style={{ userSelect: 'none', cursor: 'pointer' }}
                    >
                        Sign in
                    </div>
                }
                {session &&
                    <Link href="/profile">
                        <p className="text-white hover:bg-yellow-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                            Profile
                        </p>
                    </Link>
                }
            </div>





        </nav>
    );
}
