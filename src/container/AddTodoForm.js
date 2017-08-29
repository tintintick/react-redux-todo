import {
	bindActionCreators
} from "redux";

import {
	connect
} from "react-redux";

import {
	addTodo
} from "../actions";

let AddTodoComponent = () => {
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
				}
			}>
				<input ref={(node)=>{inputNode=node;}} />
				<button type="submit">Add Todo</button>
			</form>
		</div>
	);
};

// const mapStateToProps = (state) => {
// 	return null;
// };

// const mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators({
// 		onAddBtnClick: addTodo,
// 	}, dispatch);
// };

let AddTodoForm = connect(
	// mapStateToProps,
	// mapDispatchToProps
)(AddTodoComponent);
export default AddTodoForm;