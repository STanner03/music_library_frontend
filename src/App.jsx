import axios from 'axios';
import React from 'react';
import { useEffect, useState } from "react";
import AddSongForm from "./Components/AddSongForm/AddSongForm";
import MusicTable from "./Components/MusicTable/MusicTable";
import NavBar from "./Components/NavBar/NavBar";
import SearchBar from "./Components/SearchBar/SearchBar";
import './App.css'


function App() {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    getAllSongs();
  }, [])

  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data)
  }

  async function addNewSong(song){
    let tempSongs = await axios.post('http://127.0.0.1:8000/api/music/', song);
    setSongs(tempSongs.data);
  }

  return (
    <div className='App'>
      <NavBar />
      <SearchBar data={songs} setSongs={setSongs} getAllSongs={getAllSongs} />
      <AddSongForm addNewSongProperty={addNewSong} />
      <MusicTable parentSongs={songs} />
    </div>
  );
}

export default App;
