import { topTracks } from "../services/info.service"

export const SET_CURR_SONG = 'SET_CURR_SONG'
export const SET_TRACKS = 'SET_TRACKS'
export const IS_PLAYING = 'IS_PLAYING'
export const SET_NEXT_SONG = 'SET_NEXT_SONG'
export const SET_PREV_SONG = 'SET_PREV_SONG'
export const REMOVE_SONG = 'REMOVE_SONG'
export const SET_SONG_PROGRESS = 'SET_SONG_PROGRESS'

const initialState = {
    currSong: topTracks[0],
    tracks: [],
    nextSong: undefined,
    prevSong: undefined,
    isPlaying: true,
    songProgress: 0
}

export function playerReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {

        case SET_CURR_SONG:
            newState = { ...state, currSong: action.currSong }
            break
        case SET_TRACKS:
            newState = { ...state, tracks: action.tracks }
            break
        case IS_PLAYING:
            newState = { ...state, isPlaying: action.isPlaying }
            break
        case SET_NEXT_SONG:
            newState = { ...state, nextSong: action.nextSong }
            break
        case SET_PREV_SONG:
            newState = { ...state, prevSong: action.prevSong }
            break
        case SET_SONG_PROGRESS:
            newState = { ...state, songProgress: action.songProgress }
            break
        default:
    }

    return newState

}