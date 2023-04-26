import React, { useState, useEffect } from "react";
import "../App.css";
function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    async function handleSearch() {
      let search = searchQuery ? searchQuery : "Doctor";
      const response = await fetch(
        `${process.env.REACT_APP_API}&s=${search}`
      );
      const data = await response.json();
      setSearchResults(data.Search || []);
      console.log(data);
    }

    handleSearch();
  }, [searchQuery]);

  function handleChange(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <div className="main">
      <h1
        style={{
          fontSize: "20px",
          color: "black",
          textAlign: "center",
          fontWeight: "600",
          marginTop: "20px",
        }}
      >
        Movie Search App
      </h1>
      <form>
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search movie..."
        />
      </form>
      <div className="card_container">
        {searchResults.length > 0 ? (
          searchResults.map((result) => (
            <div key={result.id} className="card">
              <img
                src={result.Poster}
                alt={`${result.Title} poster`}
              />
              <div className="card_cont">
                <h2 style={{ color: "black", fontSize: "15px" }}>
                  {result.Title}
                </h2>
                <p style={{ fontSize: "13px" }}>
                  <span style={{ color: "black", fontSize: "15px" }}>
                    Year :{" "}
                  </span>{" "}
                  {result.Year}
                </p>
              </div>
            </div>
          ))
        ) : (
            <h3
              className="alert"
            >
              Movie not found!
            </h3>
        )}
      </div>
    </div>
  );
}

export default Search;
