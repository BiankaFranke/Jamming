import React from 'react';
import './Track.css';
import { useCallback } from "react";
import { ReactComponent as Minus } from '../../img/dash-circle.svg';
import { ReactComponent as Plus } from '../../img/plus-circle.svg';

const Track = (props) => {
    const addTrack = useCallback(
        (e) => {props.onAdd(props.track);},
        [props.onAdd, props.track]
    );
    
    const removeTrack = useCallback(
        (e) => {props.onRemove(props.track);},
        [props.onRemove, props.track]
    );
    
      const renderAction = () => {
        if (props.isRemoval) {
          return (
            <button className="TrackBtn" onClick={removeTrack}>
              <Minus />
            </button>
          );
        }
        return (
          <button className="TrackBtn" onClick={addTrack}>
            <Plus />
          </button>
        );
      };
    
    return (
        <div className='Track'>
            <div className='singleTrack'>
              <div className='TrackHeader'>
                <h3>{props.track.name}</h3>
                <span>{renderAction()}</span>
              </div>
                <p className='artist'>{props.track.artist}</p>
                <p className='album'>{props.track.album}</p>
            </div>
        </div>
    );
}
 
export default Track