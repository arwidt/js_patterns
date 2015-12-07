'use strict';

describe('CommonJS modules', function() {

    describe("Module Object Pattern", function () {

        it("it should return a instance of a single object", function() {
            var mod_obj = require('./module_object.js');
            mod_obj.init({
                id: "random_id"
            });

            expect(mod_obj).toBeDefined();
            expect(mod_obj._opts.id).toBe("random_id");
        });

        it("should return the same object if called again", function () {

            var mod_obj2 = require('./module_object.js');
            expect(mod_obj2._opts.id).toBe("random_id");

        });

    });

    describe("Module Static Pattern", function () {

        it("should return a static closure object", function () {

            var staticModule = require('./module_static.js');

            expect(staticModule.init({
                name: "staticModule"
            })).toBe(staticModule);

        });

        it("should return the same instance every time", function() {
            var staticModule = require('./module_static.js');
            var staticModule2 = require('./module_static.js');

            expect(staticModule.getPrivateId()).toBe(staticModule2.getPrivateId());
        });

    });

    describe("Module Factory Pattern", function () {

        var factoryModule = require('./module_factory.js');
        var obj1, obj2;

        it("should have .create() function", function () {
            expect(typeof factoryModule.create).toBe('function');
        });

        it("create() should take a argument", function () {
            expect(factoryModule.create.length).toBe(1);
        });

        it("create() should return a object when called", function () {
            var id = Math.random();
            obj1 = factoryModule.create({id: id});
            expect(obj1.opts().id).toBe(id);
        });

        it("create() should return a unique object when called", function () {
            var id = Math.random();
            obj2 = factoryModule.create({id: id});
            expect(obj2.opts().id).not.toBe(obj1.opts().id);
        });

    });

    describe("Module Class Pattern", function () {

        var classModule = require('./module_class.js');
        var class1, class2;

        it("should return a object when executed", function () {
            var id = Math.random();
            class1 = classModule({id: id});
            expect(class1.opts().id).toBe(id);
        });

        it("should return a unique object when executed", function () {
            var id = Math.random();
            class2 = classModule({id: id});
            expect(class2.opts().id).toBe(id);
            expect(class2.opts().id).not.toBe(class1.opts().id);
        });

    });

    describe("Module Extendable Factory Pattern", function () {

        var eFactModule = require('./module_extendable_factory.js');
        var c1, c2;
        var obj = {
            state: "STATE",
            add: function(a, b) {
                return a + b;
            }
        };
        var obj2 = {
            state: "ETATS",
            multiply: function(a, b) {
                return a * b;
            }
        };
        var opts = {
            id: Math.random()
        };

        it("should return a single class object when called", function () {
            c1 = eFactModule.create(opts);
            expect(c1.opts().id).toBe(opts.id);
        });

        it("should be able to extend the class with another object", function () {

            c1 = eFactModule.create(opts, [obj]);
            expect(c1.opts().id).toBe(opts.id);
            expect(c1.state).toBe("STATE");
            expect(c1.add(1, 3)).toBe(4);

        });

        it("should be able to extend with more than one object, and should take priority in order", function () {

            c2 = eFactModule.create(opts, [obj, obj2]);
            expect(c2.opts().id).toBe(opts.id);
            expect(c2.state).toBe("ETATS");
            expect(c2.add(34, 34)).toBe(34 + 34);
            expect(c2.multiply(23, 10)).toBe(23 * 10);

        });


    });

});
