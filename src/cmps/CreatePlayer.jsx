import { useState } from 'react';
import ReactPlayer from 'react-player';

export function CreatePlayer({ currSong, tempo, setTempo, handleTempoChange, playerKey, audioRef, handleProgress, handleSeek, timeElapsed, timeRemaining, isVocal, setIsVocal, handleReset, handleBackward, handleForward, canSave, isPlaying, setIsPlaying, transpose, handleTransposeChange, playWithPitchShift }) {
    // const [isPlaying, setIsPlaying] = useState(false)
    const img1 = "https://res.cloudinary.com/dollaguij/image/upload/v1699194273/svg/pause_qemiyb.svg"
    const img2 = "https://res.cloudinary.com/dollaguij/image/upload/v1699194275/svg/play_ttonbb.svg"

    const getCurrentUrl = () => {
        return (isVocal && currSong?.vocal_url) ? currSong.vocal_url : currSong.audio_url
    }

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }

    return (
        <section className="create-player">
            <div className='top-bar'>
                <div className='track-controls'>
                    <div className='player-container'>
                        <div className='tempo-input'>
                            <label htmlFor="tempo" onClick={() => setTempo(100)}>Tempo:</label>
                            <input
                                type="range"
                                value={tempo}
                                onChange={handleTempoChange}
                                min={50}
                                max={200}
                                step={1}
                                name='tempo'
                                id='tempo'
                            />
                            <span>{tempo} %</span>
                        </div>
                        {/* <div className='transpose-input'>
                            <div>
                                <label htmlFor="transpose">Key:</label>
                                <button onClick={playWithPitchShift}>
                                    On
                                </button>
                            </div>
                            <input
                                type="range"
                                id="transpose"
                                name="transpose"
                                min="-12"
                                max="12"
                                step="1"
                                value={transpose}
                                onChange={handleTransposeChange}
                            />
                            <span>{transpose}</span>
                        </div> */}
                        <div>
                            <ReactPlayer
                                key={playerKey}
                                ref={audioRef}
                                url={getCurrentUrl()}
                                width='300%'
                                height='100%'
                                playing={isPlaying}
                                onProgress={handleProgress}
                                onSeek={handleSeek}
                            />
                        </div>
                    </div>
                    <div className='top-btns'>
                        <button onClick={handleReset} className='btn-reset'>
                            <img src="https://res.cloudinary.com/dollaguij/image/upload/v1699194279/svg/repeat_bspcpp.svg" alt="" />
                        </button>
                        <div className='flex align-center'>
                            <button onClick={handleBackward} className='btn-time minus'>
                                <img src="https://res.cloudinary.com/dollaguij/image/upload/v1705568297/refresh-svgrepo-com_neyeac.svg" alt="" />
                            </button>
                            <div className="btn-play" onClick={() => setIsPlaying(!isPlaying)}>
                                <img src={isPlaying ? img1 : img2} alt="" />
                            </div>
                            <button onClick={handleForward} className='btn-time plus'>
                                <img src="https://res.cloudinary.com/dollaguij/image/upload/v1705568297/refresh-svgrepo-com_neyeac.svg" alt="" />
                            </button>
                        </div>
                        {currSong.vocal_url && <button className='btn-toggle' onClick={() => setIsVocal(!isVocal)}>
                            <img src="https://res.cloudinary.com/dollaguij/image/upload/v1706621470/microphone-for-a-singer-or-a-conference-svgrepo-com_ebat3m.svg" alt="" />
                            {!isVocal && <div className='line'></div>}
                        </button>}
                        {!currSong.vocal_url && <button className='btn-save'>
                            <img src="https://res.cloudinary.com/dollaguij/image/upload/v1706621745/save-svgrepo-com_jq1a4f.svg" alt="" />
                            {!canSave && <div className='line'></div>}
                        </button>}
                    </div>
                </div>
            </div>
        </section>
    )
}