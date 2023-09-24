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



  //Added Tasks after retro

  //Second Task

  function getNumber(a, b){
    const arr = [];
    for ( let i = a; i <= b; ++i ) {
      for ( let k = a; k <= i; ++k ) {
        arr.push(i);
      }
    }
    console.log(arr.join(","));
  }
  getNumber(2, 5);


  //Forth Task
  function compact(arr) {
    return [...new Set(arr)];
  }
  const arr = [5, 3, 4, 5,6,7,3];
  console.log(compact(arr));

  //Fixth Task
  const array = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
  function funcName(arr) {
    const newArr = arr.flat(); 
    const numArr = newArr.filter((elem) => {
      return typeof elem === 'number';
    });
    const strArr = newArr.filter((elem) => {
      return typeof elem === 'string';
    });
    return [numArr, strArr]
  }
  
  console.log(funcName(array));