import http from "./http";

// Movies
export const fetchMovies = () => http.get('/movies')
export const addMovie = (movie) => http.post('/movies', movie)
export const fetchMovie = (id) => http.get(`/movies/${id}`)
export const updateMovie = (id, movie) => http.put(`/movies/${id}`, movie)
export const deleteMovie = (id) => http.delete(`/movies/${id}`)

// Genres
export const fetchGenres = () => http.get('/genres')

// Users
export const register = (data) => http.post('/users', data)
export const login = (data) => http.post('/auth', data)