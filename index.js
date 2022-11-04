// Code your solution in this file!
function distanceFromHqInBlocks(numOfBlocks) {
    if (numOfBlocks < 42)
    return 42 - numOfBlocks
     else if(numOfBlocks > 42)
    return numOfBlocks - 42
  
}
function distanceFromHqInFeet(numOfFeet) {
    return distanceFromHqInBlocks (numOfFeet) * 264
}

function distanceTravelledInFeet(a, b) {
  if (a >= 42){
  return (b - a) * 264}
  else {
    return (a - b) * 264
  }
}
function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0;
    }
    if (
        distanceTravelledInFeet(start, destination) > 400 &&
        distanceTravelledInFeet(start, destination) < 2000
    ) {
        return 2.56;
    }
    if (
        distanceTravelledInFeet(start, destination) > 2000 && 
        distanceTravelledInFeet(start, destination) < 2500
    ) {
        return 25;
    }
    if (distanceTravelledInFeet(start, destination) > 2500) {
        return "cannot travel that far";
}
}
        