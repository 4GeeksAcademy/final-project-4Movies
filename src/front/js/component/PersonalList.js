import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { CardPeliculas } from "./CardPeliculas";

export const PersonalList = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    async function fetchMovies() {
      if (await actions.getPersonalMovies()) {
        // Implementar loop o promise all
        await actions.getMovieDetails(store.personalMovies);
      }
    }
    fetchMovies();
  }, []); // Run effect whenever personalMovies changes

  return (
    <div className="pt-2" style={{ backgroundColor: "#3B3B3B" }}>
      <div className="row pb-3">
        {store.favoriteMovies.map((movie_id, index) => (
          <div key={index} className="col-md-3">
            <CardPeliculas movie={movie_id} />
          </div>
        ))}
      </div>
    </div>
  );
};
