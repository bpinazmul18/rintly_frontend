import { combineReducers } from "redux";
import bugsReducer from "./bugs"
import projectsReducer from "./projects"
import usersReducer from "./users"
import moviesReducer from "./movies"
import genresReducer from "./genres"

export default combineReducers({
    bugs: bugsReducer,
    projects: projectsReducer,
    users: usersReducer,
    movies: moviesReducer,
    genres: genresReducer
})