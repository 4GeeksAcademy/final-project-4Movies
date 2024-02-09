import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const MultiCard = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      {/* Map through the actors data and render a card for each actor */}
      {store.multiSearchResult.map((multi, index) => {
        return (
          <div key={index} className="col">
            <div className="card bg-dark text-light me-2">
              <img
                src={`${process.env.API_IMAGES}/${
                  multi.profile_path || multi.backdrop_path || multi.poster_path
                }`}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400x500";
                }}
                style={{
                  maxHeight: "500px",
                  maxWidth: "400px",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                className="card-img-top"
                alt="image"
              />
              <div className="card-body">
                <h5 className="card-title">{multi.name || multi.title}</h5>
                <div className="d-flex">
                  {/* Check if the item is an actor or a movie and redirect accordingly */}
                  {multi.profile_path ? (
                    <Link
                      to={`/actorDetails/${multi.id}`}
                      className="btn btn-dark btn-no-border mt-3"
                      style={{ marginRight: "140px", width: "36px" }}
                      title="More information"
                    >
                      <i className="fa-solid fa-arrow-down"></i>
                    </Link>
                  ) : (
                    <Link
                      to={`/movieDetails/${multi.id}`}
                      className="btn btn-dark btn-no-border mt-3"
                      style={{ marginRight: "140px", width: "36px" }}
                      title="More information"
                    >
                      <i className="fa-solid fa-arrow-down"></i>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
