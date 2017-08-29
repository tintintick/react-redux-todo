const TODO_TYPE = {
	ADD_TODO: "ADD_TODO",
	TOGGLE_TODO: "TOGGLE_TODO",
	SET_VISIBILITY_FILTER: "SET_VISIBILITY_FILTER"
};

let nextTodoId = 0;
const addTodo = (text) => {
	return {
		type: TODO_TYPE.ADD_TODO,
		id: nextTodoId++,
		text,
	}
};

const toggleTodo = (id) => {
	return {
		type: TODO_TYPE.TOGGLE_TODO,
		id,
	}
};

const setVisibility = (filter) => {
	return {
		type: TODO_TYPE.SET_VISIBILITY_FILTER,
		visibilityFilter: filter,
	}
};

export {
	addTodo,
	toggleTodo,
	setVisibility,
	TODO_TYPE
};