# Design patterns for Javascript

## CommonJS module patterns

Custom created CommonJS modules in a combination with browserify is a sensible and powerful way to create a modular project structure without loosing the incredible freedom and programming fun fun that javascript provides.

### Class

The function checks if it is created and if not it will return a new instance of itself. It uses the `new` method if you prefer that.

### Object

Just returns a object, nothing fancy.
The object will be static without a closure.

### Static

Returns a static [IIFE](https://en.wikipedia.org/wiki/Immediately-invoked_function_expression). Nothing fancy here either.

### Factory

Returns a object with a create function, the create function returns a object with a object argument. And it returns a new object each time create is called.

### Extendable Factory

Same as the factory class, but you can extend it with more functionality. When combined with a object merge function you can then pass other objects to the create function for custom objects. If you see the very nice advantages in this you should take a look at [Stampit](https://github.com/stampit-org/stampit).

Banan
