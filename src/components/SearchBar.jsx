import { useState } from 'react';

export default function SearchBar() {
    const [search, setSearch] = useState('')

    function handleSearch(e) {
     e.preventDefault();
     if(!search.trim()) {
          setSearch('')
     };
    }

     return (
          <div className="w-full flex justify-center mb-12 px-2 sm:px-4">
                <form onSubmit={handleSearch} className="relative w-full group">
                     <input
                          type="text"
                          placeholder="Search for anime..."
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 pl-12 sm:pl-14 pr-4 sm:pr-6 text-base sm:text-lg text-black bg-white/80 backdrop-blur-sm border-2
                            border-purple-200/50 rounded-2xl sm:rounded-3xl shadow-lg transition-all duration-300 ease-in-out hover:bg-white
                             hover:border-purple-300 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300/50
                              focus:border-purple-400 placeholder-transparent hover:placeholder-gray-500"
                     />
                     <svg
                          className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-purple-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                     >
                          <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                     </svg> 
                </form>
          </div>
     );
}
