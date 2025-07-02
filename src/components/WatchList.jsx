import React from "react";

export default function WatchList() {
  return (
    <div className="bg-white/10 backdrop-blur rounded-2xl shadow-2xl p-8 border border-white/10">
      <h1 className="text-3xl font-extrabold text-white mb-8 text-center drop-shadow">My Watchlist</h1>
      <ul className="divide-y divide-white/10">
        {/* Each item: */}
        <li className="py-6 flex items-center">
          <img src="https://cdn.myanimelist.net/images/anime/4/19644.jpg" alt="..." className="w-20 h-32 object-cover rounded-lg mr-6 shadow-lg" />
          <div className="flex-1">
            <h2 className="text-xl font-bold text-white">Anime Title</h2>
            <span className="text-white/70 text-sm">Status: Watching</span>
          </div>
          <button className="ml-4 px-4 py-2 bg-red-500/80 hover:bg-red-600 text-white rounded-lg text-xs font-bold shadow transition">Remove</button>
        </li>
        {/* ... */}
      </ul>
    </div>
  );
}
