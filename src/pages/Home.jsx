import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { animeTop } from "../services/jikan";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import AnimeCard from "../components/AnimeCard";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import HeroCover from "/images/HeroCover1.png";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Home() {
    const [searchResults, setSearchResults] = useState([]);
    const [topAnime, setAnimeTop] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(null);

    const fetchTopAnime = async () => {
        try {
            setLoading(true);
            const top = await animeTop();
            setAnimeTop(top);
        } catch (err) {
            setError("Oops, no top Anime available");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTopAnime();
    }, []);

    return (
        <div className="min-h-screen min-w-screen flex flex-col bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-x-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-pink-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500 opacity-10 rounded-full blur-2xl animate-pulse"></div>
            </div>

            {/* HeroCover background for top section */}
            <div
                className="absolute top-0 left-0 w-full"
                style={{ zIndex: 1, height: "581px", pointerEvents: "none" }}
            >
                <div style={{ position: "relative", width: "100%", height: "113%" }}>
                    <img
                        src={HeroCover}
                        alt="Hero Cover"
                        className="w-full h-full rounded-b-4xl object-cover"
                        style={{ objectPosition: "center", height: "100%" }}
                    />
                </div>
            </div>

            {/* Navbar and SearchBar on the same row */}
            <div className="relative z-10 flex flex-row items-center justify-between w-full px-8 mt-4">
                <div>
                    <Navbar />
                </div>
                <div className="ml-auto">
                    <SearchBar onSearch={setSearchResults} />
                </div>
            </div>

            <HeroBanner />

            <div className="flex-grow flex flex-col justify-center w-full py-8">
                {isLoading ? (
                    <div className="flex justify-center items-center h-60">
                        <LoadingSpinner />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-center mx-auto w-fit px-4 mt-50">
                        {searchResults.length > 0
                            ? searchResults.slice(0, 20).map((result) => (
                                <Link
                                    to={`/anime/${result.mal_id}`}
                                    key={result.mal_id}
                                >
                                    <AnimeCard
                                        title={result.title}
                                        image={result.images?.jpg?.image_url}
                                        description={result.synopsis}
                                        type={result.type}
                                        rating={result.score}
                                        episodes={result.episodes}
                                        year={result.year}
                                    />
                                </Link>
                            ))
                            : topAnime.slice(0, 20).map((top) => (
                                <Link
                                    to={`/anime/${top.mal_id}`}
                                    key={top.mal_id}
                                >
                                    <AnimeCard
                                        title={top.title}
                                        image={top.images?.jpg?.image_url}
                                        description={top.synopsis}
                                        type={top.type}
                                        rating={top.score}
                                        episodes={top.episodes}
                                        year={top.year}
                                    />
                                </Link>
                            ))}
                        {hasError && (
                            <p className="text-red-400 col-span-full mt-4">{hasError}</p>
                        )}
                    </div>
                )}
                {/* Sending All Anime info to AnimeDetail */}
                <Link
                    to="/anime/:id"
                    state={{ top: topAnime }}>
                </Link>
            </div>

            <Footer />
        </div>
    );
}
