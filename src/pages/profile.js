import React from "react";
import Header from "@/components/header";
import { useSession, signIn, signOut } from 'next-auth/react'

export default function HomePage() {
    const { data: session, status } = useSession()

    const handleSignin = (e) => {
        e.preventDefault()
        signIn()
    }
    
    if (status === 'loading') {
        return <p>Loading...</p>
    }

    if (!session) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#202124] font-mono">

                <p className='text-xl text-white animate-bounce'>You need to sign in</p> 
                <button className="text-yellow-700 ml-5 animate-bounce bg-[#202124] font-mono px-4 py-2 rounded-md hover:bg-yellow-700 hover:text-white" onClick={handleSignin}>Sign in</button>
            </div>
        )
    }

    return (
        <div className="font-mono">
            <Header />
            <div className="min-h-screen bg-[#202124] font-mono flex flex-col justify-center items-center">

                <div className="bg-[#202124] border border-gray-500 hover:border-yellow-700 shadow-lg rounded-lg px-8 py-6 mt-6 w-full max-w-md">
                    <div className="flex flex-col items-center">
                        <img className="h-20 w-20 rounded-full object-cover mb-4" src={session.user.image} alt={session.user.name} />
                        <h1 className="text-yellow-800 font-bold text-2xl">{session.user.name}</h1>
                        <p className="text-yellow-600">{session.user.email}</p>
                        {session.user.github && (
                            <p className="text-yellow-600">
                                GitHub: <a href={session.user.github} className="underline">{session.user.github}</a>
                            </p>
                        )}
                    </div>
                    <div className="mt-6">
                        <button className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" onClick={signOut}>Sign out</button>
                    </div>
                </div>
            </div>
        </div>

    );
}
