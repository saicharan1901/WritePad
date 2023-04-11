import React from "react";
import Header from "@/components/header";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-[#202124] font-mono">

            <Header />

            <div className="flex flex-col items-center justify-center mt-12">
                <h1 className="text-2xl sm:text-4xl font-bold text-center text-yellow-500 mb-8 ">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 absolute animate-bounce ">
                    </div>
                    <div className="ml-2 sm:ml-24">Simplify your life with WritePad!</div>
                </h1>
                <div className="w-2/3 sm:w-1/2">
                    <p className="text-base sm:text-lg text-yellow-700 mb-4 mt-10 hover:text-yellow-600">
                        WritePad is a Google Keep clone that helps you stay organized and productive.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row font-mono mt-24">
                    {/* First video */}
                    <div className="relative w-full sm:w-1/2 flex items-center justify-center">
                        <video autoPlay loop className="border border-yellow-700" width="320" height="180">
                            <source src="/writepad0.mov" type="video/mp4" />
                        </video>
                    </div>
                    <div className="relative w-full sm:w-1/2 flex items-center justify-center animate-pulse text-yellow-500 pl-4 mt-6 sm:mt-0">
                        <div className="text-center">
                            <h2 className="text-lg font-bold mb-2">Add notes in style</h2>
                            <p className="text-sm">See how easy it is to add a note with a title and content to WritePad.</p>
                        </div>
                    </div>

                    {/* Second video */}
                    <div className="relative w-full sm:w-1/2 flex items-center justify-center mt-6 sm:mt-0">
                        <video autoPlay loop className="border border-yellow-700" width="320" height="180">
                            <source src="/writepad1.mov" type="video/mp4" />
                        </video>
                    </div>
                    <div className="relative w-full sm:w-1/2 flex items-center justify-center animate-pulse text-yellow-500 pl-4 mt-6 sm:mt-0">
                        <div className="text-center">
                            <h2 className="text-lg font-bold mb-2">Never lose a note again</h2>
                            <p className="text-sm">Watch how easy it is to delete a note and keep your workspace tidy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
