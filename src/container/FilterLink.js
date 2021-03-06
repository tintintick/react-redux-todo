import {
	connect
} from "react-redux";

import Link from "../components/Link";
import {
	setVisibility
} from "../actions";

const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.filter,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return ({
		onFilterClick: (filter) => {
			dispatch(setVisibility(ownProps.filter));
		}
	});
};

const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(Link);

export default FilterLink;