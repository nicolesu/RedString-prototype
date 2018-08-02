//watch the actions, and get our request to the backend
import axios from 'axios';
import { GET_EVENTS, ADD_EVENT, DELETE_EVENT, EVENTS_LOADING} from './types';

export const getEvents = () => dispatch => {
	dispatch(setEventsLoading());
	axios
		.get(`/api/items`)
		.then(res => dispatch({
			type: GET_EVENTS, 
			payload: res.data
		}))
};

export const addEvent = (item) => dispatch => {
	// return {
	// 	type: ADD_EVENT,
	// 	payload: item
	// };

	axios
		.post('/api/items', item)
		.then(res => dispatch ({
			type: ADD_EVENT,
			payload: res.data
		}))

};

export const deleteEvent = (id) => dispatch => {
	// return {
	// 	type: DELETE_EVENT,
	// 	payload: id
	// };

	axios.delete(`/api/items/${id}`).then(res => 
		dispatch({
			type: DELETE_EVENT,
			payload: id
		}))
};



export const setEventsLoading = () => {
	return {
		type: EVENTS_LOADING
	};

};
