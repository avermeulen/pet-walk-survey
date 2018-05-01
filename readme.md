# Pet walk survey

A example of creating factory functions by spotting Cats and Dogs being walked by their owners.

## Making code testable

To make code testable you need to split your DOM code from your application logic. To test the application logic you need to decouple/detangle it from the DOM code. DOM code can be tested, but this is not our current focus.

There are a few things that makes the `pet-walk-survey` application hard to test.

The main things being **application logic and the DOM logic is to coupled** and **Global variables**

### The application logic and the DOM logic is to coupled. 

The code that is getting the values from the screen elements and the logic that is doing the calculations are in the same function and there is no easy way to test the one without the other.

### Global variables

There are some global variables `catsSpotted` and `dogsSpotted` that makes it hard if not impossible to write contained focussed Unit Tests that are not interfering with of each other.





