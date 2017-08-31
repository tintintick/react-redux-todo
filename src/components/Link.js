import React from 'react';
const Link = ({
	active,
	onFilterClick,
	children
}) => {
	if (active) {
		return (<span>{children}</span>);
	}
	return (
		<a href='#' onClick={(e)=>{e.preventDefault;onFilterClick();}}>
			{children}
		</a>
	);
};

export default Link;