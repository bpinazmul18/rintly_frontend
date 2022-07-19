import jwtDecode from 'jwt-decode'
import http from "./http";
import config from "../config.json"

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

// Auth
export const login = async (data) => {
    const response = await http.post('/auth', data)
    localStorage.setItem(config.tokenKey, response.data)
}

export const loginWithJwt = (jwt) => localStorage.setItem(config.tokenKey, jwt)
export const logout = () => localStorage.clear()

export const getCurrentUser = () => {
    try {
        const jwt = localStorage.getItem(config.tokenKey)
        return jwtDecode(jwt)
      } catch (ex) {
        return null
      }
}

export const getJwt = () => localStorage.getItem(config.tokenKey)
