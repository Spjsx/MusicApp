import { useDispatch, useSelector } from "react-redux";
import { changeSong } from "../Redux/Reducer/SongStore";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";


const Player = () => {
    const song = useSelector(state => state.song.value);
    const list = useSelector(state => state.list.value);
    const dispatch = useDispatch();

    const index = list.findIndex((item) => item.id === song.id);

    const isPrev = () => index > 0 && list.length > 1;

    const isNext = () => index < list.length - 1 && list.length > 1;

    const reloadMusic = () => {
        const player = document.getElementById('audio');
        player.load();
        player.play();
    }

    return <>
        <div className="player">
            <div className="d-flex justify-content-center align-items-center">
                <img src={song.image} alt={song.title}
                    height='50'
                    width='50'
                    style={{ borderRadius: '15px', marginRight: '10px' }}>
                </img>
                <div className="name"> {song.title} </div>
                <div className={`player-controls ${!isPrev() && 'cursor-disabled'}`} onClick={() => {
                    if (isPrev()) {
                        dispatch(changeSong(list[index - 1]))
                        reloadMusic();
                    }
                }}>
                    <ArrowLeft />
                </div>
                <audio className= 'audio-control' id='audio' controls>
                    <source src={song.url} type="audio/mpeg" />
                </audio>
                <div className={`player-controls ${!isNext() && 'cursor-disabled'}`} onClick={() => {
                    if (isNext()) {
                        dispatch(changeSong(list[index + 1]))
                        reloadMusic();
                    }
                }}>
                    <ArrowRight />
                </div>
            </div>
        </div>

    </>
}

export default Player;