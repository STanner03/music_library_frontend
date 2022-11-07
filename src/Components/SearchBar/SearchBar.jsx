import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import RefreshIcon from '@mui/icons-material/Refresh';

function SearchBar({ data, setSongs, getAllSongs }) {
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
    setWordEntered("");
  };

  const clearInput = (e) => {
    e.preventDefault();
    setFilteredData([]);
    setWordEntered("");
  };

  const refreshList = (e) => {
    e.preventDefault();
    setFilteredData([]);
    setWordEntered("");
    getAllSongs()
  }

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
          <SearchIcon onClick={newTable} id="btn" />
        </div>
        <div className="clearIcon">
          {wordEntered.length === 0 ? (
            <RefreshIcon id="btn" onClick={refreshList} />
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
                <p>
                  {value.title}, {value.artist}, {value.album},{" "}
                  {value.release_date}, {value.genre}{" "}
                </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
