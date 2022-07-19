import http from "./http";

export const fetchGenres = () => http.get('/genres')