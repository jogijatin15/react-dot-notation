import React, { Component } from 'react';

class Menu extends Component {

	render() {
		const { items } = this.props;

		return (
			<ul>
				{
					items.map((item, index) => {
						return <li key={index}>{item}</li>;
					})
				}
			</ul>
		)
	}
}

export default Menu;