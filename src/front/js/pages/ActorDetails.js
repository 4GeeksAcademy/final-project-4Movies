import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/home.css";

export const ActorDetails = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    // Fetch actor details based on actorId
    actions.getActorById(id);
  }, [id]);

  return (
    <main>
      <div className="container-fluid pb-5">
        {store.actor && (
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
                  src={`${process.env.API_IMAGES}/${store.actor.profile_path}`}
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
                    {store.actor.name}
                  </h1>
                  <p
                    className="card-text"
                    style={{ marginTop: "4%", marginBottom: "0" }}
                  >
                    Biography
                  </p>
                  <p className="text-light" style={{ fontFamily: "Work Sans" }}>
                    {store.actor.biography}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};
