import { useEffect, useState } from "react"
import { trackService } from "../services/track.service"
import { TrackPreview } from "../cmps/TrackPreview"
import { TrackFilter } from "../cmps/TrackFilter"
import { Loader } from "../cmps/Loader"
import { useSelector } from "react-redux"
import { setTracks } from "../store/player.actions"
import { useNavigate } from "react-router-dom"

export function Catalog() {
    const tracks = useSelector(storeState => storeState.playerModule.tracks)
    const navigate = useNavigate()
    // const [tracks, setTracks] = useState([])
    const [filterBy, setFilterBy] = useState({ txt: '', sortBy: 'title', isfeatured: null })

    useEffect(() => {
        // loadTracks()
    }, [filterBy])

    async function loadTracks() {
        try {
            const res = await trackService.getTracks(filterBy)
            setTracks(res)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <section className="catalog-page" >
            <button className="btn-back" onClick={() => navigate('/')}>
                <img src="https://res.cloudinary.com/dollaguij/image/upload/v1701785794/wednesday/bwudwrzkha2pdcy3ga7q.svg" alt="" />
            </button>
            <TrackFilter filterBy={filterBy} setFilterBy={setFilterBy} />
            {/* {!tracks?.length && <Loader />} */}
            <div className="track-list">
                {tracks?.map(track => <TrackPreview key={track._id} track={track} catalog={true} />)}
            </div>
        </section>
    )
}