import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "../components/common/Header";
import HomePage from "../pages/home/HomePage";
import MoviesPage from "../pages/movies/MoviesPage";
import TvSeriesPage from "../pages/tv-series/TvSeriesPage";
import SearchPage from "../pages/search/SearchPage";
import MovieDetailsPage from "../pages/movies/MovieDetailsPage";
import Footer from "../components/common/Footer";
import { useSelector } from "react-redux";
import SettingsPage from "../pages/settings/SettingsPage";
import ProfilePage from "../pages/profile/ProfilePage";
import ReviewsPage from "../pages/reviews/ReviewsPage";
import TvSeriesDetailsPage from "../pages/tv-series/TvSeriesDetailsPage";

const MainRouter = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />} />
          <Route path="/tv-series" element={<TvSeriesPage />} />
          <Route path="/tv-series/:id" element={<TvSeriesDetailsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element="not found" />
          {isAuthenticated && (
            <>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </>
          )}
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster />
    </div>
  );
};

export default MainRouter;
