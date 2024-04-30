import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from '../components/common/Header'
import HomePage from '../pages/home/HomePage'
import MoviesPage from '../pages/movies/MoviesPage'
import TvSeriesPage from '../pages/tv-series/TvSeriesPage'
import SearchPage from '../pages/search/SearchPage'
import MovieDetailsPage from '../pages/movies/MovieDetailsPage'

const MainRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          <Route path='/movies' element={<MoviesPage/>}/>
          <Route path='/movie/:id' element={<MovieDetailsPage/>}/>
          <Route path='/tv-series' element={<TvSeriesPage/>}/>
          <Route path='/search' element={<SearchPage/>}/>
          <Route path='*' element='not found'/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MainRouter