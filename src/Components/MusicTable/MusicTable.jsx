import './MusicTable.css'
const MusicTable = (songs, deleteSong) => {
  return (
    <table className="container">
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Release Date</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>
        {songs.parentSongs.map((song) => {
          return (
            <tr key={song.id}>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.release_date}</td>
              <td>{song.genre}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default MusicTable;