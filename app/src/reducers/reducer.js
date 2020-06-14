import { GOT_DATA } from "../actions"


const initialState = {
    players:[],
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GOT_DATA:
            return {
                ...state,
                players:[...state.players, action.payload]
            }
        default:
            return state
    }
}