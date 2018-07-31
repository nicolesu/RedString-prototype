//watch the actions, and get our request to the backend
import { GET_EVENTS, ADD_EVENT, DELETE_EVENT} from './types';

export const getEvents = () => {
	return {
		type: GET_EVENTS
		// payload: res.data
	};
};

export const deleteEvent = (id) => {
	return {
		type: DELETE_EVENT,
		payload: id
	};
};
