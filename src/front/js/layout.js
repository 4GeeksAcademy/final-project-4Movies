import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { CardPeliculas } from "./component/CardPeliculas";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CardActores } from "./component/CardActores";
import { MultiCard } from "./component/MultiCard";
import { PersonalList } from "./component/PersonalList";
import { Movies } from "./component/Movies";
import { Genres } from "./component/Genres";
import { FilteredMovies } from "./component/FilteredMovies";
import { MovieReviewForm } from "./component/movieReviewForm";
import { EditUserProfile } from "./component/profile/editUserProfile";

import { Home } from "./pages/home";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { ResetPassword } from "./pages/ResetPassword";
import { PagesPeliculas } from "./pages/PagesPeliculas";
import { Support } from "./pages/Support";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ActorDetails } from "./pages/ActorDetails";
import injectContext from "./store/appContext";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Movies />} path="/movies" />{" "}
            <Route element={<MultiCard />} path="/multiresults" />
            <Route element={<CardPeliculas />} path="/movieresults" />
            <Route element={<PagesPeliculas />} path="/moviedetails/:id" />
            <Route element={<PersonalList />} path="/personallist" />
            <Route element={<EditUserProfile />} path="/editProfile" />
            <Route element={<MovieReviewForm />} path="/reviewForm" />
            <Route element={<Genres />} path="/genres" />
            <Route element={<FilteredMovies />} path="/filteredMovies" />
            <Route element={<ActorDetails />} path="/actorDetails/:id" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Login />} path="/login" />
            <Route element={<Profile />} path="/profile" />
            <Route element={<ForgotPassword />} path="/forgotpassword" />
            <Route element={<ResetPassword />} path="/passwordreset" />
            <Route element={<Support />} path="/support" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
