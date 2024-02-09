import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import ReactPaginate from "react-paginate";
import "../../styles/pagination.css";
import { CardPeliculas } from "./CardPeliculas";

export const FilteredMovies = () => {
  const { store, actions } = useContext(Context);

  const [currentPage, setCurrentPage] = useState(1);
  const genreId = store.selectedGenre;

  useEffect(() => {
    //actions.getMoviesByGenre(genreId, currentPage);
  }, []);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
    actions.getMoviesByGenre(genreId, data.selected + 1);
    console.log(data.selected + 1);
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
      {chunkArray(store.filteredMovies, 4).map((row, rowIndex) => (
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
        pageCount={Math.ceil(store.filteredMovies.length / 4)} // Calculate pageCount dynamically
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
        //forcePage={currentPage}
      />
    </div>
  );
};
