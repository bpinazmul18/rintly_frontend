// Action types
const ADD_BUG = 'bugAdded'


// Actions
export const bugAdded = (description) => ({
    type: ADD_BUG,
    payload: {
        description
    }
})

let lastId = 0
export const reducer = (state=[], action) => {
    if (action.type === ADD_BUG) {
        return [...state, {
            id: ++lastId,
            description: action.payload.description,
            resolved: true,
        }]
    }

    return state
}