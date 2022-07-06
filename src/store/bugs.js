import {createAction, createReducer} from "@reduxjs/toolkit";

export const bugAdded = createAction('bugAdded')
export const bugRemoved = createAction('bugRemoved')
export const bugResolved = createAction('bugResolved')

// Reducer
let lastId = 0

export const reducer = createReducer([], {
    [bugAdded.type]: (bugs, action) => {
        bugs.push({
            id: ++lastId,
            description: action.payload.description,
            resolved: false
        })
    },
    [bugRemoved.type]: (bugs, action) => {
        const index = bugs.findIndex((bug) => bug.id === action.payload.id)
        bugs.splice(index, 1)
    },
    [bugResolved.type]: (bugs, action) => {
        const index = bugs.findIndex((bug) => bug.id === action.payload.id)
        bugs[index].resolved = true
    }
})

