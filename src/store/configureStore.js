import { configureStore } from "@reduxjs/toolkit";
import reducer from './reducer'
import logger from "./middleware/logger";

export default function () {
    return configureStore({
        reducer,
        middleware:  (getDefaultMiddleware) => getDefaultMiddleware().concat(logger({ destination: 'console'}))
    })
}