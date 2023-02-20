"use strict"
function solveEquation(a, b, c) {
    let D = (b ** 2) - (4 * a * c);
    let arr = [];

    if (D < 0) {
        return arr;
    }
    if (a == 0) {
        return arr;
    }
    if (D == 0) {
        arr.push(-b / (2*a))
    }
    else if (D > 0) {
        arr.push((-b + Math.sqrt(D)) / (2 * a))
        arr.push((-b - Math.sqrt(D)) / (2 * a))
    }

    return arr;
}

console.log(solveEquation(1, -4, -5));



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    if (isNaN(percent || contribution || amount || countMonths)) {
        return('false');
    }
    let monthlyPercentage = ((percent/100)/12);
    let loanBody = (amount-contribution);
    let payment = (loanBody*(monthlyPercentage+(monthlyPercentage/(((1+monthlyPercentage)**countMonths)-1))));
    let amountToBeRefunded = (payment*countMonths);
    return (+amountToBeRefunded.toFixed(2));
}
    
console.log(calculateTotalMortgage(10, 0, 20000, 24.));
