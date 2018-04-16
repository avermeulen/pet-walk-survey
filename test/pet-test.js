describe("The pet walk survey", function(){

  it("should be able to count dogs", function(){
    var petWalkSurvey1 = PetWalkSurvey();
    petWalkSurvey1.dogSpotted();

    var petWalkSurvey2 = PetWalkSurvey();
    petWalkSurvey2.dogSpotted();
    petWalkSurvey2.dogSpotted();

    //assert.equal(0, petWalkSurvey.catCount());
    assert.equal(1, petWalkSurvey1.dogCount());
    assert.equal(2, petWalkSurvey2.dogCount());

  });

  it("should be able to count cats", function(){

    var petWalkSurvey = PetWalkSurvey();
    petWalkSurvey.catSpotted();
    petWalkSurvey.catSpotted();

    assert.equal(2, petWalkSurvey.catCount());
    assert.equal(0, petWalkSurvey.dogCount());

  });

  it("should be able to count dogs and cats spotted", function(){


    var petWalkSurvey = PetWalkSurvey();
    petWalkSurvey.catSpotted();
    petWalkSurvey.dogSpotted();

    assert.equal(1, petWalkSurvey.catCount());
    assert.equal(1, petWalkSurvey.dogCount());

  });



})
