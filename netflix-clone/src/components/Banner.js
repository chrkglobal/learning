import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovie() {
      const res = await axios.get(fetchUrl);
      const results = res.data.results || res.data;
      setMovie(results[Math.floor(Math.random() * results.length)]);
    }
    getMovie();
  }, [fetchUrl]);

  return (
    <header
      className="relative h-[70vh] text-white flex flex-col justify-end p-8"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="bg-gradient-to-t from-black via-transparent absolute inset-0"></div>
      <div className="relative z-10 max-w-xl">
        <h1 className="text-4xl font-bold mb-4">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className="mb-4 text-sm line-clamp-3">
          {movie?.overview}
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-300">
            ▶ Play
          </button>
          <button className="bg-gray-700 bg-opacity-70 px-4 py-2 rounded font-semibold hover:bg-gray-600">
            + My List
          </button>
        </div>
      </div>
    </header>
  );
}
