import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import ReactPaginate from "react-paginate";
import "../../styles/pagination.css";
import { CardPeliculas } from "./CardPeliculas"; // Importing CardPeliculas component

export const Movies = () => {
  const { store, actions } = useContext(Context);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    actions.getAllMovies(currentPage);
  }, [currentPage]); // Update the movies when currentPage changes

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  // Function to chunk array into smaller arrays
  const chunkArray = (arr, chunkSize) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunkedArray.push(arr.slice(i, i + chunkSize));
    }
    return chunkedArray;
  };

  return (
    <div className="pt-2" style={{ backgroundColor: "#3B3B3B" }}>
      {chunkArray(store.movies, 4).map((row, rowIndex) => (
        <div key={rowIndex} className="row pb-3">
          {row.map((movie, index) => (
            <div key={index} className="col-md-3">
              <CardPeliculas movie={movie} />
            </div>
          ))}
        </div>
      ))}
      <ReactPaginate
        previousLabel={"anterior"}
        nextLabel={"siguiente"}
        breakLabel={"..."}
        pageCount={500}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        forcePage={currentPage}
      />
    </div>
  );
};
