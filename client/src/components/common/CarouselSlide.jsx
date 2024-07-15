import React from "react";
import CircularProgress from "./CircularProgress";
import { IconPlayerPlay } from "@tabler/icons-react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

const baseUrl = "https://image.tmdb.org/t/p/original";

const truncateDescription = (description, maxLength) => {
  if (description.length <= maxLength) {
    return description;
  }
  return description.substr(0, maxLength) + "...";
};

const CarouselSlide = ({ slide, usedFor }) => {
  const { backdrop_path, title, overview, vote_average, tags, name, id } = slide;

  const truncatedDescription = truncateDescription(overview, 100);

  return (
    <div
      className="relative bg-cover pt-14"
      style={{ backgroundImage: `url(${baseUrl}${backdrop_path})` }}
    >
      <div
        style={{
          backgroundImage: "linear-gradient(to top, #0C0C0C, rgba(0,0,0,0))",
        }}
        className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50"
      ></div>
      <div className="relative pt-28 lg:pt-44 px-[10%] min-h-[450px] lg:min-h-[700px]">
        <div className="flex flex-col gap-8 max-w-[480px]">
          <h1 className="text-5xl lg:text-7xl font-bold">{title || name}</h1>
          <div className="flex items-center w-[70px]">
            <CircularProgressbar
              value={vote_average.toFixed(1) * 10}
              text={`${vote_average.toFixed(1)}`}
              styles={buildStyles({
                strokeLinecap: "butt",
                textSize: "22px",
                // Colors
                pathColor: `#00d977`,
                textColor: "white",
                trailColor: "transparent",
              })}
            />
          </div>
          <p className="text-lg">{truncatedDescription}</p>
          <Link to={`/${usedFor === 'series' ? 'tv-series' : 'movie'}/${id}`}>
            <button className="button button-large w-fit flex items-center gap-2">
              <IconPlayerPlay />
              Watch Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlide;
