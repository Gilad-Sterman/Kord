import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams, useNavigate } from "react-router"
import { setTracks } from "../store/player.actions"
import { Loader } from "../cmps/Loader"
import { TrackPreview } from "../cmps/TrackPreview"
import { trackService } from "../services/track.service"

export function Vibe() {
    const tracks = useSelector(storeState => storeState.playerModule.tracks)
    const params = useParams()
    const navigate = useNavigate()
    const vibe = params.name

    useEffect(() => {
        loadTracks()
    }, [])

    async function loadTracks() {
        try {
            const res = await trackService.getTracks({ vibe })
            setTracks(res)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <section className="vibe-page">
            <button className="btn-back" onClick={() => navigate('/')}>
                <img src="https://res.cloudinary.com/dollaguij/image/upload/v1701785794/wednesday/bwudwrzkha2pdcy3ga7q.svg" alt="" />
            </button>
            <h2>{vibe}</h2>
            {!tracks?.length && <Loader />}
            <div className="track-list">
                {tracks?.map(track => <TrackPreview key={track._id} track={track} catalog={true} />)}
            </div>
        </section>
    )
}