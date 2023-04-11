import React from "react";
import Header from "@/components/header";
export default function HomePage() {
  return (
    <div className="text-4xl font-bold text-center bg-[#202124] min-h-screen">
        <Header />
      <h1 className="text-yellow-600 items-center justify-center grid mt-72">
        Simplify your life with WritePad !!
      </h1>
      {/* rest of the home page content */}
    </div>
  );
}
