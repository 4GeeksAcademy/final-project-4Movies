import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Support = () => {
  const { store, actions } = useContext(Context);
  const [issue, setIssue] = useState("");

  const createIssue = actions.createIssue;

  // Function to handle form submission
  const handleCreateIssue = async () => {
    try {
      // Check if theres a valid token
      if (!localStorage.getItem("authToken")) {
        alert("Please log in to submit an issue.");
        return;
      }

      // Check if issue is provided
      if (!issue.trim()) {
        alert("Please provide an issue.");
        return;
      }

      // Call the backend function
      const success = await createIssue(issue);

      if (success) {
        // Optionally, you can handle the success case here
        console.log("Issue created successfully");
        // Clear the form or update any other state as needed
        setIssue("");
      } else {
        // Handle the case when the issue creation fails
        console.error("Failed to create the issue");
      }
    } catch (error) {
      console.error("Error creating issue:", error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center mb-2">
      <form
        onSubmit={(e) => e.preventDefault() && false}
        className="w-75 d-flex flex-column"
      >
        <h1 className="text-light"> Submit an issue</h1>

        <textarea
          className="rounded-3"
          placeholder="Describe your issue..."
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        />

        <br />

        <button
          type="submit"
          className="btn btnCrearCuenta ms-auto"
          onClick={handleCreateIssue}
        >
          Create Issue
        </button>
      </form>
    </div>
  );
};
