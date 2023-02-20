function getArrayParams(...arr) {
  let min = (Math.min(...arr));
  let max = (Math.max(...arr));
  let sum = function (...arr){
    let sum = 0;
    for (let i =0; i < arr.length; i++){
      sum += arr[i]
    }
  }
  let avg = (sum/arr.length);
  return { min: min, max: max, avg: avg };
}
console.log(avg)
/*console.log(getArrayParams(-99, 99, 10))*/

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
