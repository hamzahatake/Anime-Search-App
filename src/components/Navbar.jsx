import React from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className="bg-backgroundPrimary py-4 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-32 font-inter relative">
      <div className="flex w-full md:w-auto items-center justify-between">
        <div className="text-white text-[20px] font-bold">AnimeVerse</div>
      </div>
      <div
        className={`
          flex-col md:flex-row gap-4 md:gap-8 mb-2 md:mb-0
          flex md:flex
          w-full md:w-auto
          bg-backgroundPrimary md:bg-transparent
          absolute md:static left-0 top-full md:top-auto z-20
          px-4 md:px-0 py-4 md:py-0
        `}
      >
        <button className="bg-white text-backgroundPrimary py-2 px-4 rounded-md font-medium text-[16px] w-full md:w-auto mt-4 md:mt-0">
          Sign In
        </button>
      </div>
    </nav>
  );
}
