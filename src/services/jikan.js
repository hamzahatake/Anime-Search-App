export const searchAnime = async (query) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`);
    if (!res.ok) throw new Error("Anime is not available");
    const data = await res.json();
    const title = data.title_english || data.title
    return title;
}

export const animeDetail = async (id) => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${id}`);
    if (!res.ok) throw new Error("Anime detail is not available");
    const data = await res.json();
    const anime_Info = data.moreinfo;
    return anime_Info;
}