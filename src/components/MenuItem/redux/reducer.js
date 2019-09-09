const SET_BURGER = 'SET_BURGER'

const initialState = {
    data: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_BURGER: {
            return {
                ...state,
                data: action.burger
            }
        }
        default: return state;
    }
}

export const setBurgerAction = burger => ({ type: SET_BURGER, burger });