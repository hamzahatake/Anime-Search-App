import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className="bg-backgroundPrimary py-4 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-32 font-inter relative">
      <div className="flex w-full md:w-auto items-center justify-between">
        <Link to="/">
          <div className="text-white no-underline text-[25px] font-bold">AnimeVerse
          </div>
        </Link>
      </div>
      {/* Menu */}
      <div
        className={`
          flex-col md:flex-row gap-4 md:gap-8 mb-2 md:mb-0
          flex md:flex
          w-full md:w-auto
          bg-backgroundPrimary md:bg-transparent
          absolute md:static left-0 top-full md:top-auto z-20
          px-4 md:px-0 py-4 md:py-0
          transition-all duration-200
          md:flex
        `}
      >
        {/* Menu items go here */}
      </div>
    </nav>
  );
}
