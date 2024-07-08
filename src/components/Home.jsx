import { useState } from "react";
import Menu from "./Menu";
import { Musiclist } from "../data/musiclist";
import Songs from "./Songs";
import PlayList from "./Playlist";
import { useSelector } from "react-redux";
import Player from "./Player";


const Home = () => {
    const [isSongs, setIsSongs] = useState(true);
    const song = useSelector (state => state.song.value);

    return <>

        <div className="home">
            <header>
                <h4>Music Player</h4>
            </header>
            <div className="d-flex content">
                <Menu isSongs={isSongs} setIsSongs={setIsSongs} />
                <div style={{ flex: 1 }}>
                    {isSongs ? (
                        < div className="d-flex flex-wrap songs">
                            {Musiclist.map((item) => (
                                <Songs {...item} />
                            ))}
                        </div>
                    ) : (
                        <div className="playlist">
                            <PlayList />
                        </div>
                    )}
                </div>
            </div>
              {song && <Player/>}
        </div >

    </>
}

export default Home;
