import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { IconPlayerPlay, IconUser } from '@tabler/icons-react';
import SectionTitle from '../../components/common/SectionTitle';
import SectionSwiper from '../../components/common/SectionSwiper';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const baseUrl ='https://image.tmdb.org/t/p/original'

const TvSeriesDetailsPage = () => {

  const {id} = useParams();
  const [series, setSeries] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const API_KEY = '03b6ee421e966831a5e3d3ff0d65eede'
        const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`);
        console.log(response.data)
        setSeries(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchSeries();
  }, []);
  return (
    <div className=''>
      <div className='relative bg-cover pt-0' style={{backgroundImage:`url(${baseUrl}${series?.backdrop_path})`}}>
        <div style={{backgroundImage: "linear-gradient(to top, #0C0C0C, rgba(0,0,0,0))"}} className='absolute backdrop-blur-sm top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50'></div>
        <div className='relative pt-28 lg:pt-44 px-[10%] min-h-[450px] lg:min-h-[700px]'>
          <div className='flex gap-12 items-start'>
            <img className='object-contain w-[320px] lg:w-[380px]' src={baseUrl+series?.poster_path} alt="" />
            <div className='flex flex-col gap-8 max-w-[900px]'>
              <h1 className='text-5xl lg:text-7xl font-bold'>{series?.name}</h1>
              {/* <div className='flex items-center'>
                <p className='w-12 h-12 flex items-center justify-center mr-2 text-lg font-bold'>{vote_average}</p>
              </div> */}
              <p className='text-lg'>{series?.overview}</p>
              <div className='flex items-center gap-4'>
                <button className='button button-large w-fit flex items-center gap-2'> <IconPlayerPlay/> Watch Now</button>
                <button className='button button-large w-fit flex items-center gap-2'> <IconPlayerPlay/> Watch Trailer</button>
              </div>
              <SectionTitle title={'cast'} className="mt-4 mb-2"/>
              <div className='flex gap-4'>
                {/* {series?.credits?.cast.slice(0, 3).map((item) => (
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
      <main className='container mx-auto'>
        <section>
          <SectionTitle title={"Screenshots"} />
          <Swiper
            spaceBetween={0}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {/* {series?.images?.backdrops.map((item) => (
              <SwiperSlide>
                <img src={baseUrl+item?.file_path} alt="" />
              </SwiperSlide>
            ))} */}
          </Swiper>
        </section>
        <section>
          <SectionTitle title={`Reviews (${series?.reviews?.length})`} />
          <div className='px-4'>
            {/* {series?.reviews.map((item) => (
              <div className='mb-8'>
                <div className='flex items-center gap-2'>
                  <div className='w-10 h-10 bg-gray-500 bg-opacity-20 rounded-full flex items-center justify-center'>
                    {item?.user?.displayName.charAt(0)}
                  </div>
                  <div className=''>
                    <p>{item?.user?.displayName}</p>
                    <p className='text-xs text-gray-500'>{item?.updatedAt.split('T')[0]}</p>
                  </div>
                </div>
                <div className='ml-12 text-xl'>{item?.content}</div>
              </div>
            ))} */}
          </div>
        </section>
        <section>
          <SectionTitle title={"You may also like"}/>
          {/* <SectionSwiper data={series?.recommend} /> */}
        </section>
      </main>
    </div>
  )
}

export default TvSeriesDetailsPage