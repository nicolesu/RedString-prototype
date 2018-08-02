//where our state actually goes, and where we check our actions
//import uuid from 'uuid';
import { GET_EVENTS, ADD_EVENT, DELETE_EVENT, EVENTS_LOADING} from '../actions/types';

// const initialState = {
// 	items: [
// 	  { id:uuid(), name:'VR Game', description:'one', location: 'park', time:'1'},
//       { id:uuid(), name:'Escape Room', description:'two', location: 'park', time:'2'},
//       { id:uuid(), name:'KTV', description:'three', location: 'park', time:'3'},
//       { id:uuid(), name:'Happy Hour', description:'four', location: 'park', time:'4'}
// 	]
// } 
const initialState = {
	items: [
	  // { id:uuid(), name:'VR Game', description:'one', location: 'park', time:'1'},
   //    { id:uuid(), name:'Escape Room', description:'two', location: 'park', time:'2'},
   //    { id:uuid(), name:'KTV', description:'three', location: 'park', time:'3'},
   //    { id:uuid(), name:'Happy Hour', description:'four', location: 'park', time:'4'}
	],
	loading: false
} 

export default function(state = initialState, action) {
	switch(action.type) {
		case GET_EVENTS:
			return {
				...state, //return current state
				items: action.payload,
				loading: true
			};
		case DELETE_EVENT:
			return {
				...state,
				items: state.items.filter(item => item._id !== action.payload)
			}
		case ADD_EVENT:
			return {
				...state,
				items: [action.payload, ...state.items] //make a copy of the current state and add the new item (can't directly change it)
			}
		case EVENTS_LOADING:
			return {
				...state,
				loading: true
			}
		default:
			return state;
	}

}