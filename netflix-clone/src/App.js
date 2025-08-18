import React from "react";
import MovieRow from "./components/MovieRow";
import Banner from "./components/Banner";

const API_KEY = "your_api_key_here";
const requests = {
  trending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`,
  action: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
};

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Banner */}
      <Banner fetchUrl={requests.trending} />

      {/* Movie Rows */}
      <div className="p-4">
        <MovieRow title="Trending Now" fetchUrl={requests.trending} />
        <MovieRow title="Action Movies" fetchUrl={requests.action} />
        <MovieRow title="Comedy Movies" fetchUrl={requests.comedy} />
      </div>
    </div>
  );
}

export default App;
