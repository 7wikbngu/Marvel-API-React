import { FETCH } from '../actions/types';

export default function(state = {}, action){
    switch(action.type){
        case FETCH: 
            console.log("Fetched");
            return{
                ...state,
                characters: action.payload
            }

        default:
            return state;
    }
}