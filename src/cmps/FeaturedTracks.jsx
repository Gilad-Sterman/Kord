import { useEffect, useState } from "react"
import { trackService } from "../services/track.service"
import { TrackPreview } from "./TrackPreview"
import { useSelector } from "react-redux"
import { setTracks } from "../store/player.actions"

export function FeaturedTracks() {
    const tracks = useSelector(storeState => storeState.playerModule.tracks)?.slice(0, 6)

    useEffect(() => {
        loadTracks()
    }, [])

    async function loadTracks() {
        try {
            const res = await trackService.getTracks({ isfeatured: true })
            setTracks(res)
            // setTracks(res)
        } catch (err) {
            console.log(err)
        }
    }
    if (!tracks?.length) return

    return (
        <section className="featured-tracks" >
            <h4>Featured Tracks</h4>
            <div className="tracks-container">
                {tracks.map(track => <TrackPreview key={track._id} track={track} />)}
            </div>
        </section>
    )
}