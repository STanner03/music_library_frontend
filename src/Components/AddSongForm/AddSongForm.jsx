import React, { useState } from 'react';


const AddSongForm = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setReleaseDate] = useState(0);
    const [genre, setGenre] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre
        }
        props.addNewSongProperty(newSong)
        // let resetForm = {
        //     title: '',
        //     artist: '',
        //     album: '',
        //     release_date: release_date,
        //     genre: ''
        // }

    }

    const handleTitle = e => setTitle(e.target.value);
    const handleArtist = e => setArtist(e.target.value);
    const handleAlbum = e => setAlbum(e.target.value);
    const handleReleaseDate = e => setReleaseDate(e.target.value);
    const handleGenre = e => setGenre(e.target.value);

    return ( 
        <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type='text' value={title} onChange={handleTitle} />
                <label>Artist</label>
                <input type='text' value={artist} onChange={handleArtist} />
                <label>Album</label>
                <input type='text' value={album} onChange={handleAlbum} />
                <label>Release Date</label>
                <input type='date' value={release_date} onChange={handleReleaseDate} />
                <label>Genre</label>
                <input type='text' value={genre} onChange={handleGenre} />
            <button type='submit'>Add Song to List</button>
        </form>
     );
}
 
export default AddSongForm;