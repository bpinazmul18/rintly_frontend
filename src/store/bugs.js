import { createSlice } from "@reduxjs/toolkit";
import {createSelector} from "reselect"
import {apiCallBegan} from "./api";

// Reducer
let lastId = 0

const slice = createSlice({
    name: 'bugs',
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        bugsReceived: (bugs, action) => {
          bugs.list = action.payload
        },
        bugAssignedToUser: (bugs, action) => {
            const {bugId, userId} = action.payload
            const index = bugs.list.findIndex(bug => bug.id === bugId)

            bugs.list[index].userId = userId
        },
        bugAdded: (bugs, action) => {
            bugs.list.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            })
        },
        bugRemoved: (bugs, action) => {
            const index = bugs.list.findIndex((bug) => bug.id === action.payload.id)
            bugs.splice(index, 1)
        },
        bugResolved: (bugs, action) => {
            const index = bugs.list.findIndex((bug) => bug.id === action.payload.id)
            bugs[index].resolved = true
        }
    }
})

export const {bugAdded, bugRemoved, bugResolved, bugAssignedToUser, bugsReceived} = slice.actions
export default slice.reducer

// Action creators
const url = '/movies'
export const loadBugs = () => apiCallBegan({
    url,
    onSuccess: bugsReceived.type
})


// Selector
export const getUnResolvedBugs = createSelector(
    state => state.entities.bugs,
    state => state.entities.projects,
    (bugs, projects) => bugs.filter(bug => !bug.resolved)
)

export const getBugsByUser = userId => createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => bug.userId === userId)
)
