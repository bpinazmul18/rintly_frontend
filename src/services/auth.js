import http from "./http";
import config from "../config.json";
import jwtDecode from "jwt-decode";

const getJwt = () => localStorage.getItem(config.tokenKey)
http.setJwt(getJwt())

const login = async (data) => {
    const response = await http.post('/auth', data)
    localStorage.setItem(config.tokenKey, response.data)
}

const loginWithJwt = (jwt) => localStorage.setItem(config.tokenKey, jwt)
const logout = () => localStorage.clear()

const getCurrentUser = () => {
    try {
        const jwt = localStorage.getItem(config.tokenKey)
        return jwtDecode(jwt)
    } catch (ex) {
        return null
    }
}

const auth = {
    login,
    logout,
    loginWithJwt,
    getCurrentUser,
    getJwt
}

export default auth