// function printName(name, age) {
//   console.log(`My name is ${name} and I am ${age} years old`)
// }

// console.log(printName("charles", 25));



function cutTheSticks(arr) {
  //[5, 4, 4, 2, 2, 8];
  //[6, 4, 2, 1];
  let output = [];
  let result = [];
  while (arr.length > 0) {
  let shortest = Math.min(...arr);
  console.log(shortest);
  if (arr.length === 1) {
    result.push(1);
    return result;
  } else {
    result.push(arr.length);
  }
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== shortest) {
      output.push(arr[i] - shortest);
      }
    }
    arr = output;
    output = [];
  }
return result;
}

console.log(cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]));