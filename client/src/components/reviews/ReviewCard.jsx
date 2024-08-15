import { IconUser } from "@tabler/icons-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const baseUrl = "https://image.tmdb.org/t/p/original";

const ReviewCard = ({ data, fetchMovieReviews }) => {
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

  const handleDeleteComment = async () => {
    try {
      console.log("some", data._id);
      const response = await axios.delete(
        `https://darkflix-backend.onrender.com/api/comment/${data._id}`
      );
      if (response.status === 200) {
        console.log("Comment deleted successfully");
        toast.success("Comment deleted successfully");
        fetchMovieReviews();
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
      toast.error("Error deleting comment");
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
        <button onClick={handleDeleteComment} className="text-sm text-red-500">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
