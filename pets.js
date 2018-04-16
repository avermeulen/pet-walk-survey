document.addEventListener('DOMContentLoaded', function(){

  var catCounterElem = document.querySelector('.catCounter');
  var dogCounterElem = document.querySelector('.dogCounter');

  var catBtn = document.querySelector('.catBtn');
  var dogBtn = document.querySelector('.dogBtn');

  var petWalkSurvey = PetWalkSurvey();

  catBtn.addEventListener('click', function(){
      petWalkSurvey.catSpotted();
      catCounterElem.innerHTML = petWalkSurvey.catCount();
  });

  dogBtn.addEventListener('click', function(){
    petWalkSurvey.dogSpotted();
    dogCounterElem.innerHTML = petWalkSurvey.dogCount();
  });

});
