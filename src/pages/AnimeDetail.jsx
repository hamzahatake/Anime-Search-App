import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { animeDetail } from "../services/jikan";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import AnimeCard from "../components/AnimeCard"
import { Link } from "react-router-dom";
import { animeTop } from "../services/jikan";
import SearchBar from "../components/SearchBar";

export default function AnimeDetail() {
    const { id } = useParams();

    const [anime, setAnimeInfo] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [hasError, setError] = useState(null);
    const [searchResults, setSearchResults] = useState([]);

    const location = useLocation();
    const { top } = location.state || {};
    const [topAnimeList, setTopAnimeList] = useState(top || []);

    useEffect(() => {
        if (!top) {
            animeTop().then(setTopAnimeList);
        }
    }, [top]);

    const fetchAnimeDetails = async () => {
        try {
            setLoading(true);
            const anime = await animeDetail(id);
            await new Promise((resolve) => setTimeout(() => resolve()), 3000);
            setAnimeInfo(anime);
        } catch (err) {
            setError("Oops, Anime detail is not available.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAnimeDetails();
    }, [id]);

    if (isLoading) {
        return (
            <div className="fixed inset-0 flex justify-center items-center bg-transparent z-50">
                <div className="spinner"></div>
                <style>
                    {`
                @keyframes spinner {
                    to {transform: rotate(360deg);}
                }
                .spinner {
                    width: 48px;
                    height: 48px;
                    border: 6px solid #fff3;
                    border-top-color: #fff;
                    border-radius: 50%;
                    animation: spinner 0.8s linear infinite;
                }
                `}
                </style>
            </div>
        );
    }

    if (hasError) {
        return <p className="text-red-400 text-center mt-10">{hasError}</p>;
    }

    if (!anime) {
        return <p className="text-white text-center mt-10">Anime not found.</p>;
    }

    return (
        <div className="fixed inset-0 min-h-screen min-w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col py-6 px-2 md:py-10 md:px-8 lg:px-16 2xl:px-32 4xl:px-80 overflow-y-auto">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
                <div className="absolute top-20 left-10 w-40 h-40 md:w-72 md:h-72 2xl:w-[32rem] 2xl:h-[32rem] bg-pink-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-56 h-56 md:w-96 md:h-96 2xl:w-[40rem] 2xl:h-[40rem] bg-blue-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 w-48 h-48 md:w-80 md:h-80 2xl:w-[30rem] 2xl:h-[30rem] bg-purple-500 opacity-10 rounded-full blur-2xl animate-pulse"></div>
            </div>
            <div className="relative w-full z-50">
                <Navbar />
                <div className="flex justify-end mt-4">
                    <SearchBar onSearch={setSearchResults} />
                </div>
            </div>
            {searchResults.length > 0 ? (
                <div className="flex-grow flex flex-col justify-center w-full py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-center mx-auto w-fit px-4 mt-10">
                        {searchResults.slice(0, 20).map((result) => (
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
                        ))}
                    </div>
                </div>
            ) : (
                <div className="flex flex-1 items-center justify-center">
                    <div className="mx-auto max-w-4xl 2xl:max-w-7xl 4xl:max-w-[120rem] w-full bg-white/10 backdrop-blur rounded-3xl shadow-2xl p-4 sm:p-8 2xl:p-16 flex flex-col md:flex-row gap-6 md:gap-8 animate-fade-in">
                        {/* Anime Image */}
                        <div className="flex-shrink-0 flex justify-center">
                            <img
                                src={anime?.images?.jpg?.image_url}
                                alt={anime?.title || "Anime Poster"}
                                className="w-40 h-60 sm:w-64 sm:h-96 2xl:w-[28rem] 2xl:h-[42rem] object-cover rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Details */}
                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                <h1 className="font-extrabold text-white mb-4 animate-slide-in
                                    text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-7xl 4xl:text-8xl
                                    transition-all duration-300"
                                    style={{ wordBreak: "break-word" }}
                                >
                                    {anime?.title}
                                </h1>

                                <div className="mb-4">
                                    {anime?.trailer?.youtube_id ? (
                                        <iframe
                                            className="w-full h-40 sm:h-56 2xl:h-96 rounded-xl shadow-lg border-4 border-white/20 animate-fade-in"
                                            src={`https://www.youtube.com/embed/${anime.trailer.youtube_id}`}
                                            title="Anime Trailer"
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        <p className="text-white text-sm mb-4">Trailer not available.</p>
                                    )}
                                </div>

                                <div className="grid grid-cols-2 gap-4 text-white/90">
                                    <Detail label="Type" value={anime?.type} />
                                    <Detail label="Episodes" value={anime?.episodes} />
                                    <Detail label="Status" value={anime?.status} />
                                    <Detail label="Airing" value={anime?.airing ? "Yes" : "No"} />
                                    <Detail label="Duration" value={anime?.duration} />
                                    <Detail label="Score" value={anime?.score} />
                                    <Detail label="Rank" value={anime?.rank ? `#${anime.rank}` : "N/A"} />
                                    <Detail label="Popularity" value={anime?.popularity ? `#${anime.popularity}` : "N/A"} />
                                </div>

                                {/* Description Section */}
                                <div className="mt-8 bg-white/10 rounded-xl p-6 shadow-lg"></div>
                                <h2 className="text-lg font-bold text-white mb-2">Description</h2>
                                <p className="text-white/90 text-base whitespace-pre-line">
                                    {anime?.synopsis ? anime.synopsis : "No description available."}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* Top Anime Section with Arrow Carousel */}
            <div className="flex-grow flex flex-col justify-center w-full py-8">
                {Array.isArray(topAnimeList) && topAnimeList.length > 0 && (
                    <>
                        <h2 className="text-2xl font-bold text-white mb-4 ml-4">Top Anime</h2>
                        <TopAnimeCarousel topAnimeList={topAnimeList} />
                    </>
                )}
            </div>
        </div>
    );

    // Carousel component with arrows
    function TopAnimeCarousel({ topAnimeList }) {
        const scrollRef = React.useRef(null);
        const visibleCount = 4;
        const cardWidth = 270; // 260px card + 10px gap

        const handlePrev = () => {
            if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: -visibleCount * cardWidth, behavior: "smooth" });
            }
        };

        const handleNext = () => {
            if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: visibleCount * cardWidth, behavior: "smooth" });
            }
        };

        return (
            <div className="relative">
                <button
                    onClick={handlePrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700 text-white rounded-full p-2 shadow transition"
                    aria-label="Previous"
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <div
                    className="overflow-x-auto scrollbar-hide"
                    ref={scrollRef}
                    style={{ scrollBehavior: "smooth" }}
                >
                    <div className="flex gap-6 px-10 pb-4 min-w-max">
                        {topAnimeList.map((topAnime) => (
                            <Link
                                to={`/anime/${topAnime.mal_id}`}
                                key={topAnime.mal_id}
                                state={{ top: topAnimeList }}
                                className="min-w-[260px] max-w-xs flex-shrink-0"
                            >
                                <AnimeCard
                                    title={topAnime.title}
                                    image={topAnime.images?.jpg?.image_url}
                                    description={topAnime.synopsis}
                                    type={topAnime.type}
                                    rating={topAnime.score}
                                    episodes={topAnime.episodes}
                                    year={topAnime.year}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <button
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700 text-white rounded-full p-2 shadow transition"
                    aria-label="Next"
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        );
    }
}

function Detail({ label, value }) {
    return (
        <div className="flex flex-col bg-white/10 rounded-lg p-3 shadow transition hover:bg-white/20 hover:scale-105 duration-200">
            <span className="text-xs uppercase tracking-wider text-gray-300">{label}</span>
            <span className="text-lg font-semibold">
                {value !== undefined && value !== null ? value : "N/A"}
            </span>
        </div>
    );
}
