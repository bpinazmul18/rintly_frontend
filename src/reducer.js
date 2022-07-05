import * as actions from './actionTypes'

let lastId = 0

export default function reducer (state = [], action) {
    switch (action.type) {
        case actions.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ]
        case actions.BUG_REMOVED:
            return state.filter((bug) => bug.id !== action.payload.id)

        default:
            return state
    }

    // comment out for switch case
    // if (action.type === 'bugAdded') {
    //     return [
    //         ...state,
    //         {
    //             id: ++lastId,
    //             description: action.payload.description,
    //             resolved: false
    //         }
    //     ]
    // }
    //
    // else if (action.type === 'bugRemoved') {
    //     return state.filter((bug) => bug.id !== action.payload.id)
    // }
    //
    // return state
}