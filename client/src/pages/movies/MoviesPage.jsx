import React, { useEffect, useState } from 'react'
import MyCarousel from '../../components/common/MyCarousel'
import SectionTitle from '../../components/common/SectionTitle'
import { POP_HERO_2, POP_MOVIES } from '../../constants'
import SectionSwiper from '../../components/common/SectionSwiper'
import { useDispatch, useSelector } from 'react-redux'
import { getAllMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '../../redux/actions/movieActions'
import axios from 'axios'

const MoviesPage = () => {
  const dispatch = useDispatch()
  const all = useSelector((state) => state.movies.all)
  const popular = useSelector((state) => state.movies.popular)
  const topRated = useSelector((state) => state.movies.topRated)
  const upcoming = useSelector((state) => state.movies.upcoming)
  const [movies, setMovies] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllMovies())
    dispatch(getPopularMovies())
    dispatch(getTopRatedMovies())
    dispatch(getUpcomingMovies())
  }, []);

  return (
    <div>
      <MyCarousel usedFor='movie' data={popular}/>
      <main className='container mx-auto px-4'>
        <section>
          <SectionTitle title="Popular Series" />
          <SectionSwiper data={popular} />
        </section>
        <section>
          <SectionTitle title="Top Rated Movies" />
          <SectionSwiper data={topRated} />
        </section>
        <section>
          <SectionTitle title="Upcoming" />
          <SectionSwiper data={upcoming} />
        </section>
        <section>
          <SectionTitle title="Discover Movies" />
          <SectionSwiper data={all} />
        </section>
      </main>
    </div>
  )
}

export default MoviesPage