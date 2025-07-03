import { useState } from "react";


export default function Card({ title, image }) {
  return (
    <div className="w-full bg-cardBackground rounded-xl shadow-lg overflow-hidden flex flex-col items-center hover:scale-105 transition-transform duration-300 m-2">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-4 w-full flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-white font-inter truncate">
          {title}
        </h3>
      </div>
    </div>
  );
}
