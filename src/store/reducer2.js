import * as actionTypes from './actionTypes';
import { combineReducers } from 'redux';
import reducer from './reducer';

const initialState = {
    someThingElse: true
};

const reducer2 = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    reducer,
    reducer2
});

export default rootReducer;
