"use strict";

module.exports = (function() {

    var _privateId = Math.random();
    var _opts = null;

    return {
        init: function(opts) {
            _opts = opts || {};
            return this;
        },

        opts: function() {
            return _opts;
        },

        getPrivateId: function() {
            return _privateId;
        }
    };

})();
