var countUp = function (countBy, countTo) {
  var output = [];
  for (var i = 0; i <= countTo; i += countBy) {

    output.push(i);
    }
    output.splice(0,1);
  return output;
};

//this works
$(function() {
  $("form#countUpForm").submit(function(event) {
        event.preventDefault();

    var countBy = parseInt($("input#countBy").val());
    var countTo = parseInt($("input#countTo").val());
//end of this works


    var resultArray = countUp(countBy,countTo);
    var result = resultArray.toString();

    console.log(resultArray)
    console.log(result)
    $("#result").append(result);
  })

});



//
// var countUp = function(countBy,countTo){
//   if (testZero(countBy,countTo)) {
//     return countUpTest(countBy,countTo)
//   if (countUpTest(countBy,countTo)) {
//
//   }
//     return countUp(countBy,countTo))
// }


  // var testZero = function (countBy,countTo) {
  //   if (countBy > 0 && countTo > 0) {
  //     return countUpTest(countBy,countTo);
  //   } else {
  //     return false;
  //   }
  // };
  // var countUpTest = function (countBy,countTo) {
  //   if (countBy <= countTo) {
  //     return countUp(countBy,countTo);
  //   } else {
  //     return false;
  //   }
  // };
