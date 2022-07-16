import axios from "axios";
const api = ({ dispatch }) => next => async action => {
    if (action.type !== 'apiCallBegan') return next(action)

    next(action)
    const {url, method, onSuccess, onError} = action.payload

    try {
        // Options
        const options = {
            baseURL: process.env.REACT_APP_API_URL,
            url,
            method
        }

        // API request
        const response = await axios.request(options)

        // Dispatch success
        dispatch({ type: onSuccess, payload: response.data})
    } catch(error) {
        // Dispatch error
        dispatch({ type: onError, payload: error})
    }
}

export default api