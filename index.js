const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array){
  let thing = array.find(function(year){
    return year['result'] === 'W'
  });
  if (thing) {
    return thing.year
  }
}