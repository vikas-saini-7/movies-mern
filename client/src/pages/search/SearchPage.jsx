import React, { useEffect, useState } from "react";
import { POP_MOVIES } from "../../constants";
import { Link } from "react-router-dom";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "../../redux/actions/searchActions";
import { setQuery } from "../../redux/reducres/searchReducer";

const baseUrl = "https://image.tmdb.org/t/p/w500/";

const SearchPage = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const loading = useSelector((state) => state.search.loading);
  const results = useSelector((state) => state.search.results);

  const [activeItem, setActiveItem] = useState("Movie");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      dispatch(searchMovies(query));
    }
  };

  return (
    <div className="container mx-auto px-4 pt-14">
      <div className="flex items-center justify-center gap-4 uppercase mt-8">
        <p
          className={`cursor-pointer px-4 py-2 rounded ${
            activeItem === "Movie" ? "bg-primary bg-opacity-20" : ""
          }`}
          onClick={() => handleItemClick("Movie")}
        >
          Movie
        </p>
        <p
          className={`cursor-pointer px-4 py-2 rounded ${
            activeItem === "Tv" ? "bg-primary bg-opacity-20" : ""
          }`}
          onClick={() => handleItemClick("Tv")}
        >
          Tv
        </p>
        <p
          className={`cursor-pointer px-4 py-2 rounded ${
            activeItem === "People" ? "bg-primary bg-opacity-20" : ""
          }`}
          onClick={() => handleItemClick("People")}
        >
          People
        </p>
      </div>
      <div className="mb-8 mt-8">
        <input
          className="border bg-transparent border-gray-500 border-opacity-20 w-full h-[50px] rounded-lg px-4 text-lg"
          type="text"
          placeholder="Search DarkFlix"
          onChange={(e) => dispatch(setQuery(e.target.value))}
        />
      </div>
      <h1 className="text-center text-3xl">Designing soon...</h1>
    </div>
  );
};

export default SearchPage;
