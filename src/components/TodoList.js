import React from 'react';
import Todo from "./Todo";

const TodoList = ({
	todoList,
	onToggleClick,
}) => {
	return (
		<ul>
		{todoList.map((todoItme)=>
			<Todo {...todoItme} key={todoItme.id} onClick={() => onToggleClick(todoItme.id)}/>
		)}
		</ul>
	)
}

export default TodoList;