import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IconPlayerPlay, IconUser } from "@tabler/icons-react";
import SectionTitle from "../../components/common/SectionTitle";
import SectionSwiper from "../../components/common/SectionSwiper";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import toast from "react-hot-toast";

const baseUrl = "https://image.tmdb.org/t/p/original";

const MovieDetailsPage = () => {
  const user = useSelector((state) => state.auth.user._id);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();
  const [addCommentText, setAddCommentText] = useState();
  const [loading, setLoading] = useState(true);

  // add review
  const [showCommentBox, setShowCommentBox] = useState(false);
  const handleAddReviewClick = () => {
    setShowCommentBox(!showCommentBox);
  };

  const fetchMovie = async () => {
    try {
      const API_KEY = "03b6ee421e966831a5e3d3ff0d65eede";
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      console.log(response.data);
      setMovie(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const fetchReviews = async () => {
    if (!id) {
      console.error("User ID is undefined");
      return;
    }
    try {
      const response = await axios.get(
        `http://localhost:9000/api/comment/movie/${id}`
      );
      console.log("Comments: ", response.data.results);
      setReviews(response.data.results);
      // setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      // setLoading(false);
    }
  };

  const postComment = async () => {
    try {
      if (!addCommentText) {
        toast.error("Comment cannot be empty");
        return;
      }
      const response = await axios.post(`http://localhost:9000/api/comment`, {
        user: user,
        text: addCommentText,
        itemType: "movie",
        itemId: id,
      });
      console.log("Post Comment: ", response.data.results);
      fetchReviews();
      toast.success("Comment added successfully");
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Error posting comment");
    }
  };

  useEffect(() => {
    fetchMovie();
    if (id) {
      fetchReviews();
    }
  }, [id]);

  return (
    <div className="">
      {loading ? (
        <div className="text-center pt-48 min-h-[70vh]">Loading...</div>
      ) : (
        <>
          <div
            className="relative bg-cover pt-0"
            style={{
              backgroundImage: `url(${baseUrl}${movie?.backdrop_path})`,
            }}
          >
            <div
              style={{
                backgroundImage:
                  "linear-gradient(to top, #0C0C0C, rgba(0,0,0,0))",
              }}
              className="absolute backdrop-blur-sm top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50"
            ></div>
            <div className="relative pt-28 lg:pt-28 px-[10%] md:px-[4%] lg:px-[10%] min-h-[450px] lg:min-h-[700px]  container mx-auto">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <img
                  className="object-contain w-full md:w-[320px] lg:w-[380px]"
                  src={baseUrl + movie?.poster_path}
                  alt=""
                />
                <div className="flex flex-col gap-8 max-w-[900px]">
                  <h1 className="text-5xl lg:text-7xl font-bold">
                    {movie?.title}
                  </h1>
                  <div className="flex items-center w-[70px]">
                    <CircularProgressbar
                      value={movie?.vote_average.toFixed(1) * 10}
                      text={`${movie?.vote_average.toFixed(1)}`}
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
                  <div className="flex flex-wrap gap-4">
                    {movie?.genres?.slice(0, 3).map((item) => (
                      <p className=" px-6 py-2 bg-primary rounded-full backdrop-blur-md">
                        {item?.name}
                      </p>
                    ))}
                  </div>
                  <p className="text-lg mb-8">{movie?.overview}</p>
                </div>
              </div>
            </div>
          </div>
          <main className="container mx-auto px-8">
            {movie?.images && (
              <>
                <section>
                  <SectionTitle title={"Screenshots"} />
                  <Swiper
                    spaceBetween={0}
                    slidesPerView={2}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    {movie?.images?.backdrops.map((item) => (
                      <SwiperSlide>
                        <img src={baseUrl + item?.file_path} alt="" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </section>
              </>
            )}
            <section>
              <SectionTitle title={`Comments (${reviews?.length || 0})`} />
              <div className="px-4">
                {reviews?.map((item) => (
                  <div className="flex gap-2 mb-8">
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
                      alt=""
                    />
                    <div>
                      <h2 className="font-semibold">{item.user.name}</h2>
                      <p className="text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            {/* Add review */}
            {isAuthenticated && (
              <>
                {!showCommentBox && (
                  <button
                    onClick={handleAddReviewClick}
                    className="btn btn-primary"
                  >
                    Add Comment
                  </button>
                )}
                {showCommentBox && (
                  <div className="mt-4 text-black">
                    <textarea
                      className="w-full p-2 border rounded"
                      placeholder="Write your review here..."
                      onChange={(e) => setAddCommentText(e.target.value)}
                    ></textarea>
                    <button
                      onClick={postComment}
                      className="btn btn-secondary mt-2"
                    >
                      Submit
                    </button>
                  </div>
                )}
              </>
            )}
            {movie?.recommend && (
              <section>
                <SectionTitle title={"You may also like"} />
                <SectionSwiper data={movie?.recommend || []} />
              </section>
            )}
          </main>
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
