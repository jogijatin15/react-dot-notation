import React, { Component } from 'react';
import ListItem from './ListItem';
import Print from './Print';

class List extends Component {
	static Item = ListItem;
	static PrintItem = Print;

	render() {

		return (
			<ul>
				{this.props.children}
			</ul>
		)
	}
}

export default List;