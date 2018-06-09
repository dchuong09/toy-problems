
// 0, 1, 1, 2, 3, 5, 8
// nthFib(4) => 3
// nthFib(6) => 8

const nthFib = function(n) {
  let seed = [0, 1];
  for (let i = 0; i < n; i++) {
    let len = seed.length;
    seed.push(seed[len - 1] + seed[len - 2]);
  }
  return seed[n];
};

nthFib(5);