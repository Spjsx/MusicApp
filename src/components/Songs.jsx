import React from "react";
import { PauseFill, PlayFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { changeSong } from "../Redux/Reducer/SongStore";

const Songs = (props) => {

    const song = useSelector((state) => state.song.value);
    const dispatch = useDispatch();

    return <>
        <div className="song text-center" onClick={()=>{
            dispatch(changeSong(props));
            setTimeout(()=>{
                if (song?.id !== props.id){
                  const player = document.getElementById('audio')
                  player.load();
                  player.play();
                }
            })
        }}>

            <img className="audio-img" alt={props.title} src={props.image} />
            <div>{props.title}</div>
            {props.id === song.id ? <PauseFill className="play-logo" /> :
               
               <PlayFill className="play-logo" />}

            <div>Artist: {props.artist}</div>

        </div >
    </>
}

export default Songs;