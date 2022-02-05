Arr = [10, 20, 30, 40, 50, 60];

Arr.forEach(function (val, idx) {
  console.log(`Value of array ${val} and Index number is ${idx}`);
});

// MAP METHOD

const ArrWithMap = Arr.map(function (val) {
  return val * 4;
});

console.log(ArrWithMap);
