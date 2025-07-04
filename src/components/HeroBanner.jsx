import React from "react";

export default function HeroBanner() {
  return (
    <section className="relative py-12 px-4 sm:py-16 sm:px-8 flex flex-col items-center justify-center min-h-[320px] sm:min-h-[320px] w-full overflow-hidden text-center">
      <div className="flex flex-col items-center justify-center w-full h-full mt-30">
        <h1 className="relative z-10 text-3xl sm:text-5xl leading-tight sm:leading-[56px] font-bold text-white font-inter mb-3 sm:mb-4 w-full">
          Welcome to AnimeVerse
        </h1>
        <p className="relative z-10 text-base sm:text-lg text-textSecondary mb-6 sm:mb-8 w-full">
          Stream and discover the best anime, curated for you.
        </p>
      </div>
    </section>
  );
}