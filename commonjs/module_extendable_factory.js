"use strict";

var extendFactoryClass = (function() {

    // Factory object
    var _inst = function(opts) {
        var _opts = opts;
        var inst = {
            opts: function() {
                return _opts;
            }
        };
        return inst;
    };

    // Extend method
    var _extend = function(obj, props) {
        for(var prop in props) {
            if(props.hasOwnProperty(prop)) {
                obj[prop] = props[prop];
            }
        }
    };

    // Factory interface
    var _fact = {
        create: function(opts, extendables) {
            var obj = _inst(opts);
            if (!extendables) {
                return obj;
            }
            for (var i = 0; i < extendables.length; i++) {
                _extend(obj, extendables[i]);
            }
            return obj;
        }
    };

    return _fact;

})();

module.exports = extendFactoryClass;
