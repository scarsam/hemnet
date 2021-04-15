import React, { useState } from "react";
import {
  Search_searchMovieBy_movies,
  Search_searchMovieBy_config,
} from "../features/__generated__/Search";

const Card = ({
  movie,
  config,
}: {
  movie: Search_searchMovieBy_movies;
  config: Search_searchMovieBy_config;
}) => {
  const [isExpanded, setExpanded] = useState("");

  return (
    <div className="flex flex-col">
      <img
        className="p-5 z-10"
        alt={movie.title}
        src={`${config.baseUrl}/${config.backdropSizes[2]}/${movie.backdropPath}`}
      />
      <div className="bg-white -mt-10 pt-10 pl-5 pr-5 pb-5 h-full">
        <h1 className="text-xl">{movie.title}</h1>
        <ul className="flex justify-between py-2">
          <li className="p-1 bg-black text-white rounded-full px-5 text-sm">
            {movie.voteAverage}
          </li>
          <li className="p-1 bg-black text-white rounded-full px-5 text-sm">
            {movie.voteCount} votes
          </li>
          <li className="p-1 bg-black text-white rounded-full px-5 text-sm">
            {movie.releaseDate}
          </li>
        </ul>
        <p
          className={`collapse ${isExpanded}`}
          style={{
            WebkitTextFillColor: isExpanded ? "" : "transparent",
            WebkitBackgroundClip: "text",
          }}
        >
          {movie.overview}
        </p>
        <button onClick={() => setExpanded("expanded")}>Read more</button>
      </div>
    </div>
  );
};

export default Card;
