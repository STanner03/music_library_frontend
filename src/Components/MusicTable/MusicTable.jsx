
const MusicTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Song Id</th>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Release Date</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>
        {props.parentSongs.map((song) => {
          return (
            <tr key={song.id}>
              <td>{song.id}</td>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.release_date}</td>
              <td>{song.genre}</td>
              <button  >Delete Song</button>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default MusicTable;