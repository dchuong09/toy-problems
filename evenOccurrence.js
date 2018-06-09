/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  var storage = {}
  arr.forEach(function(val) {
  	storage[val] = storage[value] + 1 || 1 
  })

  for (var i = 0; i < arr.length; i++) {
  	var current = arr[i];

  	if (storage[current] % 2 === 0) {
  		return current;
  	}
  }
  return null;
};
