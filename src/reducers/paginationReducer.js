import { PAGINATION } from '../actions/types';

const initialState = {
    index : {
        startIndex: 0,
        endIndex: 19
    }
};

export default function(state = initialState, action){
    switch(action.type){
        case PAGINATION:
            console.log("PAGINATION REDUCER", action);
            return {
                ...state,
                index: action.payload
            }

        default:
            return state;
    }
}