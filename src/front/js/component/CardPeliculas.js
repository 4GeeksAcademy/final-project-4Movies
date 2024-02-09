import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const CardPeliculas = ({ movie }) => {
  const { store, actions } = useContext(Context);

  // Check if the movie is in the personal list
  const isInPersonalList = store.personalMovies.includes(movie.id);

  // Function to handle adding or removing from personal list
  const handleTogglePersonalList = () => {
    if (isInPersonalList) {
      // If the movie is already in the personal list, remove it
      actions.removePersonalMovie(movie.id);
    } else {
      // If the movie is not in the personal list, add it
      actions.addPersonalMovie(movie.id);
    }
  };

  return (
    <div
      className="container-fliud d-flex"
      style={{ backgroundColor: "#3B3B3B" }}
    >
      <div
        className="card text-light rounded-lg"
        style={{
          width: "18rem",
          backgroundColor: "#2B2B2B",
          borderRadius: "15px",
          marginLeft: "20px",
        }}
      >
        {/* Contenido de la tarjeta */}
        <img
          src={`${process.env.API_IMAGES}/${movie.poster_path}`} // Use movie data instead of hardcoded image URL
          className="card-img-top"
          style={{
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
          }}
          alt="..."
        />
        <div className="card-body">
          <h5
            className="card-title"
            style={{ fontFamily: "Poppins, Work Sans" }}
          >
            Título: {movie.title}
          </h5>
          <p
            className="card-title"
            style={{ fontFamily: "Poppins, Work Sans" }}
          >
            {" "}
            Valoracion: {movie.vote_average}{" "}
          </p>
          <div className="col-md d-flex justify-content-end">
            <Link
              to={`/movieDetails/${movie.id}`}
              className="btn btn-dark btn-no-border mt-3"
              style={{ marginRight: "140px", width: "36px" }}
              title="Más información"
            >
              <i className="fa-solid fa-arrow-down"></i>
            </Link>
            {/* Toggle button based on whether the movie is in the personal list */}
            {isInPersonalList ? (
              <button
                className="btn btn-sm btn-danger border-0 mt-3"
                onClick={handleTogglePersonalList}
              >
                - Remove from List
              </button>
            ) : (
              <button
                className="btn btn-sm btn-custom-purple border-0 mt-3"
                onClick={handleTogglePersonalList}
              >
                + Add to List
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
