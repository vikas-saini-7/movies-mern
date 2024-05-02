import React from 'react'
import MyCarousel from '../../components/common/MyCarousel'
import SectionTitle from '../../components/common/SectionTitle'
import SectionSwiper from '../../components/common/SectionSwiper'
import { POP_MOVIES } from '../../constants'

const MoviesPage = () => {
  return (
    <div>
        <MyCarousel/>
        <main className='container mx-auto px-4'>
          <section>
            <SectionTitle title="Popular Movies" />
            <SectionSwiper data={POP_MOVIES} />
          </section>
          <section>
            <SectionTitle title="Popular Series" />
            <SectionSwiper data={POP_MOVIES} />
          </section>
          <section>
            <SectionTitle title="Top Rated Movies" />
            <SectionSwiper data={POP_MOVIES} />
          </section>
          <section>
            <SectionTitle title="Top Rated Movies" />
            <SectionSwiper data={POP_MOVIES} />
          </section>
        </main>
    </div>
  )
}

export default MoviesPage