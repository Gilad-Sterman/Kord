import React from 'react'
import ReactPlayer from 'react-player'
import { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { trackService } from '../services/track.service'
import { PlayingPreview } from './PlayingPreview'
import { setCurrSong, setNextSong, setPrevSong, setSongProgress, toggelIsPlaying } from '../store/player.actions'
import { utilService } from '../services/util.service'
import { topTracks } from '../services/info.service'
import { useLocation } from 'react-router-dom'

export function Player() {
    const location = useLocation()
    const hidePlayerRoutes = ['/create', '/upload', '/login', '/signup']
    const [isHidden, setIsHidden] = useState(false)

    useEffect(() => {
        setIsHidden(hidePlayerRoutes.includes(location.pathname));
    }, [location.pathname])

    const isPlaying = useSelector(storeState => storeState.playerModule.isPlaying)
    const currSong = useSelector(storeState => storeState.playerModule.currSong)
    const nextSong = useSelector(storeState => storeState.playerModule.nextSong)
    const prevSong = useSelector(storeState => storeState.playerModule.prevSong)
    const tracks = useSelector(storeState => storeState.playerModule.tracks)

    const [volume, setVolume] = useState(0.5)
    const [prevVolume, setPrevVolume] = useState(volume)
    const [isMuted, setIsMuted] = useState(false)
    const [isLooped, setIsLooped] = useState(false)
    const [isShuffle, setIsShuffle] = useState(false)
    const [isVocal, setIsVocal] = useState(true)
    // const [isLiked, setIsLiked] = useState(false) // this is cmp state that will be getting the global state of the current song:  const [isLiked, setIsLiked] = useState(currSong.isliked)
    const playerRef = useRef(null)
    const [currentTime, setCurrentTime] = useState(0)
    const [timeElapsed, setTimeElapsed] = useState(0)
    const [timeRemaining, setTimeRemaining] = useState(0)


    useEffect(() => {
        if (playerRef.current) {
            playerRef.current.seekTo(currentTime)
        }
    }, [isVocal])

    const handleProgress = (state) => {
        if (!state.loaded) return
        setCurrentTime(state.playedSeconds)
        setSongProgress(state.playedSeconds)
        const totalDuration = playerRef.current ? playerRef.current.getDuration() : 0;
        setTimeElapsed(state.playedSeconds);
        setTimeRemaining(totalDuration);
    }

    const handleSeek = (e) => {
        const seekTime = e.target.value
        setCurrentTime(seekTime)
        // setSongProgress(seekTime)
        playerRef.current.seekTo(seekTime)
    }

    function getRandTrack(track) {
        const mySongs = tracks.filter(s => s._id !== track._id)
        const randIdx = utilService.getRandomIntInclusive(0, mySongs.length - 1)
        const randSong = mySongs[randIdx]
        return randSong
    }

    function goToNextSong() {
        if (!currSong.title) return
        // if (isLooped) {
        //     setCurrentTime(0)
        //     playerRef.current.seekTo(0)
        //     if (isPlaying) {
        //         playerRef.current.play();
        //     }
        //     return
        // }
        // if (isShuffle) {
        //     const randSong = getRandTrack(currSong)
        //     setCurrSong(randSong)
        //     setNextSong(randSong, tracks)
        //     setPrevSong(randSong, tracks)
        //     return
        // }
        setCurrSong(nextSong)
        setNextSong(nextSong, tracks)
        setPrevSong(nextSong, tracks)
    }

    function goToPrevSong() {
        if (!currSong.title) return
        if (isShuffle) {
            const randSong = getRandTrack(currSong)
            setCurrSong(randSong)
            setNextSong(randSong, tracks)
            setPrevSong(randSong, tracks)
            return
        }
        setCurrSong(prevSong)
        setNextSong(prevSong, tracks)
        setPrevSong(prevSong, tracks)
    }

    function playSong() {
        if (!currSong.title) return
        toggelIsPlaying(isPlaying)
    }

    function shuffelSong() {
        setIsShuffle(!isShuffle)
    }

    function muteSong() {
        setIsMuted(!isMuted)
        setPrevVolume(volume)
        !isMuted ? setVolume(0) : setVolume(prevVolume)
    }

    function loopSong() {
        setIsLooped(!isLooped)
    }

    const handleVolumeChange = (event) => {
        const newVolume = parseFloat(event.target.value)
        setVolume(newVolume)
    }

    const handleEnded = () => {
        if (isLooped) {
            setCurrentTime(0)
            playerRef.current.seekTo(0)
            // playerRef.current.play()
            return
        }
        next()
    }

    const next = () => {
        const idx = topTracks.findIndex(track => track._id === currSong._id)
        let newIdx = idx + 1
        if (newIdx === topTracks.length) newIdx = 0
        setCurrSong(topTracks[newIdx])
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

    return (
        <div className={`app-player ${isHidden ? 'hide' : ''}`}>
            <div className='player-top'>
                {currSong._id && <PlayingPreview track={currSong} />}
                <div className='main-controls'>
                    <button className='player-play-btn secondary-play-button' onClick={playSong}>
                        {isPlaying ? <img className='pause-icon secondary-play-button-img' src="https://res.cloudinary.com/dollaguij/image/upload/v1699194273/svg/pause_qemiyb.svg" alt="" /> :
                            <img className='play-icon secondary-play-button-img' src="https://res.cloudinary.com/dollaguij/image/upload/v1699194275/svg/play_ttonbb.svg" alt="" />}
                    </button>
                </div>
            </div>
            <div className='player-main'>
                <ReactPlayer
                    className='react-player'
                    ref={playerRef}
                    url={currSong.audioUrl}
                    config={{
                        youtube: {
                            playerVars: {
                                showinfo: 1,
                            }
                        }
                    }}
                    width='0%'
                    height='0%'
                    playing={isPlaying}
                    volume={volume}
                    muted={isMuted}
                    // loop={isLooped}
                    onProgress={handleProgress}
                    onEnded={handleEnded}
                />
                <div className="progress-bar">
                    {/* <span className="elapsed-time">{formatTime(timeElapsed)}</span> */}
                    <label htmlFor="progressBar"></label>
                    <input
                        className="bar"
                        type="range"
                        id="progressBar"
                        name="progressBar"
                        min={0}
                        max={playerRef.current ? playerRef.current.getDuration() : 0}
                        value={currentTime}
                        step={0.1}
                        onChange={handleSeek}
                    />
                    <div className="progress-elapsed" style={{ width: `${0.84 * (timeElapsed / timeRemaining) * 100}%` }}>
                    </div>
                    {/* <span className="remaining-time">{formatTime(timeRemaining)}</span> */}
                </div>
            </div>
        </div>
    )
}