import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';

export function TempoControl({ audioUrl, initialTempo }) {
    const [tempo, setTempo] = useState(initialTempo);
    const audioRef = useRef(null);
    const isSeekingRef = useRef(false);

    useEffect(() => {
        if (audioRef.current && !isSeekingRef.current) {
            const audioElement = audioRef.current.getInternalPlayer();
            audioElement.playbackRate = tempo / 100;
        }
    }, [tempo]);

    const handleTempoChange = (event) => {
        setTempo(parseFloat(event.target.value));
    };

    const handleSeek = (event) => {
        const audioElement = audioRef.current.getInternalPlayer();
        const newTime = (event.target.value / 100) * audioElement.duration;
        audioElement.currentTime = newTime;
        isSeekingRef.current = false;
    };

    return (
        <div>
            <input
                type="range"
                value={tempo}
                onChange={handleTempoChange}
                min={50}
                max={200}
                step={1}
            />
            <span>{tempo} %</span>
            <div>
                <ReactPlayer
                    ref={audioRef}
                    url={audioUrl}
                    width='300%'
                    height='100%'
                    playing={true}
                    // onProgress={handleProgress} 
                    controls
                    onSeek={() => (isSeekingRef.current = true)}
                    // onSeekChange={handleSeek}
                />
            </div>
        </div>
    );
}

