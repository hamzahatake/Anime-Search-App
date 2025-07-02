import React from "react";

export default function Footer() {
  return (
    <footer className="bg-backgroundPrimary py-6 px-0 w-full text-textSecondary flex flex-col md:flex-row items-center justify-between gap-4 font-inter">
      <div>© 2025 AnimeVerse</div>
      <div className="flex gap-4">
        <a className="hover:text-white transition" href="#">Privacy</a>
        <a className="hover:text-white transition" href="#">Terms</a>
        <a className="hover:text-white transition" href="#">Contact</a>
      </div>
      <div className="flex gap-4">
        <span className="w-6 h-6 bg-textSecondary rounded-full" />
        <span className="w-6 h-6 bg-textSecondary rounded-full" />
      </div>
    </footer>
  );
} 