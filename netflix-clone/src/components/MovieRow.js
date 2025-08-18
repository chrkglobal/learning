import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";

export default function MovieRow({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(fetchUrl);
      setMovies(res.data.results || res.data); // handles API structure
    }
    getData();
  }, [fetchUrl]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
  };

  return (
    <div className="movie-row">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <Slider {...settings}>
        {movies.map((movie) => (
          <div key={movie.id} className="p-2">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
