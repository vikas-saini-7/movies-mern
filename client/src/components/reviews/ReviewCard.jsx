import { IconUser } from "@tabler/icons-react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const baseUrl = "https://image.tmdb.org/t/p/original";

const ReviewCard = ({ data }) => {
  const { itemId, itemType, text, user } = data;
  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    if (!itemId) {
      console.error("User ID is undefined");
      return;
    }
    try {
      const API_KEY = "03b6ee421e966831a5e3d3ff0d65eede";
      const response = await axios.get(
        `https://api.themoviedb.org/3/${
          itemType === "movie" ? "movie" : "tv"
        }/${itemId}?api_key=${API_KEY}&language=en-US`
      );
      console.log("Item: ", response.data);
      setItem(response.data);
      // setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      // setLoading(false);
    }
  };
  useEffect(() => {
    if (itemId) {
      fetchItem();
    }
  }, [itemId]);
  return (
    <div className="mb-4 rounded-xl bg-gray-500/10 px-8 py-6 flex gap-4">
      <img
        className="object-contain w-[80px] lg:w-[120px]"
        src={baseUrl + item?.poster_path}
        alt={item?.title}
      />
      <div>
        <div className="flex gap-1 text-xs uppercase mb-2">
          <p>{itemType} id:</p>
          <p>{itemId}</p>
        </div>
        <p className="font-semibold">{item?.title || item?.name}</p>
        <p className="">" {text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
