import React, { useState } from "react";
import { Playlist } from "../data/musiclist";
import { useDispatch, useSelector } from "react-redux";
import Songs from "./Songs";
import { changeList } from "../Redux/Reducer/List";
import { ArrowUpLeftCircleFill } from "react-bootstrap-icons";

const PlayList = () => {
    const [isPlaylist, setIsPlaylist] = useState(true);
    const [playlist, setPlaylist] = useState({});
    const list = useSelector(state => state.list.value);
    const dispatch = useDispatch();

    return <>
        <div className="songs d-flex flex-wrap">
            {isPlaylist ? (
                Playlist.map((item, index) => (
                    <div key={index} className="song text-center"
                        onClick={() => {
                            setPlaylist(item);
                            setIsPlaylist(false);
                            dispatch(changeList(item.songs));
                        }}>
                        <img className="audio-img" alt={item.title} src={item.imageurl} />
                        <div>{item.title}</div>
                    </div>
                ))
            ) : (
                <div>
                    <div className="playlist-header">
                       <ArrowUpLeftCircleFill onClick={() => {setPlaylist({}); setIsPlaylist(true);}}/>
                        {playlist.title}
                    </div>
            
                    <div className= "justify-content-center d-flex flex-wrap">
                        {list.map((item) => (<Songs  {...item} />
                        ))}
                    </div>
                    
                </div>

            )}
        </div>
    </>
}

export default PlayList;