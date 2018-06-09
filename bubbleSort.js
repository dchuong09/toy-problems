/*
Sorta Bubbles...

1) Swap thing: Write a function will iterate through an array, and swap each current item with the subsequent item 
e.g.:
[1, 2] => [2, 1]
[1, 2, 3] => [2, 3, 1]

2) Conditional Swap: Extend your function so that the swap occurs only if this condition is met: current item is greater than subsequent item
e.g.:
[1, 2] => [1, 2]
[2, 1] => [1, 2]

3) Bubble Bonus: Turn conditional swap into Bubble Sort with this ONE WEIRD TRICK - by repeating it until the array is sorted
*/



// 1. Vanilla JS

var arr = [5, 2, 4, 6, 1, 3];
var repeat = true;

while (repeat === true) {
  repeat = false;
  arr.forEach((item, i) => {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      repeat = true;
    }
  });
}

console.log('Vanilla JS: ', arr);


// 2. ES6

var arr = [5, 2, 4, 6, 1, 3];
var repeat = true;

while (repeat === true) {
  repeat = false;
  arr.forEach((item, i) => {
    if (arr[i] > arr[i + 1]) {
      [ arr[i], arr[i + 1] ] = [ arr[i + 1], arr[i] ];
      repeat = true;
    }
  });
}
