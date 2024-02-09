import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const PagesPeliculas = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    // Fetch movie details based on movieId
    actions.getMovieDetailsByID(id);
    actions.getTrailer(id);
  }, [id]);

  return (
    <main>
      <div className="container-fluid pb-5">
        {store.movie && (
          <div
            className="card mb-5 "
            style={{
              height: "800px",
              backgroundColor: "transparent",
              maxWidth: "800px",
              margin: "0 auto",
              border: "none",
            }}
          >
            <div className="row g-0">
              <div className="col-md container text-center">
                <img
                  src={`${process.env.API_IMAGES}/${store.movie.backdrop_path}`}
                  style={{ width: "100%", height: "30%" }}
                  className="img-fluid mx-auto my-auto"
                  alt="..."
                />
                <div
                  className="container"
                  style={{
                    backgroundColor: "transparent",
                    height: "800px",
                    width: "700px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <h1
                    className="card-title"
                    style={{
                      marginTop: "2%",
                      color: "white",
                      fontFamily: "Poppins, Work Sans",
                    }}
                  >
                    {store.movie.title}
                  </h1>

                  <span
                    className="card-text"
                    style={{
                      color: "#858584",
                      fontSize: "small",
                      fontFamily: "Body Text, Work Sans",
                    }}
                  >
                    {store.movie.production_companies &&
                      store.movie.production_companies.map((company) => (
                        <span key={company.id}>{company.name}</span>
                      ))}
                  </span>

                  <p
                    className="card-text"
                    style={{ marginTop: "4%", marginBottom: "0" }}
                  >
                    Productores
                  </p>
                  <p
                    className="text-light"
                    style={{ fontFamily: "Poppins, Work Sans" }}
                  >
                    {store.movie.production_companies &&
                      store.movie.production_companies.map((company, index) => (
                        <>
                          <span key={index}>{company.name}</span>
                          <br />
                        </>
                      ))}
                  </p>

                  <p
                    className="card-text"
                    style={{ marginTop: "4%", marginBottom: "0" }}
                  >
                    Descripción
                  </p>
                  <p className="text-light" style={{ fontFamily: "Work Sans" }}>
                    {store.movie.overview}
                  </p>

                  <p
                    className="card-text"
                    style={{ marginTop: "20px", marginBottom: "0" }}
                  >
                    Trailer
                  </p>
                  <div
                    className="text-light"
                    style={{ fontFamily: "Work Sans" }}
                  >
                    {store.trailer &&
                      store.trailer.results &&
                      store.trailer.results.length > 0 && (
                        <iframe
                          width="560"
                          height="315"
                          src={`https://www.youtube.com/embed/${store.trailer.results[0].key}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      )}
                  </div>

                  <p
                    className="card-text"
                    style={{
                      marginTop: "20px",
                      marginBottom: "5px",
                      fontFamily: "Work Sans",
                    }}
                  >
                    Tags
                  </p>
                  <div className="d-flex">
                    {store.movie.genres &&
                      store.movie.genres.map((genre, index) => (
                        <div
                          className="rounded-container me-2"
                          style={{ fontFamily: "Poppins, Work Sans" }}
                        >
                          <div
                            className="rounded-content text-light"
                            style={{ fontFamily: "Poppins, Work Sans" }}
                          >
                            <span key={index}>{genre.name}</span>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </main>
  );
};
