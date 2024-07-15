import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

const baseUrl = "https://image.tmdb.org/t/p/w500/";

const SectionSwiper = ({ data, usedFor }) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
      }}
    >
      {data.map((item) => (
        <>
          {item.poster_path && (
            <SwiperSlide className="relative group" key={item.id}>
              <div
                className="h-[400px] lg:h-[480px] bg-cover"
                style={{
                  backgroundImage: `url(${baseUrl}${item?.poster_path})`,
                  backgroundOrigin: "center",
                }}
              ></div>
              <div className="bg-gradient-to-t bg-opacity-10 from-black via-transparent to-transparent absolute w-full h-full flex flex-col justify-end px-4 py-4 bottom-0 md:-bottom-32 left-0 group-hover:bottom-0 transition-all duration-300">
                <p className="text-lg">{item?.release_date?.split("-")[0]}</p>
                <p className="font-bold">{item?.title}</p>
              </div>
              <div className="flex transition-all duration-300 absolute top-0 left-0 opacity-0 group-hover:opacity-100 flex-col text-center items-center justify-center w-full h-full">
                <Link
                  to={`/${usedFor === "series" ? "tv-series" : "movies"}/${
                    item.id
                  }`}
                >
                  <div className="relative px-6 py-2 bg-primary rounded-lg -mt-8">
                    <IconPlayerPlayFilled size={18} />
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          )}
        </>
      ))}
    </Swiper>
  );
};

export default SectionSwiper;
