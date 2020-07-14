function countingSheep(num) {
  for (let i = num; i > 0; i--) {
    console.log(`${i}: Another sheep jumps over the fence.`);
  }
  console.log('All sheep jumped over the fence.');
}

function powerCalculator(num1, num2) {
  let result = 1;
  if (num2 < 0) {
    return 'exponent should be >= 0';
  }
  for (let i = 0; i < num2; i++) {
    result *= num1;
  }
  return result;
}

function reverseString(str) {
  let reversedString = '';
  for (let i = 0; i < str.length; i++) {
    reversedString += str[str.length - 1 - i];
  }
  return reversedString;
}

function nthTriangularNumber(n) {
  return n * (n + 1) / 2;
}

function stringSplitter(str) {
  let output = [];
  let currentStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '/') {
      output.push(currentStr);
      currentStr = '';
    } else {
      currentStr += str[i];
    }
  }
  // one last push
  output.push(currentStr);
  return output;
}

function fibonacci(n) {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n - 1];
}

function factorial(n) {
  let temp = n;
  for (let i = n - 1; i > 0; i--) {
    temp *= i;
  }
  return temp;
}
