const MusicTable = (props) => {

  let modal = document.getElementById('id01');

  <div id="id01" className="modal">
    <span onclick="document.getElementById('id01').style.display='none'" className="close" title="Close Modal">×</span>
    <form className="modal-content" action="/action_page.php">
      <div className="container">
        <h1>Delete Account</h1>
        <p>Are you sure you want to delete your account?</p>
        <div className="clearfix">
          <button type="button" onclick="document.getElementById('id01').style.display='none'" className="cancelbtn">Cancel</button>
          <button type="button" onclick="document.getElementById('id01').style.display='none'" className="deletebtn">Delete</button>
        </div>
      </div>
    </form>
  </div>


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
              <button onclick="document.getElementById('id01').style.display='block'" >Delete Song</button>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default MusicTable;