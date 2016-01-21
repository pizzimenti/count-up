var testZero = function (countBy,countTo) {
  if (countBy > 0 && countTo > 0) {
    return countUpTest(countBy,countTo);
  } else {
    return false;
  }
};
var countUpTest = function (countBy,countTo) {
  if (countBy <= countTo) {
    return countUp(countBy,countTo);
  } else {
    return false;
  }
};

var countUp = function (countBy, countTo) {
  var output = [];
  for (var i = 0; i <= countTo; i += countBy) {

    output.push(i);


    }
    //build your list of numbers here
    output.splice(0,1);
  return output;
};
