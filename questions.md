# Workshop about DOM testing


## What questions do you have about testing?

* Linking mocha to your test?

  * No error in the console?

* How get the values of the global variables in the function?

* The first got no global variables and is easy to test:

  * The function does one thing - you send in a parameter and it calculates a result and return it.

  sms == 0.65
  sms,call === {
    sms : 0.65,
    call : 2.75,
    total : 3.50
  }


The other functions are harder to test - it's data get drip feeded to it whenever a button is pressed.

What makes this harder to test?
