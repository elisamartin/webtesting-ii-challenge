import React from 'react';

export default class Display extends React.Component {
	render() {
		return (
			<div>
				<div data-testid="strikes">strikes: {this.props.strikes}</div>
				<div data-testid="balls">balls: {this.props.balls}</div>
			</div>
		);
	}
}
