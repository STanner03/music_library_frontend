import { useState } from "react";
import AddSongForm from "./AddSongForm/AddSongForm";
import MusicTable from "./MusicTable/MusicTable";

function App() {

  const [songs, setSongs] = useState([{title: 'I Refuse', artist: 'Five Finger Death Punch', album: 'And Justice for None', release_date: '2018-01-01', genre: 'Rock'}])

  function addNewSong(song){
    let tempSongs = [song, ...songs];
    setSongs(tempSongs);
  }

  return (
    <div>
      <AddSongForm addNewSongProperty={addNewSong} />
      <MusicTable parentSongs={songs}/>
    </div>
  );
}

export default App;
