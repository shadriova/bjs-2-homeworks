"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discrim = b ** 2 - 4 * a * c;
  if (discrim === 0) {
    arr.push(-b/(2*a));
  }
  else if (discrim > 0) {
    arr.push((-b + Math.sqrt(discrim) )/(2*a));
    arr.push((-b - Math.sqrt(discrim))/(2*a));
  }
  return arr;
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = (percent / 100) / 12;
  let credit_body = amount - contribution;
  let payment = credit_body * (P + (P / (((1 + P) ** countMonths) - 1)))
  let all_summa = (payment * countMonths).toFixed(2);
  return all_summa;
}