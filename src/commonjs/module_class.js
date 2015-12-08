"use strict";

var objectClass = function(opts) {
    if (!(this instanceof objectClass)) {
        return new objectClass(opts);
    }

    var _opts = opts || {};

    var privateFunction = function() {
        console.log("THIS IS PRIVATE");
    };

    this.publicFunction = function() {
        console.log("THIS IS PUBLIC");
    };

    this.opts = function() {
        return _opts;
    };

};

module.exports = objectClass;
