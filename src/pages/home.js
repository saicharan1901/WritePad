import React from "react";
import Header from "@/components/header";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-[#202124] font-mono">


            <Header />


            <div className="flex flex-col items-center justify-center mt-12">
                <h1 className="text-4xl font-bold text-center text-yellow-500 mb-8 ">
                    <div className="w-12 h-12 absolute animate-bounce ">
                        <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0h44c5.523 0 10 4.477 10 10v44c0 5.523-4.477 10-10 10H10C4.477 64 0 59.523 0 54V10C0 4.477 4.477 0 10 0zm1 1c-4.411 0-8 3.589-8 8v44c0 4.411 3.589 8 8 8h44c4.411 0 8-3.589 8-8V10c0-4.411-3.589-8-8-8H11z" fill="#F9E07F" />
                            <rect x="14" y="14" width="36" height="36" fill="none" stroke="#5C5C5C" strokeWidth="3" />
                            <line x1="14" y1="23" x2="50" y2="23" stroke="#5C5C5C" strokeWidth="2" />
                            <line x1="14" y1="29" x2="50" y2="29" stroke="#5C5C5C" strokeWidth="2" />
                            <line x1="14" y1="35" x2="50" y2="35" stroke="#5C5C5C" strokeWidth="2" />
                        </svg>
                    </div>
                    <div className="ml-24">Simplify your life with WritePad!</div>
                </h1>
                <div className="w-2/3">
                    <p className="text-lg text-yellow-700 mb-4 mt-10 hover:text-yellow-600">
                        WritePad is a Google Keep clone that helps you stay organized and productive. With WritePad, you can quickly jot down notes, make to-do lists, and set reminders for important tasks.
                    </p>
                </div>
                <div className="flex flex-wrap font-mono mt-24 ">
                    {/* First video */}
                    <div className="relative w-full md:w-1/2 flex items-center ">
                        <video autoPlay loop className="ml-72 border border-yellow-700" width="320" height="180">
                            <source src="/writepad0.mov" type="video/mp4" />
                        </video>
                    </div>
                    <div className="relative w-1/3 flex animate-pulse items-center font-mono text-yellow-500 pl-4">
                        <div className="">
                            <h2 className="text-lg font-bold mb-2">Add notes in style</h2>
                            <p className="text-sm">See how easy it is to add a note with a title and content to WritePad.</p>
                        </div>
                    </div>

                    {/* Second video */}
                    <div className="relative w-full md:w-1/2 flex items-center">
                        <video autoPlay loop className="ml-72 mt-10 border border-yellow-700" width="320" height="180">
                            <source src="/writepad1.mov" type="video/mp4" />
                        </video>
                    </div>
                    <div className="relative w-1/3 flex items-center font-mono text-yellow-500 animate-pulse pl-4">
                        <div>
                            <h2 className="text-lg font-bold mb-2">Never lose a note again</h2>
                            <p className="text-sm">Watch how easy it is to delete a note and keep your workspace tidy.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* SVG */}

        </div>
    );
}
