import './App.css';
import { useState, useCallback } from "react";

// Import Components
import Header from './component/Header/Header';
import SearchBar from './component/SearchBar/SearchBar';
import SearchResults from './component/SearchResults/SearchResults';
import Playlist from './component/Playlist/Playlist';
import Clone from './component/Clone/Clone';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = useCallback((term) => {
    Clone.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;

      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) =>
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Clone.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);


  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={search} />
      <div className='playlist'>
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        <Playlist playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
            onSave={savePlaylist}/>
      </div>
    </div>
  );
}

export default App;
