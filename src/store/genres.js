import {createSlice} from "@reduxjs/toolkit";
import {apiCallBegan} from "./api";
import moment from "moment";

const slice = createSlice({
    name: 'genres',
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        genresRequestFailed: (genres, action) => {
            genres.loading = false
        },
        genresReceived: (genres, action) => {
            genres.list = action.payload
            genres.loading = false
            genres.lastFetch = Date.now()
        },
        genresRequested: (genres, action) => {
            genres.loading = true
        },
        genreAdded: (genres, action) => {
            genres.list.push(action.payload)
        }
    }
})

export const {genreAdded, genresRequested, genresReceived, genresRequestFailed} = slice.actions
export default slice.reducer

// Action creators
const url = '/genres'
export const loadGenres = () => (dispatch, getState) => {
    const {lastFetch} = getState().entities.genres
    const diffInMinutes = moment().diff(moment(lastFetch), 'minutes')
    if (diffInMinutes < 10) return


    dispatch(apiCallBegan({
        url,
        onStart: genresRequested.type,
        onSuccess: genresReceived.type,
        onError: genresRequestFailed.type
    }))
}

export const addGenre = movie => apiCallBegan({
    url,
    method: 'post',
    data: movie,
    onSuccess: genreAdded.type
})