import React from 'react';
const Todo = ({
	onClick,
	isCompleted,
	text
}) => {
	return (
		<li onClick = {onClick}
			style = {{textDecoration: isCompleted ? "line-through" : "none",cursor: isCompleted ? 'default' : 'pointer',}}>
			{text}
		</li>
	);
};

export default Todo;