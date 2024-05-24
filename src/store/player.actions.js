import { store } from "./store";
import { SET_CURR_SONG, IS_PLAYING, SET_NEXT_SONG, SET_PREV_SONG, SET_SONG_PROGRESS, SET_TRACKS } from "./player.reducer.js";

export function getActionIsPlaying(isPlaying) {
    return {
        type: IS_PLAYING,
        isPlaying
    }
}

export function getActionCurrSong(currSong) {
    return {
        type: SET_CURR_SONG,
        currSong
    }
}

export function getActionTracks(tracks) {
    return {
        type: SET_TRACKS,
        tracks
    }
}

export function getActionNextSong(nextSong) {
    return {
        type: SET_NEXT_SONG,
        nextSong
    }
}

export function getActionPrevSong(prevSong) {
    return {
        type: SET_PREV_SONG,
        prevSong
    }
}

export function getActionSetSongProgress(songProgress) {
    return {
        type: SET_SONG_PROGRESS,
        songProgress
    }
}

export async function toggelIsPlaying(isPlaying) {
    try {
        store.dispatch(getActionIsPlaying(!isPlaying))
        return !isPlaying
    } catch (err) {
        console.log('cannot play or pause', err)
        throw err
    }
}

export async function setCurrSong(song) {
    try {
        localStorage.setItem("lastSong", song.id)
        store.dispatch(getActionCurrSong(song))
        return song
    } catch (err) {
        console.log('cannot play or pause', err)
        throw err
    }
}

export async function setTracks(tracks) {
    try {
        store.dispatch(getActionTracks(tracks))
        return tracks
    } catch (err) {
        console.log('cannot set tracks', err)
        throw err
    }
}

export async function setNextSong(song, tracks) {
    try {
        const songIdx = tracks.findIndex(s => s._id === song._id)
        const nextSong = (songIdx + 1 < tracks.length) ? tracks[songIdx + 1] : tracks[0]
        store.dispatch(getActionNextSong(nextSong))
        return nextSong
    } catch (err) {
        console.log('cannot set next song', err)
        throw err
    }
}

export async function setPrevSong(song, tracks) {
    try {
        const songIdx = tracks.findIndex(s => s._id === song._id)
        const prevSong = (songIdx - 1 < 0) ? tracks[tracks.length - 1] : tracks[songIdx - 1]
        store.dispatch(getActionPrevSong(prevSong))
        return prevSong
    } catch (err) {
        console.log('cannot set prev song', err)
        throw err
    }
}

export async function setSongProgress(songProgress) {
    try {
        store.dispatch(getActionSetSongProgress(songProgress))
    } catch (err) {
        console.log('Cannot change song progress', err)
        throw err
    }
}
