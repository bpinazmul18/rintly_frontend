import {createSlice} from "@reduxjs/toolkit";
import moment from "moment";
import {apiCallBegan} from "./api";


const slice = createSlice({
    name: 'movies',
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        moviesRequestFailed: (movies, action) => {
            movies.loading = false
        },
        moviesReceived: (movies, action) => {
            movies.list = action.payload
            movies.loading = false
            movies.lastFetch = Date.now()
        },
        moviesRequested: (movies, action) => {
          movies.loading = true
        },
        movieAdded: (movies, action) => {
            movies.list.push(action.payload)
        },
        movieRemoved: (movies, action) => {
            const index = movies.list.findIndex((movie) => movie.id === action.payload.id)
            movies.list.splice(index, 1)
        },
        movieLiked: (movies, action) => {
            const index = movies.list.findIndex((movie) => movie.id === action.payload.id)
            movies.list[index].liked = !movies.list[index].liked
        }
    }
})

export const {movieLiked, movieRemoved, movieAdded, moviesRequested, moviesReceived, moviesRequestFailed} = slice.actions
export default slice.reducer

// Action creators
const url = '/movies'
export const loadMovies = () => (dispatch, getState) => {
    const {lastFetch} = getState().entities.movies
    const diffInMinutes = moment().diff(moment(lastFetch), 'minutes')
    if (diffInMinutes < 10) return


    dispatch(apiCallBegan({
        url,
        onStart: moviesRequested.type,
        onSuccess: moviesReceived.type,
        onError: moviesRequestFailed.type
    }))
}

export const addMovie = movie => apiCallBegan({
    url,
    method: 'post',
    data: movie,
    onSuccess: movieAdded.type
})