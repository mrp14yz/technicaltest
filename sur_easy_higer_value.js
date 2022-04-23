/**
 * Direction:
 * Find the higher value from the array bellow
 *
 * Expected Result:
 * 8
 */
let numbers = [3, 1, 2, 3, 7, 5, 6, 8, 2, 1];

function result(numbers) {
  // Your Code Here
  var maxValue;
  var temp;
  for (var i = 0; i < numbers.length; i++) {
    if (i == 0) {
      maxValue = numbers[i];
    } else {
      temp = numbers[i];
      if (maxValue < temp) {
        maxValue = temp;
      }
    }
  }
  return maxValue;
}

console.log(result(numbers));
