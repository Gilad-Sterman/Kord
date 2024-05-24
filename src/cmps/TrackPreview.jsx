import { useSelector } from "react-redux"
import { setCurrSong, setNextSong, setPrevSong, toggelIsPlaying } from "../store/player.actions"

export function TrackPreview({ track, catalog, create }) {
    const isPlaying = useSelector(storeState => storeState.playerModule.isPlaying)
    const currSong = useSelector(storeState => storeState.playerModule.currSong)
    const tracks = useSelector(storeState => storeState.playerModule.tracks)
    const { title, duration, img_url, audio_url, tags, isfeatured } = track
    const seconds = duration % 60
    const time = `${Math.floor(duration / 60)}:${(seconds < 10) ? `0${seconds}` : seconds}`
    const img1 = "https://res.cloudinary.com/dollaguij/image/upload/v1699194273/svg/pause_qemiyb.svg"
    const img2 = "https://res.cloudinary.com/dollaguij/image/upload/v1699194275/svg/play_ttonbb.svg"

    function playTrack() {
        if (isPlaying && currSong._id === track._id) {
            toggelIsPlaying(isPlaying)
            return
        }
        setCurrSong(track)
        setNextSong(track, tracks)
        setPrevSong(track, tracks)
        if (create) return
        setTimeout(toggelIsPlaying, 200, false)
    }

    return (
        <section className={`track-preview ${(currSong._id === track._id) ? 'curr-song' : ''}`} onClick={() => playTrack()} >
            <div className="img-container">
                <img src={`${img_url ? img_url : 'https://res.cloudinary.com/dollaguij/image/upload/v1699199706/no-img-new-playlist_r07sfz.png'}`} alt="" className="track-img" />
                {(currSong._id === track._id) && <img src={isPlaying ? img1 : img2} alt="" className="pip-img curr-song" />}
            </div>
            <div className="info">
                <span className="bold">{title}</span>
                <span>{time}</span>
            </div>
            {catalog && <div className="more-info">
                <div className="dry-info">
                    <span className="tags">{tags.join(', ')}</span>
                    <span>Tempo: {track.tempo} Bpm</span>
                </div>
                {isfeatured && <img src="https://res.cloudinary.com/dollaguij/image/upload/v1701785798/wednesday/o0vqrudwfoymlpwa7sjw.svg" alt="" />}
            </div>}
        </section>
    )
}