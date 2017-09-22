"use strict";

var chai = require( "chai" ),
	expect = chai.expect,
	sinonChai = require( "sinon-chai" ),
	sinon = require( "sinon" ),
	getEventMediator = require( "../lib/getEventMediator" ),
	simpleEventMediator = require( "../simple-event-mediator" );

chai.should();
chai.use( sinonChai );

describe( "Event registery and call", function () {
	beforeEach( function () {
		this.eventHandler = getEventMediator();
	} );

	it( "Should call registered events when an event is dispatched", function () {
		var spy = sinon.spy();
		this.eventHandler.addListener( "myEvent", spy );
		this.eventHandler.dispatchEvent( "myEvent" );

		expect( spy )
			.to.have.been.called;
	} );

	it( "Shouldn’t call events with different names", function () {
		var spy = sinon.spy();
		this.eventHandler.addListener( "myEvent", spy );
		this.eventHandler.dispatchEvent( "anotherEvent" );

		expect( spy )
			.to.have.not.been.called;
	} );

	it( "Should call multiple events with the same name", function () {
		var spy = sinon.spy(),
			spy2 = sinon.spy();

		this.eventHandler.addListener( "myEvent", spy );
		this.eventHandler.addListener( "myEvent", spy2 );
		this.eventHandler.dispatchEvent( "myEvent" );

		expect( spy )
			.to.have.been.called;

		expect( spy2 )
			.to.have.been.called;
	} );
} );

describe( "Singleton implementation", function () {
	it( "Should call registered events when an event is dispatched", function () {
		var spy = sinon.spy();

		simpleEventMediator.addListener( "myEvent", spy );
		simpleEventMediator.dispatchEvent( "myEvent" );

		expect( spy )
			.to.have.been.called;
	} );
} );
