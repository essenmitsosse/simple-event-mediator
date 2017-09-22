"use strict";

module.exports = function () {
	var eventsList = {};

	function addListener( eventName, callback ) {
		var currentEventCallbacks;

		if ( eventsList[ eventName ] === undefined ) {
			currentEventCallbacks = eventsList[ eventName ] = [];
		} else {
			currentEventCallbacks = eventsList[ eventName ];
		}

		currentEventCallbacks.push( callback );
	}

	function dispatchEvent( eventName, args ) {
		if ( eventsList[ eventName ] === undefined ) {
			return;
		}

		eventsList[ eventName ].forEach( function ( callback ) {
			callback( args );
		} );
	}

	return {
		addListener: addListener,
		dispatchEvent: dispatchEvent
	};
};
