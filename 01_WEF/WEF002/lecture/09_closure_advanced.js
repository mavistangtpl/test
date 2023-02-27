// function accumulator() {
//     let sum = 0;

//     return (num) => {
//       sum = sum + num;
//       return sum;
//     };
//   }

function accumulator() {
  let sum = 0;

  const func = function real_func(num) {
    sum = sum + num;
    return sum;
  }
  return func;
}

const test = accumulator()
console.log("check type of test:", typeof test)

console.log(test(1))
console.log(test(2))
console.log(test(3))