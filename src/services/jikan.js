export const searchAnime = async (query) => {
    try {
        const res = await fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}`);
        if (!res.ok) throw new Error("Anime is not available");
        const title = await res.json();
        return title.data;
    } catch (err) {
        alert('Oops! Couldn’t fetch anime. Please try again.')
    }
}

export const animeDetail = async (id) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
    if (!res.ok) throw new Error("Anime detail is not available");
    const animeDetail = await res.json();
    return animeDetail.data;
}

export const animeCharacters = async (id) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
    if (!res.ok) throw new Error("Character data is not available");
    const characters = await res.json();
    return characters.data;
}

export const animeEpisodes = async (id) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/episodes`);
    if (!res.ok) throw new Error('Episodes unavailable');
    const episodes = await res.json();
    return episodes.data;
}

export const animeTop = async (id) => {
    try {
        const res = await fetch(`https://api.jikan.moe/v4/top/anime`);
        if (!res.ok) throw new Error('Recommendations are not available');
        const topAnime = await res.json();
        return topAnime.data;
    } catch (err) {
        alert("Oops, no recommendations available.")
    }
}