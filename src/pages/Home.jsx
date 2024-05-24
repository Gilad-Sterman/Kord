import { useEffect, useState } from "react";
import { topTracks } from "../services/info.service";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { setCurrSong } from "../store/player.actions";

export function Home() {
    const [selected, setSelected] = useState('following')
    const currTrack = useSelector(storeState => storeState.playerModule.currSong)
    const isPlaying = useSelector(storeState => storeState.playerModule.isPlaying)


    const next = () => {
        const idx = topTracks.findIndex(track => track._id === currTrack._id)
        let newIdx = idx + 1
        if (newIdx === topTracks.length) newIdx = 0
        setCurrSong(topTracks[newIdx])
    }

    return (
        <section className='home' >
            {selected === 'following' ? <div className="top">
                <span className="current">Following</span>
                <span onClick={() => setSelected('for you')}>For You</span>
            </div> : <div className="top">
                <span onClick={() => setSelected('following')}>Following</span>
                <span className="current">For You</span>
            </div>}
            <div className="visual-content" onClick={() => next()}>
                <div className={`sound-wave-container ${isPlaying ? 'playing' : ''}`}>
                    <div className="sound-wave"></div>
                    <div className="sound-wave"></div>
                    <div className="sound-wave"></div>
                    <div className="sound-wave"></div>
                    <div className="sound-wave"></div>
                    <div className="sound-wave"></div>
                    <div className="sound-wave"></div>
                    <div className="sound-wave"></div>
                </div>
                {currTrack.visualUrl && <iframe src={currTrack.visualUrl} width="300" height="300" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>}
                {!currTrack.visualUrl && <img src={currTrack.thumbnailUrl} alt="track-img" className="track-img" />}
                <div className={`sound-wave-container ${isPlaying ? 'playing' : ''}`}>
                    <div className="sound-wave"></div>
                    <div className="sound-wave"></div>
                    <div className="sound-wave"></div>
                    <div className="sound-wave"></div>
                    <div className="sound-wave"></div>
                    <div className="sound-wave"></div>
                    <div className="sound-wave"></div>
                    <div className="sound-wave"></div>
                </div>
            </div>
            <div className="controls">
                <NavLink to={`/profile:${currTrack.user._id}`} className="uesr-preview">
                    <img src={currTrack.user.profilePicUrl} alt="user-img" />
                    <div className="follow">+</div>
                </NavLink>
                <button className='btn-like'>
                    <img className='empty-heart-icon' src="https://res.cloudinary.com/dollaguij/image/upload/v1699194263/svg/heart_khtwal.svg" alt="heart-icon" />
                    <span>{currTrack.likes}</span>
                </button>
                <button className='btn-comments'>
                    <img src="https://res.cloudinary.com/dollaguij/image/upload/v1716308407/icons/kord/comment_sxcxfj.png" alt="comment-icon" />
                    <span>{currTrack.comments.length}</span>
                </button>
                <button className='btn-share'>
                    <img src="https://res.cloudinary.com/dollaguij/image/upload/v1716389749/icons/kord/share_ytlqxz.png" alt="share-icon" />
                    <span>{currTrack.shares}</span>
                </button>
            </div>
            <div className="tags">
                {currTrack.tags.map((tag, idx) => <span key={idx}>{tag}</span>)}
            </div>
        </section>
    )
}
