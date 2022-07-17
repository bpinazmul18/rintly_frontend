import http from "./http";

export const fetchMovies = () => http.get('/movies')
export const fetchMovie = (id) => http.get(`/movies/${id}`)
export const deleteMovie = (id) => http.delete(`/movies/${id}`)
export const fetchGenres = () => http.get('/genres')


export const login = (data) => http.post('/auth', data)