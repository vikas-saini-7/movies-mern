import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyCarousel from '../../components/common/MyCarousel';
import SectionTitle from '../../components/common/SectionTitle';
import SectionSwiper from '../../components/common/SectionSwiper';
import { getAllSeries, getPopularSeries, getTopRatedSeries, getUpcomingSeries } from '../../redux/actions/seriesActions';
import { POP_HERO_2 } from '../../constants';

const TvSeriesPage = () => {
  const dispatch = useDispatch();
  const all = useSelector((state) => state.series.all);
  const popular = useSelector((state) => state.series.popular);
  const topRated = useSelector((state) => state.series.topRated);
  const upcoming = useSelector((state) => state.series.upcoming);

  useEffect(() => {
    dispatch(getAllSeries());
    dispatch(getPopularSeries());
    dispatch(getTopRatedSeries());
    dispatch(getUpcomingSeries());
  }, [dispatch]);

  return (
    <div>
      <MyCarousel usedFor={'series'} data={popular} />
      <main className='container mx-auto px-4'>
        <section>
          <SectionTitle title="Popular Series" />
          <SectionSwiper usedFor={'series'} data={popular} />
        </section>
        <section>
          <SectionTitle title="Top Rated Series" />
          <SectionSwiper usedFor={'series'} data={topRated} />
        </section>
        <section>
          <SectionTitle title="Upcoming Series" />
          <SectionSwiper usedFor={'series'} data={upcoming} />
        </section>
        <section>
          <SectionTitle title="Discover Series" />
          <SectionSwiper usedFor={'series'} data={all} />
        </section>
      </main>
    </div>
  );
}

export default TvSeriesPage;
