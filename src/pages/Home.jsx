import React from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import HeroCover from "/images/HeroCover.avif";

export default function Home() {
    const dummyData = [...Array(10)];

    return (
        <div className="min-h-screen min-w-screen flex flex-col bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-x-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-pink-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500 opacity-10 rounded-full blur-2xl animate-pulse"></div>
            </div>
            {/* HeroCover background for top section */}
            <div className="absolute top-0 left-0 w-full" style={{ zIndex: 1, height: "581px", pointerEvents: "none" }}>
                <div style={{ position: "relative", width: "100%", height: "100%" }}>
                    <img
                        src={HeroCover}
                        alt="Hero Cover"
                        className="w-full h-full rounded-b-4xl object-cover"
                        style={{ objectPosition: "center top", height: "100%" }}
                    />
                </div>
            </div>
            <div className="relative z-10 flex flex-col flex-grow w-full">
                <Navbar />
            </div>
            <div className="w-full px-2 sm:px-4 md:px-8 flex justify-center relative z-10">
                <div className="w-full max-w-4xl bg-gradient-to-r from-indigo-800/80 via-purple-800/80 to-blue-800/80 rounded-3xl shadow-xl p-4 sm:p-6 md:p-10 border border-indigo-700">
                    <HeroBanner />
                </div>
            </div>
            <div className="flex flex-col items-center mt-10 w-full relative z-10">
                <SearchBar />
            </div>
            <div className="flex-grow flex flex-col justify-center w-full py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-center mx-auto w-fit px-4">
                    {dummyData.map((_, index) => (
                        <Card key={index} />
                    ))}
                </div>
            </div>
            <Footer />
        </div >
    );
}