import React from 'react';
import FilterLink from "../container/FilterLink";
import {
	VisibilityFilters
} from "../constants";

const {
	SHOW_ALL,
	SHOW_UNDONE,
	SHOW_COMPLETED
} = VisibilityFilters;

const Footer = () => {
	return (
		<p>
			FILTER: {" "}
			<FilterLink filter={SHOW_ALL}>All</FilterLink> {", "}
			<FilterLink filter={SHOW_UNDONE}>Undone</FilterLink> {", "}
			<FilterLink filter={SHOW_COMPLETED}>Completed</FilterLink> 
		</p>
	);

};

export default Footer;