import React from 'react';
import { useCallback } from "react";
import './Playlist.css';

// Import Components
import Tracklist from '../Tracklist/Tracklist';

const Playlist = (props) => {
    const handleNameChange = useCallback(
        (e) => {
          props.onNameChange(e.target.value);
        },
        [props.onNameChange]
    );

    return (
        <div className="list">
            <input defaultValue={"New Playlist"} id='plyList' onChange={handleNameChange}>
            </input>
            <Tracklist         
                tracks={props.playlistTracks}
                isRemoval={true}
                onRemove={props.onRemove}
            />
            <button className="saveBtn" onClick={props.onSave}>Save to Playlist</button>
        </div>
    );
}
 
export default Playlist;