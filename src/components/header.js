import React from "react";
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
    
    return (
        <nav className="bg-[#202124] shadow-lg">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 font-mono">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0">
                            <Link href='/home' passHref>
                                <div className=" text-3xl font-bold text-yellow-700">
                                    <svg width="32" height="32" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0h44c5.523 0 10 4.477 10 10v44c0 5.523-4.477 10-10 10H10C4.477 64 0 59.523 0 54V10C0 4.477 4.477 0 10 0zm1 1c-4.411 0-8 3.589-8 8v44c0 4.411 3.589 8 8 8h44c4.411 0 8-3.589 8-8V10c0-4.411-3.589-8-8-8H11z" fill="#F9E07F" />
                                        <rect x="14" y="14" width="36" height="36" fill="none" stroke="#5C5C5C" stroke-width="2" />
                                        <line x1="14" y1="23" x2="50" y2="23" stroke="#5C5C5C" stroke-width="2" />
                                        <line x1="14" y1="29" x2="50" y2="29" stroke="#5C5C5C" stroke-width="2" />
                                        <line x1="14" y1="35" x2="50" y2="35" stroke="#5C5C5C" stroke-width="2" />
                                    </svg>
                                </div>
                            </Link>

                        </div>
                    </div>

                    {session &&
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src={session.user.image} alt={session.user.name} />
              </div>
              <div className="ml-3">
                <div className="text-white font-medium">{session.user.name}</div>
              </div>
            </div>
          }
          {session &&
                <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                            <Link href='/note' passHref>
                                <div className=" hover:bg-yellow-700 font-mono px-3 py-2  rounded-lg text-yellow-700 hover:text-[#202124]">Notes</div>
                            </Link>
                        </div>
                    </div>
}
          {session &&
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <button className=" hover:bg-yellow-700 font-mono px-3 py-2  rounded-lg text-yellow-700 hover:text-[#202124] " onClick={handleSignout}>
                  Sign out
                </button>
              </div>
            </div>
          }
          {!session &&
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <button className=" hover:bg-yellow-700 font-mono px-3 py-2  rounded-lg text-yellow-700 hover:text-[#202124]" onClick={handleSignin}>
                  Sign in
                </button>
              </div>
            </div>
          }


                </div>
            </div>
        </nav>

    );
}
