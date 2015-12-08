var stampit = require('stampit');

var robot = stampit().enclose({
    process: function() {
        console.log("io");
    }
});

module.exports = robot;
