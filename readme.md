# Pet walk survey

Creating factory functions by spotting owners walking their Cats and Dogs.

## Making code testable

There are a few things that makes the current version of the `pet-walk-survey` application hard to test.

The main things being **application logic and the DOM logic is to coupled** and **Global variables**

### The application logic and the DOM logic is too coupled. 

The code that get values from the screen elements and the logic calculations are too coupled. They are in the same function and there is no easy way to test the one without the other.

### Global variables

The global variables `catsSpottedCounter` and `dogsSpottedCounter` makes it impossible to create independent Unit Tests.

## Making code testable

To make code testable you need to split your DOM code from your application logic. To test the application logic you need to decouple/detangle it from the DOM code. You can unit test DOM code, but this is not our current focus.

Factory functions make it possible to control variable scope. And to expose some functions to control the variables.

Let's look at a factory function that helps to keep count how many apples were eaten.

```javascript
function AppleEater(name){
  
  var applesEaten = 0;
  function eat(){
    applesEaten++;
  }
  function eaten(){
    return applesEaten;
  }
  
  function username(){
    return name;
  }
  
  return {
    eat,
    eaten,
    username
  }
  
}
```

This is looks quite complicated for just incrementing a variable does it? Remember our out aim is testability currently.

Let's look into it:

```javascript

// let's create some apple eaters
var lindani = AppleEater('lindani');
var shannon = AppleEater('shannon');

// we can ask AppleEaters what they have eaten so far.
assert.equal(lindani.eaten(), 0);
assert.equal(shannon.eaten(), 0);

assert.equal(lindani.username(), 'lindani');
assert.equal(shannon.username(), 'shannon');


// An they can eat an apple
lindani.eat();

// Each AppleEater is independent from each oter
assert.equal(lindani.eaten(), 1);
assert.equal(shannon.eaten(), 0);
```

Note:

* Using the `AppleEater` factory function you can create different instances,
* each instance is independent from each other having it own `applesEaten` variable.

As a result the `AppleEater` is testable. 

If you want to create a screen with a list of AppleEaters your DOM code only need to interact with the Factory Function that is already testable and contains all the application logic. The DOM codes role is only to gather and display data.

## Making PetWalkSurvey testable

To make the PetWalkSurvey screens logic testable we need to create a Factory Function that can do four things:

* Record when a dog was walked
* Record when a car was walked
* Answer how many dogs was walked
* Answer how many cats was walked

Internally it have two variables and it exposes 4 functions.

Start of by writing some Mocha unit tests - use TDD. The tests will initially fail as the Factory Function you are writing doesn't exist.

















