import { useState } from 'react';
import { searchAnime } from '../services/jikan';
import LoadingSpinner from './LoadingSpinner';

export default function SearchBar({ onSearch }) {
     const [search, setSearch] = useState('');
     const [isLoading, setLoading] = useState(false);
     const [hasError, setError] = useState(null);

     const handleSearch = async (e) => {
          e.preventDefault();
          try {
               if (!search.trim()) {
                    setSearch('');
                    return;
               } else {
                    setError(null);
                    setLoading(true);
                    const results = await searchAnime(search);
                    onSearch(results);
                    setSearch('');
               }
          } catch (err) {
               setError('Oops! Couldn’t fetch anime. Please try again.');
          } finally {
               setLoading(false);
          }
     }

     // Animation logic: show only icon, expand input on hover/focus
     return (
          <form
               onSubmit={handleSearch}
               className="relative flex items-center w-fit"
          >
               <div
                    className={`
                         relative flex items-center
                         transition-all duration-300
                    `}
               >
                    {/* Animated container for icon + input */}
                    <div
                         className={`
                              flex items-center
                              bg-transparent
                              border-2 border-purple-200/50
                              rounded-full shadow-lg
                              transition-all duration-300
                              overflow-hidden
                              group
                              ${search.length > 0 ? 'w-64' : 'w-12'}
                              hover:w-64 focus-within:w-64
                         `}
                         style={{ minWidth: 0 }}
                    >
                         {/* Search icon inside bar */}
                         <span
                              className={`
                                   flex items-center justify-center
                                   transition-all duration-300
                                   ml-2
                                   ${search.length > 0 || document.activeElement === document.querySelector('input[type="text"]')
                                        ? 'opacity-100'
                                        : 'opacity-100'}
                              `}
                         >
                              <svg
                                   className="w-6 h-6 text-purple-500"
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
                         </span>
                         {/* Animated input */}
                         <input
                              type="text"
                              placeholder="Search for anime..."
                              value={search}
                              onChange={(e) => setSearch(e.target.value)}
                              className={`
                                   bg-transparent
                                   text-white
                                   pl-2 pr-4 py-3
                                   w-0 opacity-0 pointer-events-none
                                   transition-all duration-300
                                   focus:outline-none
                                   placeholder-transparent
                                   ${search.length > 0 ? 'w-52 opacity-100 pointer-events-auto' : ''}
                                   group-hover:w-52 group-hover:opacity-100 group-hover:pointer-events-auto
                                   group-focus-within:w-52 group-focus-within:opacity-100 group-focus-within:pointer-events-auto
                              `}
                              style={{
                                   minWidth: 0,
                              }}
                              onBlur={() => {
                                   if (!search) setSearch('');
                              }}
                         />
                    </div>
               </div>
               <div className="flex-grow flex flex-col justify-center w-full py-8">
                    {isLoading &&
                         <div className="flex justify-center items-center h-60">
                              <LoadingSpinner />
                         </div>}
                    {hasError && <p className="text-red-400">{hasError}</p>}
               </div>
          </form>
     )
}