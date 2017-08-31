import {
	ADD_TODO,
	TOGGLE_TODO,
	SET_VISIBILITY_FILTER
} from "../constants";

let nextTodoId = 0;
const addTodo = (text) => {
	return {
		type: ADD_TODO,
		id: nextTodoId++,
		text,
	}
};

const toggleTodo = (id) => {
	return {
		type: TOGGLE_TODO,
		id,
	}
};

const setVisibility = (filter) => {
	return {
		type: SET_VISIBILITY_FILTER,
		visibilityFilter: filter,
	}
};

export {
	addTodo,
	toggleTodo,
	setVisibility,
};