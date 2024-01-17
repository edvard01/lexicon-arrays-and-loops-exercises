function exercise1() {
  const arr = [];
  for (let i = 0; i < 6; i++) {
    arr.push(i * 3 + 1);
  }

  return arr;
}

const array = exercise1();

function exercise2() {
  console.log("-----------------------------");
  const arr = [1, 4, 12, 55, 22, 1];

  arr.forEach((element) => {
    console.log(element * 3);
  });
}

function exercise3() {
  console.log("-----------------------------");
  const fullArr = [1, 4, 12, 55, 22, 1];
  const emptyArr = [];

  fullArr.forEach((element) => {
    if (element > 5) {
      emptyArr.push(element);
    }
  });

  emptyArr.forEach((element) => {
    console.log(element);
  });
}

function exercise4() {
  const arr = [1, 9, 91, 9];
  let sum = 0;

  arr.forEach((element) => {
    sum += element;
  });

  console.log(sum);
}

function exercise5() {
  const array = [1, 23, 44, 666, 211];
  array.forEach((element) => {
    if (element === 666) {
      console.log(element);
    }
  });
}

function exercise6() {
  console.log("-----------------------------");
  const arr = [1, 4, 12, 55, 22, 3];
  arr.reverse();
  arr.shift();
  arr.reverse();
  arr.forEach((element) => {
    console.log(element);
  });
}

function exercise7() {
  let currentLargest = 0;
  const numArr = [8, 12, 44, 5, 20, 13, 4, 99, 15, 3];
  numArr.forEach((element) => {
    if (element > currentLargest) {
      currentLargest = element;
    }
  });

  console.log(`The biggest number is: ${currentLargest}`);
}

function exercise8() {
  const arr = [1, 4, 12, 55, 22, 3];
  const emptyArr = [];

  for (let i = 0; i < arr.length; i++) {
    emptyArr.push(arr[i]);
  }

  console.log("New array:");
  emptyArr.forEach((element) => {
    console.log(element);
  });
}

function exercise9() {
  const arr = [1, 4, 12, 55, 22, 3];

  let length = arr.length;
  for (let i = 0; i < length; i++) {
    arr.pop();
  }

  console.log("Array should be empty:");
  arr.forEach((element) => {
    console.log(element);
  });
}
