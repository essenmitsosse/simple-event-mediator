# Simple Event Handler

[![Build Status](https://travis-ci.org/essenmitsosse/simple-event-handler.svg)](https://travis-ci.org/essenmitsosse/simple-event-handler) [![Coverage Status](https://coveralls.io/repos/github/essenmitsosse/simple-event-handler/badge.svg)](https://coveralls.io/github/essenmitsosse/simple-event-handler) [![Dependency Status](https://david-dm.org/essenmitsosse/simple-event-handler.svg)](https://david-dm.org/essenmitsosse/simple-event-handler)

A minimal singleton observer module in vanilla javascript.

# Usage

```javascript
var callback = function() {
    console.log( "Callback" );
};

eventHandler.addListener( "myEvent", callback );
eventHandler.dispatchEvent( "myEvent" );
```
