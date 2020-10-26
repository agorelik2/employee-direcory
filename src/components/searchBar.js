import React, { useState } from "react";

function SearchBar(props) {
  const [searchInput, setSearchInput] = useState("");
  return (
    <form
      className="form-inline"
      onSubmit={(e) => {
        console.log("clicked");
        e.preventDefault();
        props.handleSearch(searchInput);
      }}
    >
      <div className="form-group mb-2">
        <label for="search" className="sr-only">
          Search Employee{" "}
        </label>
        <input
          type="text"
          className="form-control m-2"
          id="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>

      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          console.log("clicked");
          props.handleSearch(searchInput);
        }}
        className="btn btn-primary mb-2"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
