import axios from "axios"
import * as actions from "../api"


const api = ({ dispatch }) => next => async action => {
    if (action.type !== actions.apiCallBegan.type) return next(action)

    const {url, method, onStart, onSuccess, onError} = action.payload
    if (onStart) dispatch({ type: onStart })

    next(action)

    try {
        // Options
        const options = {
            baseURL: process.env.REACT_APP_API_URL,
            url,
            method
        }

        // API request
        const response = await axios.request(options)

        // General
        dispatch({ type: actions.apiCallSuccess.type, payload: response.data})
        // specific
        if (onSuccess)
            dispatch({ type: onSuccess, payload: response.data})
    } catch(error) {
        // General
        dispatch({ type: actions.apiCallFailed, payload: error.message})

        // specific
        if (onError)
            dispatch({ type: onError, payload: error.message})
    }
}

export default api