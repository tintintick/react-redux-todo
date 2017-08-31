import React from 'react';
import FilterLink from "../container/FilterLink";

const Footer = () => {
	<p>
		FILTER:{" "}
		<FilterLink filter="SHOW_ALL">All</FilterLink>
		{", "}
		<FilterLink filter="SHOW_UNDONE">Undone</FilterLink>
		{", "}
		<FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
	</p>
};

export default Footer;