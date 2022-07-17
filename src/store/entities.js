import { combineReducers } from "redux";
import bugsReducer from "./bugs"
import projectsReducer from "./projects"
import usersReducer from "./users"
import moviesReducer from "./movies"

export default combineReducers({
    bugs: bugsReducer,
    projects: projectsReducer,
    users: usersReducer,
    movies: moviesReducer
})