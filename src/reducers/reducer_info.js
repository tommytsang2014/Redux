import {FETCH_FORM} from '../actions';

export default function(state = {}, action){
	switch(action.type){
		case FETCH_FORM:
			return action.payload;
		default:
			return state;
	}
}