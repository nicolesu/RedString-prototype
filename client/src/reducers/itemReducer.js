//where our state actually goes, and where we check our actions
import uuid from 'uuid';

const initialState = {
	items: [
	  { id:uuid(), name:'VR Game'},
      { id:uuid(), name:'Escape Room'},
      { id:uuid(), name:'KTV'},
      { id:uuid(), name:'Happy Hour'}
	]
} 