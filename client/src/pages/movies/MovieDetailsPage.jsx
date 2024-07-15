import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IconPlayerPlay, IconUser } from "@tabler/icons-react";
import SectionTitle from "../../components/common/SectionTitle";
import SectionSwiper from "../../components/common/SectionSwiper";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const baseUrl = "https://image.tmdb.org/t/p/original";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();
  const [loading, setLoading] = useState(true);

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
            <div className="relative pt-28 lg:pt-44 px-[10%] min-h-[450px] lg:min-h-[700px]  container mx-auto">
              <div className="flex gap-12 items-start">
                <img
                  className="object-contain w-[320px] lg:w-[380px]"
                  src={baseUrl + movie?.poster_path}
                  alt=""
                />
                <div className="flex flex-col gap-8 max-w-[900px]">
                  <h1 className="text-5xl lg:text-7xl font-bold">
                    {movie?.title}
                  </h1>
                  {/* <div className='flex items-center'>
                <p className='w-12 h-12 flex items-center justify-center mr-2 text-lg font-bold'>{vote_average}</p>
              </div> */}
                  <p className="text-lg">{movie?.overview}</p>
                  <div className="flex items-center gap-4">
                    <button className="button button-large w-fit flex items-center gap-2">
                      {" "}
                      <IconPlayerPlay /> Watch Now
                    </button>
                    <button className="button button-large w-fit flex items-center gap-2">
                      {" "}
                      <IconPlayerPlay /> Watch Trailer
                    </button>
                  </div>
                  <SectionTitle title={"cast"} className="mt-4 mb-2" />
                  <div className="flex gap-4">
                    {/* {movie?.credits?.cast.slice(0, 3).map((item) => (
                  <div className='relative'>
                    <img className='w-32 h-44 object-cover' src={baseUrl+item?.profile_path} alt="" />
                    <p className='absolute bottom-0 left-0 px-2 py-2 bg-black bg-opacity-50 w-full text-sm'>{item?.name}</p>
                  </div>
                ))} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <main className="container mx-auto px-8">
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
            <section>
              <SectionTitle title={`Reviews (${reviews?.length || 0})`} />
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
            <section>
              <SectionTitle title={"You may also like"} />
              {/* <SectionSwiper data={movie?.recommend} /> */}
            </section>
          </main>
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
