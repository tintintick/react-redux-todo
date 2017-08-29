import AddTodo from "../container/AddTodoForm";
import VisibleTodoList from "../container/VisibleTodoList";
import Footer from "./Footer";

const App = () => {
	return (
		<div>
			<AddTodoForm />
			<VisibleTodoList />
			<Footer />
		</div>
	);
};