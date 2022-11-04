import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

function SearchBar({ data, setSongs }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    event.preventDefault();
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return (
        value.title.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.artist.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.album.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.release_date.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.genre.toLowerCase().includes(searchWord.toLowerCase())
      );
    });
    console.log(data);
    
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  
  
  const newTable = (e) => {
    e.preventDefault();
    setSongs(filteredData);
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Type Search Word"
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon id="btn" />
          ) : (
            <CloseIcon id="btn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={<button></button>}>
                <button type="submit" onClick={newTable} value={value}>
                  {value.title}, {value.artist}, {value.album},{" "}
                  {value.release_date}, {value.genre}{" "}
                </button>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
