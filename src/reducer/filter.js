import {
	TODO_TYPE
} from "../actions";

const filter = (state = "SHOW_ALL", action) => {
	switch (action.type) {
		case TODO_TYPE.SET_VISIBILITY_FILTER:
			return action.visibilityFilter;
		default:
			return state;
	}
}

export default filter;