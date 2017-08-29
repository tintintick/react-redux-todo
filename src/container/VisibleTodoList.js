import {
	connect
} from "react-redux";

import {
	toggleTodo
} from "../actions";

import {
	bindActionCreators
} from "redux";

import TodoList from "../components/TodoList";

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case "SHOW_COMPLETED":
			return todos.filter((item) => {
				return item.isCompleted
			});
		case "SHOW_UNDONE":
			return todos.filter((item) => {
				return !item.isCompleted
			});
		case "SHOW_ALL":
			return todos;
	}
};

const mapStateToProps = (state) => {
	return {
		todoList: getVisibleTodos(state.todos, state.visibilityFilter);
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
	mapDispatchToProps)(TodoList);

export default VisibleTodoList;