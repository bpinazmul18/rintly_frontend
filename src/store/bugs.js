import { createSlice } from "@reduxjs/toolkit";
import {createSelector} from "reselect"


// Reducer
let lastId = 0

const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        bugAdded: (bugs, action) => {
            bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            })
        },
        bugRemoved: (bugs, action) => {
            const index = bugs.findIndex((bug) => bug.id === action.payload.id)
            bugs.splice(index, 1)
        },
        bugResolved: (bugs, action) => {
            const index = bugs.findIndex((bug) => bug.id === action.payload.id)
            bugs[index].resolved = true
        }
    }
})

export const {bugAdded, bugRemoved, bugResolved} = slice.actions
export default slice.reducer

// Selector
export const getUnResolvedBugs = createSelector(
    state => state.entities.bugs,
    state => state.entities.projects,
    (bugs, projects) => bugs.filter(bug => !bug.resolved)
)

