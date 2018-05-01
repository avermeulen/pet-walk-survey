# Pet walk survey

Creating factory functions by spotting owners walking their Cats and Dogs.

## Making code testable

To make code testable you need to split your DOM code from your application logic. To test the application logic you need to decouple/detangle it from the DOM code. You can unit test DOM code, but this is not our current focus.

There are a few things that makes the `pet-walk-survey` application hard to test.

The main things being **application logic and the DOM logic is to coupled** and **Global variables**

### The application logic and the DOM logic is to coupled. 

The code that get values from the screen elements and the logic calculations are too coupled. They are in the same function and there is no easy way to test the one without the other.

### Global variables

The global variables `catsSpotted` and `dogsSpotted` makes it impossible to create independent Unit Tests.





