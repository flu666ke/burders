const SET_BURGERS = 'SET_BURGERS';

const initialState = {
    burgers: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_BURGERS: {
            return {
                ...state,
                burgers: action.burgers
            }
        }
        default: return state;
    }
}

export const setBurgersAction = burgers => ({ type: SET_BURGERS, burgers });
