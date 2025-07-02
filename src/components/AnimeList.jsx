import React from "react";
import AnimeCard from "./AnimeCard";

export default function AnimeList() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {/* Map AnimeCard here */}
      <AnimeCard />
      <AnimeCard />
      <AnimeCard />
    </div>
  );
}
