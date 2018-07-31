//where our state actually goes, and where we check our actions
import uuid from 'uuid';
import { GET_EVENTS, ADD_EVENT, DELETE_EVENT} from '../actions/types';

const initialState = {
	items: [
	  { id:uuid(), name:'VR Game'},
      { id:uuid(), name:'Escape Room'},
      { id:uuid(), name:'KTV'},
      { id:uuid(), name:'Happy Hour'}
	]
} 

export default function(state =initialState, action) {
	switch(action.type) {
		case GET_EVENTS:
			return {
				...state
			};
		case DELETE_EVENT:
			return {
				...state,
				items: state.items.filter(item => item.id !== action.payload)
			}
		default:
			return state;
	}

}