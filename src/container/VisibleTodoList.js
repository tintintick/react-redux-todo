import {
	connect
} from "react-redux";

import {
	toggleTodo
} from "../actions";

import TodoList from "../components/TodoList";
import {
	VisibilityFilters
} from "../constants";

const {
	SHOW_ALL,
	SHOW_COMPLETED,
	SHOW_UNDONE
} = VisibilityFilters;

const getVisibleTodos = (todos, filter) => {
	console.log(todos, filter);
	switch (filter) {
		case SHOW_ALL:
			return todos;
		case SHOW_COMPLETED:
			return todos.filter(item => item.isCompleted);
		case SHOW_UNDONE:
			return todos.filter(item => !item.isCompleted);
		default:
			return todos
	}
};

const mapStateToProps = (state) => {
	return {
		todoList: getVisibleTodos(state.todos, state.filter)
	}
};

const mapDispatchToProps = (dispatch) => {
	return ({
		onToggleClick: (id) => {
			dispatch(toggleTodo(id));
		}
	});
};

let VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList);

export default VisibleTodoList;