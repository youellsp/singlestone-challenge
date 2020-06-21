import { GET_STEPS, SET_STEPS } from './actionTypes';
import singleStoneApiUrl from '../constants/api';
import { processSteps } from '../utilities/steps';

export const getSteps = () => ({
    type: GET_STEPS,
    payload: []
});

export const setSteps = (data) => ({
    type: SET_STEPS,
    payload: data
});

export function loadSteps() {
    return function (dispatch) {
        dispatch(getSteps());

        return fetch(singleStoneApiUrl)
            .then(response => response.json())
            .then(json => processSteps(json))
            .then(processedJson => dispatch(setSteps(processedJson)));
    }
}
