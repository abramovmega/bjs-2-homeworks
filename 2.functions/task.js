function getArrayParams(...arr) {
    let min = (Math.min(...arr));
    let max = (Math.max(...arr));
    let sum = arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue);
    /*let sum = function (...arr) {
        let arr_sum = 0;
        for (let i = 0; i < arr.length; i++) {
            arr_sum += arr[i]
        }
        return arr_sum;
    }*/
    let avg = +(sum/*(...arr)*/ / arr.length).toFixed(2);
    return { min: min, max: max, avg: avg };
}

console.log(getArrayParams(-99, 99, 10))

function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork(arrOfArr, func) {

}