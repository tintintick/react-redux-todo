import {
	TODO_TYPE
} from "../actions";

const todo = (state, action) => {
	switch (action.type) {
		case TODO_TYPE.ADD_TODO:
			return {
				id: action.id,
				text: action.text,
				isCompleted: false
			}
		case TODO_TYPE.TOGGLE_TODO:
			if (state.id !== action.id) {
				return state;
			}
			return {
				...state,
				isCompleted: !state.isCompleted,
			}
		default:
			return state;
	}
};

const todos = (state = [], action) => {
	switch (action.type) {
		case TODO_TYPE.ADD_TODO:
			return [
				...state,
				todo(undefined, action)
			]
		case TODO_TYPE.TOGGLE_TODO:
			return state.map(itemState => todo(itemState, action))
		default:
			return state;
	}
};

export default todos;