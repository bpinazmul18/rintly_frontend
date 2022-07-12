import {configureStore} from "@reduxjs/toolkit";
import reducer from './reducer'
import logger from "./middleware/logger";
import toast from "./middleware/toast";
import api from "./middleware/api";
import func from "./middleware/func";

export default function createStore () {
    return configureStore({
        reducer,
        // middleware:  [...getDefaultMiddleware(), logger, toast, api]
        // middleware: [logger('Console'), toast]
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: api,
            },
            serializableCheck: false
        })
    })
}