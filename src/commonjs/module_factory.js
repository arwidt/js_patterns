"use strict";

var factoryClass = (function() {

    // Factory object
    var _inst = function(opts) {
        var _opts = opts || {};
        var inst = {
            opts: function() {
                return _opts;
            }
        };
        return inst;
    };

    // Factory interface
    var _fact = {
        create: function(opts) {
            return _inst(opts);
        }
    };

    return _fact;

})();

module.exports = factoryClass;
