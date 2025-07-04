import React from "react";

export default function AnimeCard({ title, image, description, type, rating, episodes, year }) {
  return (
    <div className="relative group rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur border border-white/10 transition-transform hover:scale-105 hover:shadow-cyan-500/30 min-h-[16rem] flex flex-col justify-end">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
      <div className="relative z-20 p-4 flex flex-col justify-end h-full">
        <h2 className="text-2xl font-extrabold text-white mb-1 drop-shadow">{title}</h2>
        <div className="flex flex-wrap gap-2 text-white/90 text-sm mb-1">
          <span className="bg-black/40 rounded px-2 py-0.5">★ {rating}</span>
          <span className="bg-black/40 rounded px-2 py-0.5">{type} • {episodes} eps</span>
          <span className="bg-black/40 rounded px-2 py-0.5">{year}</span>
        </div>
        <p className="text-white/80 text-xs line-clamp-2">{description ? description.slice(0, 100) : ''}{description && description.length > 100 ? '...' : ''}</p>
      </div>
    </div>
  );
}
