import React from 'react';
import FilterLink from '../containers/FilterLink'

const Footer = () => (
	<p>
		show:
		<FilterLink filter = "SHOW_ALL">All</FilterLink>
		{','}
		<FilterLink filter = "SHOW_COMPLETED">COMPLETED</FilterLink>
		{','}
		<FilterLink filter = "SHOW_ACTIVE">ACTIVE</FilterLink>
	</p>
)

export default Footer