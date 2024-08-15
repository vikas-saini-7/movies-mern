import { IconUser, IconUserCircle } from "@tabler/icons-react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReviewCard from "../../components/reviews/ReviewCard";

const ReviewsPage = () => {
  const [movieReviews, setMovieReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = useSelector((state) => state.auth.user._id);

  const fetchMovieReviews = async () => {
    if (!userId) {
      console.error("User ID is undefined");
      return;
    }
    try {
      const response = await axios.get(
        `http://localhost:9000/api/comment/${userId}`
      );
      console.log("Comments: ", response.data.results);
      setMovieReviews(response.data.results);
      // setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      // setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchMovieReviews();
    }
  }, [userId]);
  return (
    <div className="container mx-auto px-4 pt-20 min-h-[500px] max-w-[900px]">
      {/* <h1 className="text-xl font-semibold mt-4">Your Reviews</h1> */}
      {movieReviews.map((item) => (
        <ReviewCard fetchMovieReviews={fetchMovieReviews} data={item} />
      ))}
    </div>
  );
};

export default ReviewsPage;
