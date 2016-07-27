(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/Dariusz/gits/hult-test/source/app.jsx":[function(require,module,exports){
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

},{}]},{},["/Users/Dariusz/gits/hult-test/source/app.jsx"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvRGFyaXVzei9naXRzL2h1bHQtdGVzdC9zb3VyY2UvYXBwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLENBQUMsSUFBSSxPQUFPLEdBQUc7Q0FDZCxhQUFhLEVBQUUsQ0FBQztFQUNmLE1BQU0sRUFBRSxZQUFZO0VBQ3BCLElBQUksRUFBRSxTQUFTO0VBQ2YsS0FBSyxFQUFFLGlCQUFpQjtFQUN4QixJQUFJLEVBQUUsUUFBUTtFQUNkLE9BQU8sRUFBRSxnQkFBZ0I7RUFDekIsS0FBSyxFQUFFLGtCQUFrQjtFQUN6QixZQUFZLEVBQUUsa1VBQWtVO0VBQ2hWLFFBQVEsRUFBRSxvQkFBb0I7R0FDN0I7RUFDRDtFQUNBLE1BQU0sRUFBRSxVQUFVO0VBQ2xCLEtBQUssRUFBRSxNQUFNO0VBQ2IsSUFBSSxFQUFFLGVBQWU7RUFDckIsT0FBTyxFQUFFLDBCQUEwQjtFQUNuQyxhQUFhLEVBQUUscUJBQXFCO0VBQ3BDLEtBQUssRUFBRSxxQkFBcUI7RUFDNUIsWUFBWSxFQUFFLDJTQUEyUztFQUN6VCxRQUFRLEVBQUUsa0JBQWtCO0dBQzNCO0VBQ0Q7RUFDQSxNQUFNLEVBQUUsVUFBVTtFQUNsQixLQUFLLEVBQUUsUUFBUTtFQUNmLElBQUksRUFBRSxPQUFPO0VBQ2IsT0FBTyxFQUFFLHNCQUFzQjtFQUMvQixhQUFhLEVBQUUscUJBQXFCO0VBQ3BDLEtBQUssRUFBRSxnQkFBZ0I7RUFDdkIsWUFBWSxFQUFFLHlQQUF5UDtFQUN2USxRQUFRLEVBQUUsa0JBQWtCO0dBQzNCLENBQUM7QUFDSixDQUFDLENBQUM7QUFDRjs7QUFFQSxDQUFDLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDOztDQUUxRCxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXHR2YXIgb3B0aW9ucyA9IHtcblx0dGh1bWJuYWlsRGF0YTogW3tcblx0XHRoZWFkZXI6ICdNb2R1bGUgQS1DJyxcblx0XHRzcGFuOiAnIChob21lKScsXG5cdFx0bW9udGg6ICdTZXB0ZW1iZXIgLSBNYXknLFxuXHRcdGNpdHk6ICdMb25kb24nLFxuXHRcdGNvdW50cnk6ICdVbml0ZWQgS2luZ2RvbScsXG5cdFx0dGl0bGU6ICdZb3VyIGhvbWUgY2FtcHVzJyxcblx0XHRkZXNjcml0cHRpb246ICdTdHVkZW50cyBjYW4gY2hvb3NlIGZyb20gZml2ZSBob21lIGNhbXB1c2VzIOKAkyBCb3N0b24sIFNhbiBGcmFuY2lzY28sIExvbmRvbiwgb3IgRHViYWkuIFlvdXIgaG9tZSBjYW1wdXMgaXMgd2hlcmUgeW91IGNvbXBsZXRlIHRoZSBjb3JlIG9mIHlvdXIgc3R1ZGllcyBhbmQgd2hlcmUgeW914oCZbGwgYmUgYmFzZWQgZm9yIGFib3V0IHRlbiBtb250aHMgb2YgdGhlIHllYXIuIFlvdSBjYW4gY2hvb3NlIHRvIHN0YXkgYXQgeW91ciBob21lIGNhbXB1cyBmb3IgdGhlIGVudGlyZSBsZW5ndGggb2YgeW91ciBwcm9ncmFtIGlmIHlvdSBwcmVmZXIgbm90IHRvIHJvdGF0ZS4nLFxuXHRcdGltYWdlVXJsOiAnaW1nL21vZHVsZS1BLUMuanBnJ1xuXHRcdH0sXG5cdFx0e1xuXHRcdGhlYWRlcjogJ01vZHVsZSBFJyxcblx0XHRtb250aDogJ0p1bmUnLFxuXHRcdGNpdHk6ICdTYW4gRnJhbmNpc2NvJyxcblx0XHRjb3VudHJ5OiAnVW5pdGVzIFN0YXRlcyBvZiBBbWVyaWNhJyxcblx0XHRyb3RhdGVJY29uVXJsOiAnaW1nL3JvdGF0ZS1pY29uLnBuZycsXG5cdFx0dGl0bGU6ICdZb3VyIGZpcnN0IHJvdGF0aW9uJyxcblx0XHRkZXNjcml0cHRpb246ICdJbiB5b3VyIHBlbnVsdGltYXRlIG1vZHVsZSwgTW9kdWxlIEQsIHlvdSBoYXZlIHRoZSBvcHRpb24gb2YgdGFraW5nIGVsZWN0aXZlcyBhbmQgc3BlbmRpbmcgc2l4IHdlZWtzIGF0IGFueSBvZiBIdWx04oCZcyBob21lIGNhbXB1c2VzLCBvciBvdXIgcm90YXRpb24gY2VudGVycyBpbiBTaGFuZ2hhaSBhbmQgTmV3IFlvcmsuIFlvdSBjYW4gY2hvb3NlIHRvIHN0YXkgZm9yIHRoZSBuZXh0IG1vZHVsZSBhbmQgZXh0ZW5kIHlvdXIgc3RheSB0byB0d2VsdmUgd2Vla3MgaWYgeW91IHByZWZlciB0byBvbmx5IHJvdGF0ZSBvbmNlLicsXG5cdFx0aW1hZ2VVcmw6ICdpbWcvbW9kdWxlLUQuanBnJ1xuXHRcdH0sXG5cdFx0e1xuXHRcdGhlYWRlcjogJ01vZHVsZSBEJyxcblx0XHRtb250aDogJ0F1Z3VzdCcsXG5cdFx0Y2l0eTogJ0R1YmFpJyxcblx0XHRjb3VudHJ5OiAnVW5pdGVkIEFyYWIgRW1pcmF0ZXMnLFxuXHRcdHJvdGF0ZUljb25Vcmw6ICdpbWcvcm90YXRlLWljb24ucG5nJyxcblx0XHR0aXRsZTogJ1doZXJlIHRvIG5leHQ/Jyxcblx0XHRkZXNjcml0cHRpb246ICdGb3IgeW91ciBmaW5hbCBtb2R1bGUsIE1vZHVsZSBFLCB5b3UgY2FuIGNob29zZSB0byB0YWtlIGVsZWN0aXZlcyBhbmQgc3BlbmQgc2l4IHdlZWtzIGF0IGFueSBvZiBIdWx04oCZcyBzZXZlbiBjYW1wdXNlcyB3b3JsZHdpZGUuIFRoYXQgaW5jbHVkZXMgYWxsIGZpdmUgb2Ygb3VyIGhvbWUgY2FtcHVzZXMsIGFuZCBvdXIgcm90YXRpb24gY2VudGVycyBpbiBTaGFuZ2hhaSwgTmV3IFlvcmssIGFuZCBBc2hyaWRnZSBFc3RhdGUsIFUuSy4nLFxuXHRcdGltYWdlVXJsOiAnaW1nL21vZHVsZS1FLmpwZydcblx0XHR9XVxufTtcblxuXG5cdHZhciBlbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChUaHVtYm5haWxMaXN0LCBvcHRpb25zKTtcblxuXHRSZWFjdERPTS5yZW5kZXIoZWxlbWVudCwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRodW1ibmFpbHMtd3JhcHBlcicpKTsiXX0=
