import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    // if [], run once when the row loads and don't run again

    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movie);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/* row__posters */}

        {movie.map((movie) => (
          <img
            key={movie.id}
            className="row__poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* container - poster */}
    </div>
  );
}

export default Row;
