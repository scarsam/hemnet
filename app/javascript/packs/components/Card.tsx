import React, { useState } from "react";
import {
  Search_searchMovieBy_movies,
  Search_searchMovieBy_config,
} from "../features/__generated__/Search";
import Pill from "./Pill";
import Button from "./Button";
import Star from "images/star.svg";

interface ICard {
  movie: Search_searchMovieBy_movies;
  config: Search_searchMovieBy_config;
}

const Card: React.VFC<ICard> = ({ movie, config }) => {
  const [isExpanded, setExpanded] = useState(false);
  const imagePath = `${config.baseUrl}/${config.backdropSizes[2]}/${movie.backdropPath}`;

  if (imagePath.includes("null")) return null;

  return (
    <div className="flex flex-col">
      <div className="p-5 z-10">
        {!imagePath.includes("null") && (
          <img
            className="rounded-md shadow-md"
            alt={movie.title}
            src={imagePath}
          />
        )}
      </div>
      <div className="bg-white -mt-10 pt-10 pl-5 pr-5 pb-5 h-full rounded-md">
        <h1 className="text-xl">{movie.title}</h1>
        <ul className="flex py-2 flex-wrap">
          <Pill>
            <div className="flex">
              <img className="mr-1" src={Star} alt="rating" />
              {movie.voteAverage}
            </div>
          </Pill>
          <span className="mx-2">
            <Pill>{movie.voteCount} votes</Pill>
          </span>
          <Pill>{movie.releaseDate}</Pill>
        </ul>
        <p
          className={`collapse ${isExpanded ? "expanded" : ""}`}
          style={{
            WebkitTextFillColor: isExpanded ? "" : "transparent",
            WebkitBackgroundClip: "text",
          }}
        >
          {movie.overview}
        </p>
        <Button
          variant="small"
          handleClick={() => setExpanded((expanded) => !expanded)}
        >
          {isExpanded ? "Show less" : "Read more"}
        </Button>
      </div>
    </div>
  );
};

export default Card;
