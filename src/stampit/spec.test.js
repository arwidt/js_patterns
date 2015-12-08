'use strict';

describe("Stampit Modules", function () {

    it("should pass a trivial test", function () {
        expect(true).toBe(true);
    });

    describe("ROBOT example", function () {

        it("should return a defined robot", function () {
            var robot = require('./module_robot.js');
            expect(robot).toBeDefined();
        });

    });

});
