import * as actions from "./actionTypes";

export const bugAdded = (description) => ({
    type: actions.BUG_ADDED,
    payload: {
        description
    }
})

export const bugRemoved = (bugId) => ({
    type: actions.BUG_REMOVED,
    payload: {
        id: bugId
    }
})

export const bugResolved = (bugId) => ({
    type: actions.BUG_RESOLVED,
    payload: {
        id: bugId
    }
})