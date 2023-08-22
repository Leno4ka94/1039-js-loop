// First task

function createArray() {
    const array = [];
    for (let arr = 2; arr <= 9; ++arr){
      array.push(arr);
    }
    return array;
  }
  createArray();
  
  // Third task

  function randArray(k){
    const array = [];
    for (i = 0; i < k; ++i){
      const randomNumber = Math.round(Math.random() * 500) + 1;
      array.push(randomNumber);
    }
    return array;
  }
  randArray(10);

  

  // Sixth task

  function calc (a, b, op) {
    if (op === 1){
      return a + b;
    } else if (op === 2){
      return a - b;
    } else if (op === 3) {
      return a / b;
    } else {
      return a + b;
    }
  }
  calc(10, 7, 1);
  

  // Seventh task
  function findUnique(arr) {
    const set = new Set (arr);
    return set.size === arr.length;
  }
  const arr = [11, 15, 1, 2, 2, 3, 4, 5];
  findUnique(arr);
  

  