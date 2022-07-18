import { createSlice } from "@reduxjs/toolkit";
import {createSelector} from "reselect"
import {apiCallBegan} from "./api"
import moment from "moment"

// Reducer
const slice = createSlice({
    name: 'bugs',
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        bugsRequestFailed: (bugs, action) => {
            bugs.loading = false
        },

        bugsRequested: (bugs, action) => {
          bugs.loading = true
        },

        bugsReceived: (bugs, action) => {
          bugs.list = action.payload
          bugs.loading = false
          bugs.lastFetch = Date.now()
        },
        bugAssignedToUser: (bugs, action) => {
            const {bugId, userId} = action.payload
            const index = bugs.list.findIndex(bug => bug.id === bugId)

            bugs.list[index].userId = userId
        },
        bugAdded: (bugs, action) => {
            bugs.list.push(action.payload)
        },
        bugRemoved: (bugs, action) => {
            const index = bugs.list.findIndex((bug) => bug.id === action.payload.id)
            bugs.splice(index, 1)
        },
        bugResolved: (bugs, action) => {
            // const index = bugs.list.findIndex((bug) => bug.id === action.payload.id)
            // bugs.list[index].resolved = true

            return bugs.list.filter(bug => bug.id === action.payload.id ? bug.resolved = true : bug)
        }
    }
})

export const {bugAdded, bugRemoved, bugResolved, bugAssignedToUser, bugsReceived, bugsRequested, bugsRequestFailed} = slice.actions
export default slice.reducer

// Action creators
const url = '/bugs'
export const loadBugs = () => (dispatch, getState) => {
    const {lastFetch} = getState().entities.bugs
    const diffInMinutes = moment().diff(moment(lastFetch), 'minutes')
    if (diffInMinutes < 10) return


    return dispatch(apiCallBegan({
        url,
        onStart: bugsRequested.type,
        onSuccess: bugsReceived.type,
        onError: bugsRequestFailed.type
    }))
}

export const addBug = bug => apiCallBegan({
    url,
    method: 'post',
    data: bug,
    onSuccess: bugAdded.type
})

export const resolvedBug = (id) => apiCallBegan({
    url: url+'/'+id,
    method: 'patch',
    data: {resolved: true},
    onSuccess: bugResolved.type
})


// Selector
export const getUnResolvedBugs = createSelector(
    state => state.entities.bugs,
    state => state.entities.projects,
    (bugs, projects) => bugs.list.filter(bug => !bug.resolved)
)

export const getBugsByUser = userId => createSelector(
    state => state.entities.bugs,
    bugs => bugs.list.filter(bug => bug.userId === userId)
)
