var React = require('react');

var Base = React.createClass({
	render: function(){
		return (
		<div>
			<h1>Header</h1>
			<div>
				{this.props.children}
			</div>
			<h1>Footer</h1>
		</div>

		)
	}
});

module.exports = Base;