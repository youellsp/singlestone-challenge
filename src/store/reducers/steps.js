import { GET_STEPS, SET_STEPS } from '../actionTypes';

const initialState = {
    steps: [],
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_STEPS: {
            return {
                ...state,
                steps: action.payload,
                loading: true
            };
        }
        case SET_STEPS: {
            return {
                ...state,
                steps: action.payload,
                loading: false
            };
        }
        default:
            return state;
    }
}