export const searchAnime = async (query) => {
    try {
        const res = await fetch(
            `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}`
        );
        if (!res.ok) throw new Error("Anime is not available");
        const json = await res.json();
        return json.data ?? null;
    } catch (err) {
        alert("Oops! Couldn't fetch anime. Please try again.");
        return null;
    }
};

export const animeDetail = async (id) => {
    try {
        const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        if (!res.ok) throw new Error("Anime detail is not available");
        const json = await res.json();
        return json.data ?? null;
    } catch (err) {
        alert("Oops! Couldn't fetch anime details. Please try again.");
        return null;
    }
};

export const animeCharacters = async (id) => {
    try {
        const res = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
        if (!res.ok) throw new Error("Character data is not available");
        const json = await res.json();
        return json.data ?? null;
    } catch (err) {
        alert("Oops! Couldn't fetch anime characters. Please try again.");
        return null;
    }
};

export const animeTop = async () => {
    try {
        const res = await fetch(`https://api.jikan.moe/v4/top/anime`);
        if (!res.ok) throw new Error("Recommendations are not available");
        const json = await res.json();
        return json.data ?? null;
    } catch (err) {
        alert("Oops, no recommendations available.");
        return null;
    }
};
