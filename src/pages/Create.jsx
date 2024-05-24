import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router"
import { setCurrSong, setNextSong, setPrevSong, setTracks, toggelIsPlaying } from '../store/player.actions';
import WaveSurfer from 'wavesurfer.js';
import RegionsPlugin from 'wavesurfer.js/dist/plugins/regions.esm.js';

export function Create() {
    const [isRecording, setIsRecording] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [audioBlob, setAudioBlob] = useState(null)
    const [waveSurfer, setWaveSurfer] = useState(null)
    const mediaRecorderRef = useRef(null)
    const audioChunksRef = useRef([])
    const navigate = useNavigate()

    useEffect(() => {
        toggelIsPlaying(true)
    }, [])

    useEffect(() => {
        if (audioBlob) {
            loadAudioIntoWaveSurfer(audioBlob)
        }
    }, [audioBlob])

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        mediaRecorderRef.current = new MediaRecorder(stream)
        audioChunksRef.current = []

        mediaRecorderRef.current.ondataavailable = (event) => {
            audioChunksRef.current.push(event.data);
        }

        mediaRecorderRef.current.onstop = () => {
            const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' })
            setAudioBlob(audioBlob)
            // loadAudioIntoWaveSurfer(audioBlob)
        }

        mediaRecorderRef.current.start()
        setIsRecording(true)
    }

    const stopRecording = () => {
        mediaRecorderRef.current.stop()
        setIsRecording(false)
    }

    const loadAudioIntoWaveSurfer = (audioBlob) => {
        if (waveSurfer) {
            waveSurfer.destroy()
        }

        const waveSurferInstance = WaveSurfer.create({
            container: '#waveform',
            waveColor: '#3994ef',
            progressColor: '#003366',
            plugins: [],
        })

        const wsRegions = waveSurferInstance.registerPlugin(RegionsPlugin.create({
            regionsMinLength: 2,
            dragSelection: {
                color: 'red',
            },
        }))

        waveSurferInstance.loadBlob(audioBlob)
        waveSurferInstance.on('ready', () => {
            wsRegions.addRegion({
                start: 0,
                end: waveSurferInstance.getDuration(),
                color: 'rgba(132, 187, 243, 0.13)',
                drag: true,
                resize: true,
            })
        })

        setWaveSurfer(waveSurferInstance)
    }

    const trimAudio = () => {
        if (!waveSurfer) return

        const regions = waveSurfer.regions.list()
        if (!regions || Object.keys(regions).length === 0) return

        const region = Object.values(regions)[0]
        const startTime = region.start
        const endTime = region.end

        const audioContext = new (window.AudioContext)()
        const reader = new FileReader()

        reader.onload = async () => {
            const arrayBuffer = reader.result
            const audioBuffer = await audioContext.decodeAudioData(arrayBuffer)
            const trimmedBuffer = audioContext.createBuffer(
                audioBuffer.numberOfChannels,
                (endTime - startTime) * audioBuffer.sampleRate,
                audioBuffer.sampleRate
            )

            for (let channel = 0; channel < audioBuffer.numberOfChannels; channel++) {
                const channelData = audioBuffer.getChannelData(channel);
                trimmedBuffer.copyToChannel(
                    channelData.slice(startTime * audioBuffer.sampleRate, endTime * audioBuffer.sampleRate),
                    channel
                )
            }

            // audioContext.close();
            const trimmedArrayBuffer = await trimmedBuffer.arrayBuffer();
            const trimmedBlob = new Blob([new DataView(trimmedArrayBuffer)], {
                type: 'audio/wav',
            })
            setAudioBlob(trimmedBlob)
            // loadAudioIntoWaveSurfer(trimmedBlob)
        }

        reader.readAsArrayBuffer(audioBlob)
    }

    const playAudio = () => {
        if (waveSurfer) {
            setIsPlaying(!isPlaying)
            waveSurfer.playPause()
        }
    }


    function handleRecord() {
        if (!isRecording) {
            setIsRecording(true)
            return
        }
        setIsRecording(false)
        // setAudioData({/* recorded audio data */ })
    }

    return (
        <section className="create-page">
            <button className="btn-back" onClick={() => navigate('/')}>
                <img src="https://res.cloudinary.com/dollaguij/image/upload/v1701785794/wednesday/bwudwrzkha2pdcy3ga7q.svg" alt="" />
            </button>
            <h2>Create</h2>
            <div className="recording-section">
                {audioBlob && <div id="waveform"></div>}
                {audioBlob && <button onClick={playAudio} disabled={!audioBlob} className='btn-play-pause'>
                    <img src={isPlaying ? 'https://res.cloudinary.com/dollaguij/image/upload/v1699194273/svg/pause_qemiyb.svg' : 'https://res.cloudinary.com/dollaguij/image/upload/v1699194275/svg/play_ttonbb.svg'} alt="play-pause-icon" />
                </button>}
                {/* {audioBlob && <button onClick={trimAudio} disabled={!audioBlob}>Trim Audio</button>} */}
            </div>
            {audioBlob && <button className="btn-upload" onClick={() => navigate('/upload')}>
                <img src="https://res.cloudinary.com/dollaguij/image/upload/v1716450245/icons/kord/upload_acu388.png" alt="" />
            </button>}
            <button className={`btn-record ${isRecording ? 'recording' : ''}`} onClick={isRecording ? stopRecording : startRecording}>
                <img src="https://res.cloudinary.com/dollaguij/image/upload/v1706384573/microphone_gjebnp.svg" alt="" className="record-img" />
            </button>
        </section>
    )
}