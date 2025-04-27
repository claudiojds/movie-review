import httpInstance from "../instace/client";

const OMDB_KEY = process.env.NEXT_PUBLIC_OMDB_KEY;

export const getMovieByTitle = async (title: string) => {
    const res = await httpInstance.get(
       `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${OMDB_KEY}` 
    );
    return res.data;
};