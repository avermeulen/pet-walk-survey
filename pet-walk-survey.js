function PetWalkSurvey(){

    var catsSpottedCounter = 0;
    var dogsSpottedCounter = 0;
    
    function dogSpotted(){
      dogsSpottedCounter++;
    }

    function catSpotted(){
      catsSpottedCounter++;
    }

    function catCount(){
      return catsSpottedCounter;
    }

    function dogCount(){
      return dogsSpottedCounter;
    }

    return {
      catSpotted,
      catCount,
      dogSpotted,
      dogCount
    }

}
