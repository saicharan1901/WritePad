import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-[#202124] shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 font-mono">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link href='/home' passHref>
                <div className=" text-3xl font-bold text-yellow-700">WritePad</div>
              </Link>
              
            </div>
          </div>


            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link href='/note' passHref>
                  <div className="text-white font-mono px-3 py-2 rounded-md hover:text-yellow-700 text-3xl">Notes</div>
                </Link>
              </div>
            </div>


        </div>
      </div>
    </nav>

  );
}
