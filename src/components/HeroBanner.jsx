import React from "react";

export default function HeroBanner() {
  return (
    <section className="relative py-12 px-4 sm:py-16 sm:px-8 flex flex-col items-center justify-center min-h-[220px] sm:min-h-[320px] w-full overflow-hidden">
      <h1 className="relative z-10 text-3xl sm:text-5xl leading-tight sm:leading-[56px] font-bold text-white font-inter mb-3 sm:mb-4 text-center w-full">
        Welcome to AnimeVerse
      </h1>
      <p className="relative z-10 text-base sm:text-lg text-textSecondary mb-6 sm:mb-8 text-center w-full">
        Stream and discover the best anime, curated for you.
      </p>
      <div className="relative z-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full">
        <button className="bg-white text-backgroundPrimary py-2.5 px-5 sm:py-3 sm:px-6 rounded-md font-medium text-base sm:text-[16px]">
          Popular Anime
        </button>
        <button className="bg-transparent border border-white text-white py-2.5 px-5 sm:py-3 sm:px-6 rounded-md font-medium text-base sm:text-[16px]">
          WatchList
        </button>
      </div>
    </section>
  );
}