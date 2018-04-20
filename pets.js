document.addEventListener('DOMContentLoaded', function(){

  var catCounterElem = document.querySelector('.catCounter');
  var dogCounterElem = document.querySelector('.dogCounter');

  var catBtn = document.querySelector('.catBtn');
  var dogBtn = document.querySelector('.dogBtn');

  var catsSpottedCounter = 0;
  var dogsSpottedCounter = 0;

  //var petWalkSurvey = PetWalkSurvey();

  catBtn.addEventListener('click', function(){
    catsSpottedCounter++;
    catCounterElem.innerHTML = catsSpottedCounter;
  });

  dogBtn.addEventListener('click', function(){
    dogsSpottedCounter++;
    dogCounterElem.innerHTML = dogsSpottedCounter;
  });

});
