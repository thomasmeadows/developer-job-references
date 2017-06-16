[which programming languages are functional](http://blog.jenkster.com/2015/12/which-programming-languages-are-functional.html)

[what is functional programming](http://blog.jenkster.com/2015/12/what-is-functional-programming.html)

[wikipeadia](https://en.wikipedia.org/wiki/Functional_programming)

[mastering functional programming](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)


#### Functional programming?

Functional programming is about writing pure functions, about removing hidden inputs and outputs as far as we can, so that as much of our code as possible just describes a relationship between inputs and outputs.

#### Pure versus impure function?

A function is called ‘pure’ if all its inputs are declared as inputs - none of them are hidden - and likewise all its outputs are declared as outputs.

In contrast, if it has hidden inputs or outputs, it’s ‘impure’, and the contract we think the function offers is only half the story. The iceberg of complexity looms. We can never use impure code “in isolation”. We can never test it in isolation. It always depends on other things which we have to keep track of whenever we want to test or debug.

Impure Functions could be writing to a file or making an http request

A pure function is a function which:
Given the same inputs, always returns the same output, and
Has no side-effects

#### Side Effects

A side effect is any application state change that is observable outside the called function other than its return value. Side effects include:

* Modifying any external variable or object property (e.g., a global variable, or a variable in the parent function scope chain)
* Logging to the console
* Writing to the screen
* Writing to a file
* Writing to the network
* Triggering any external process
* Calling any other functions with side-effects

#### Functional composition

Function composition is the process of combining two or more functions in order to produce a new function or perform some computation. For example, the composition f . g (the dot means “composed with”) is equivalent to f(g(x)) in JavaScript. Understanding function composition is an important step towards understanding how software is constructed using the functional programming. Read “What is Function Composition?” for more.

#### shared state

Shared state is any variable, object, or memory space that exists in a shared scope, or as the property of an object being passed between scopes. A shared scope can include global scope or closure scopes. Often, in object oriented programming, objects are shared between scopes by adding properties to other objects.

#### Immutability

An immutable object is an object that can’t be modified after it’s created. Conversely, a mutable object is any object which can be modified after it’s created.


#### Declarative vs Imperative

Functional programming is a declarative paradigm, meaning that the program logic is expressed without explicitly describing the flow control.

Imperative programs spend lines of code describing the specific steps used to achieve the desired results — the flow control: How to do things.

Declarative programs abstract the flow control process, and instead spend lines of code describing the data flow: What to do. The how gets abstracted away.
