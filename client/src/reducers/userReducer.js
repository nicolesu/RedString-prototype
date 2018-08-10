//where our state actually goes, and where we check our actions
import uuid from 'uuid';
import { GET_USERS, ADD_USER, DELETE_USER, USERS_LOADING} from '../actions/types';

const initialState = {
	users: [
	  { id:uuid(), name:'a', nickname:'aa', username: 'one', password:'1'},
	  { id:uuid(), name:'b', nickname:'bb', username: 'two', password:'1'},
	  { id:uuid(), name:'c', nickname:'cc', username: 'three', password:'1'},
	]
} 
// const initialState = {
// 	items: [],
// 	loading: false
// } 

export default function(state = initialState, action) {
	switch(action.type) {
		case GET_USERS:
			return {
				...state, //return current state
				users: action.payload,
				//loading: true
			};
		case DELETE_USER:
			return {
				...state,
				users: state.items.filter(item => item._id !== action.payload)
			}
		case ADD_USER:
			return {
				...state,
				users: [action.payload, ...state.users] //make a copy of the current state and add the new item (can't directly change it)
			}
		case USERS_LOADING:
			return {
				...state,
				//loading: true
			}
		default:
			return state;
	}

}