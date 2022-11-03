import { useState } from "react";
import AddSongForm from "./Components/AddSongForm/AddSongForm";
import MusicTable from "./Components/MusicTable/MusicTable";
import NavBar from "./Components/NavBar/NavBar";
import SearchBar from "./Components/SearchBar/SearchBar";
import './App.css'


function App() {

  const [songs, setSongs] = useState([{title: 'I Refuse', artist: 'Five Finger Death Punch', album: 'And Justice for None', release_date: '2018-01-01', genre: 'Rock'}])

  function addNewSong(song){
    let tempSongs = [song, ...songs];
    setSongs(tempSongs);
  }

  return (
    <div style={{backgroundImage: 'file:///C:/Users/shane/OneDrive/Desktop/devCodeCamp/FullStack/music_library_frontend/assets/Music-Streaming-Wars.webp'}}>
      <NavBar />
      <SearchBar placeHolder="Enter Search Criteria" data={songs} />
      <AddSongForm addNewSongProperty={addNewSong} />
      <MusicTable parentSongs={songs}/>
    </div>
  );
}

export default App;
