import React from "react";

export default function AnimeCard() {
  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur border border-white/10 transition-transform hover:scale-105 hover:shadow-cyan-500/30">
      <img
        src="https://cdn.myanimelist.net/images/anime/4/19644.jpg"
        alt="Anime Title"
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition" />
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        <h2 className="text-2xl font-extrabold text-white mb-1 drop-shadow">Anime Title</h2>
        <div className="flex items-center space-x-3 mb-2">
          <span className="text-yellow-400 font-bold text-lg">★ 8.5</span>
          <span className="text-white/80 text-sm">TV • 24 eps</span>
          <span className="text-white/80 text-sm">2019</span>
        </div>
        <p className="text-white/80 text-sm line-clamp-2 mb-3">Brief synopsis of the anime goes here. This should be concise and fade out if too long.</p>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-cyan-500/80 hover:bg-cyan-600 text-white rounded-lg text-sm font-bold shadow transition">Details</button>
          <button className="px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg text-sm font-bold shadow transition">Add to Watchlist</button>
        </div>
      </div>
    </div>
  );
}
