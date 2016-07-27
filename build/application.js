	var options = {
	thumbnailData: [{
		header: 'Module A-C',
		span: ' (home)',
		month: 'September - May',
		city: 'London',
		country: 'United Kingdom',
		title: 'Your home campus',
		descritption: 'Students can choose from five home campuses – Boston, San Francisco, London, or Dubai. Your home campus is where you complete the core of your studies and where you’ll be based for about ten months of the year. You can choose to stay at your home campus for the entire length of your program if you prefer not to rotate.',
		imageUrl: 'img/module-A-C.jpg'
		},
		{
		header: 'Module E',
		month: 'June',
		city: 'San Francisco',
		country: 'Unites States of America',
		rotateIconUrl: 'img/rotate-icon.png',
		title: 'Your first rotation',
		descritption: 'In your penultimate module, Module D, you have the option of taking electives and spending six weeks at any of Hult’s home campuses, or our rotation centers in Shanghai and New York. You can choose to stay for the next module and extend your stay to twelve weeks if you prefer to only rotate once.',
		imageUrl: 'img/module-D.jpg'
		},
		{
		header: 'Module D',
		month: 'August',
		city: 'Dubai',
		country: 'United Arab Emirates',
		rotateIconUrl: 'img/rotate-icon.png',
		title: 'Where to next?',
		descritption: 'For your final module, Module E, you can choose to take electives and spend six weeks at any of Hult’s seven campuses worldwide. That includes all five of our home campuses, and our rotation centers in Shanghai, New York, and Ashridge Estate, U.K.',
		imageUrl: 'img/module-E.jpg'
		}]
};


	var element = React.createElement(ThumbnailList, options);

	ReactDOM.render(element, document.querySelector('.thumbnails-wrapper'));
var Thumbnail = React.createClass({displayName: "Thumbnail",
		render: function() {
			return 	React.createElement("div", {className: "col-sm-6 col-md-4"}, 
								React.createElement("div", {className: "thumbnail"}, 
									React.createElement("h4", null, this.props.header, React.createElement("span", null, this.props.span)), 
									React.createElement("img", {src: this.props.imageUrl}), 
									React.createElement("p", {className: "month"}, this.props.month), 
									React.createElement("p", {className: "city"}, this.props.city), 
									React.createElement("p", {className: "country"}, this.props.country), 
		    					React.createElement("div", {className: "caption"}, 
			      				React.createElement("h3", null, this.props.title), 
			      				React.createElement("p", {className: "description"}, this.props.descritption)
		    					)
		  					)
		  				)
		}
	});
var ThumbnailList = React.createClass({displayName: "ThumbnailList",
		render: function() {
			var list = this.props.thumbnailData.map(function(thumbnailProps){
				return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
			});
			return 	React.createElement("div", null, 
							list
							);
		}
	});