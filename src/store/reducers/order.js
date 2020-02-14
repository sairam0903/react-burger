import * as actionTypes from '../actions/actionTypes';

const initialState = {
    someThingElse: true
};

const order = (state = initialState, action) => {
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

export default order;
