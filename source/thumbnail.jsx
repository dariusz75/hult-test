var React = require('react');


var Thumbnail = React.createClass({
		render: function() {
			return 	<div className="col-sm-6 col-md-4">
								<div className="thumbnail">
									<h4>{this.props.header}<span>{this.props.span}</span></h4>
									<img src={this.props.imageUrl} />
									<p className="month">{this.props.month}</p>
									<p className="city">{this.props.city}</p>
									<p className="country">{this.props.country}</p>
		    					<div className="caption">
			      				<h3>{this.props.title}</h3>
			      				<p className="description">{this.props.descritption}</p>
		    					</div>
		  					</div>
		  				</div>
		}
	});

module.exports = Thumbnail;