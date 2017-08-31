import {
	VisibilityFilters,
	SET_VISIBILITY_FILTER
} from "../constants";

const {
	SHOW_ALL
} = VisibilityFilters;

const filter = (state = SHOW_ALL, action) => {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.visibilityFilter;
		default:
			return state;
	}
}

export default filter;