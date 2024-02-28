/**
 * Higher order functions:
 * Functions that either take in functions as parameters or return functions
 * e.g. map, filter
 */

/**
 * An arrow function does not create its own `this`.
 * It inherits (adopts) the same `this` as its parent (container).
 * A function expression will create its own `this`.
 * A function expression will create its own `this`.
 * The above is the reason why arrow functions are not used for methods in an object.
 */

/**
 * 8 bits -> 1 byte
 * 1024 bytes -> 1 kilobyte
 * 1024 kb -> 1 megabyte
 * 1024 mb -> 1 gigabite
 * 1024 gb -> 1 terabyte
 */

/**
 * IIFE - immediately invoked funtion expression
 */

(function square(num) {
  console.log(num ** 2);
})(5);

/**
 * Closures in js
 * lexical scope -> global scope variables can be accessed from inside a
 * function, however, local variables can't be accessed from outside the funcion
 * A closure is the combination of a function bundled together (enclosed) with
 * references to its surrounding state (the lexical environment). In other
 * words, a closure gives you access to an outer function's scope from an inner
 * function. In JavaScript, closures are created every time a function is
 * created, at function creation time.
 * Every closure has three scopes:
 * Local scope (Own scope)
 * Enclosing scope (can be block, function, or module scope)
 * Global scope
 */

/**
Containerization: Docker lets you package your applications and dependencies 
into containers, which are lightweight, portable, and isolated environments.

Images: Docker uses images as templates for containers. Images contain 
everything needed to run an application.

Engine: Docker Engine is the core component that builds, runs, and manages 
containers.

Compose: Docker Compose helps define and run multi-container applications easily 
using a YAML file.

Portability: Docker containers are portable and run consistently across 
different environments.

Efficiency: Containers are lightweight and resource-efficient, making them ideal 
for microservices and cloud-native applications.

In essence, Docker simplifies application deployment by providing a consistent 
and efficient way to package, ship, and run applications in containers.
 */
