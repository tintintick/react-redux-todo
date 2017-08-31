import React from 'react';
import {
	connect
} from "react-redux";

import {
	addTodo
} from "../actions";

let AddTodoComponent = ({
	dispatch
}) => {
	let inputNode;
	return (
		<div>
			<form onSubmit={
				(event)=>{
					event.preventDefault();
					if (!inputNode.value.trim()) {
						return;
					}
					dispatch(addTodo(inputNode.value));
					inputNode.value="";
				}}>
				<input ref={(node)=>{inputNode=node;}} />
				<button type="submit">Add Todo</button>
			</form>
		</div>
	);
};

let AddTodoForm = connect()(AddTodoComponent);
export default AddTodoForm;