import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";

export const ProfileBio = () => {
  const { store, actions } = useContext(Context);
  const user = store.user;
  //const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Fetch user data by ID
        await actions.getUserById();

        // Fetch the list of followed and followers
        actions.getFollowedList();
        actions.getFollowersList();
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  

  return (
    <div className="container-fluid detailsBio">
      <span className="user-name">{user.name}</span>
      <span className="user-id">@{user.username}</span>

      {/* Estaría bueno agregar este dato en el perfil */}
      {/* <div className="user__joined">
          <i class="fa-regular fa-calendar" color="#777" size={20}></i>
          <span className="user__joined--text">Joined {joinedDate}</span>
        </div> */}

      <div className="user-follows">
        <span className="user-follows-following">
          <b>{store.followed.length || 0}</b> Following
        </span>
        
        <span className="ms-4 user-follows-followers">
          <b>{store.followers.length || 0}</b> Followers
        </span>
      </div>
      <div className="user-followed-by">
        Not followed by anyone you are following
      </div>
    </div>
  );
};
