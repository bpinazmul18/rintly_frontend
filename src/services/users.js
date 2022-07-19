import http from "./http";

export const register = (data) => http.post('/users', data)