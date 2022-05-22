function distanceFromHqInBlocks(someValue) {
    
    let distanceInBlocks = Math.abs(someValue - 42);

    return distanceInBlocks;
  }

  function distanceFromHqInFeet(someValue) {
   let distanceInBlocks = distanceFromHqInBlocks(someValue);
    let distanceInFeet = distanceInBlocks*264;

    return distanceInFeet;
    
  }

  function distanceTravelledInFeet(start, destination) {
    
    let distanceInBlocks = Math.abs(start - destination);
    let distanceInFeet = distanceInBlocks*264;

    return distanceInFeet;
  }

  function calculatesFarePrice(start, destination) {
    
    let distanceInFeet = distanceTravelledInFeet(start, destination);
    console.log(distanceInFeet)
    if (distanceInFeet>2500){

        return 'cannot travel that far';
    }
    else if (distanceInFeet>2000){

       let farePrice = 25;
       return farePrice;

    }
    else if(distanceInFeet<=400){

        let farePrice = 0;
        return farePrice;

    }
    else{

      let farePrice = (distanceInFeet-400)*0.02;
      return farePrice;
    } 
  }