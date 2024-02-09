import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Genres = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    actions.getGenres();
  }, []);

  // Function to fetch movies by genre
  const handleGetMoviesByGenre = async (genreId) => {
    try {
      await actions.getMoviesByGenre(genreId);
      navigate("/filteredMovies");
    } catch (error) {
      console.error("Error fetching movies by genre:", error);
    }
  };

  // Function to chunk array into smaller arrays
  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, index * size + size)
    );
  };

  return (
    <div className="pt-2" style={{ backgroundColor: "#3B3B3B" }}>
      {chunkArray(store.genres, 6).map((row, rowIndex) => (
        <div key={rowIndex} className="row pb-3">
          {row.map((genre, index) => (
            <div key={index} className="col-md-2">
              {/* Render a button for each genre */}
              <button
                className="btn btn-primary w-100"
                onClick={() => handleGetMoviesByGenre(genre.id)}
              >
                {genre.name}
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
