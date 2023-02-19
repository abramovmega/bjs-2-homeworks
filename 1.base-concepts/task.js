"use strict"
function solveEquation(a, b, c) {
    let D = (b ** 2) - (4 * a * c);
    let arr = [];

    if (D < 0)
        return arr;

    if (a == 0)
        return arr;

    if (D == 0)
        arr.push(-b / (2*a));
    else if (D > 0) {
        arr.push((-b + Math.sqrt(D)) / (2 * a))
        arr.push((-b - Math.sqrt(D)) / (2 * a))
    }
    return arr;
}

console.log(solveEquation(1, -4, -5));



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    if(isNaN(percent)){
        return('pusto percent');
    }
    if(isNaN(contribution)){
        return('pusto contribution');
    }
    if(isNaN(amount)){
        return('pusto amount');
    }
    if(isNaN(countMonths)){
        return('pusto countMonths');
    }
    monthlyPercentage = ((percent/100)/12);
    loanBody = (amount-contribution);
    payment = (loanBody*(monthlyPercentage+(monthlyPercentage/(((1+monthlyPercentage)**countMonths)-1))));
    amountToBeRefunded = (payment*countMonths);
    return amountToBeRefunded.toFixed(2);
}
console.log(calculateTotalMortgage(10, 0, 20000, 24.));
