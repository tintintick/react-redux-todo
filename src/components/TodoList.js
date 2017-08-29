import {
	Todo
} from "./Todo";

const TodoList = ({
	todoList,
	onToggleClick,
}) => {
	<ul>
		{
			todoList.map((todoItme)=>{
			
					<Todo 
						key={todoItme.id} 
						{...todoItme} 
						onClick={()=>onToggleClick(todoItme.id)} 
					/>
			});
		}
	</ul>
};

export default TodoList;