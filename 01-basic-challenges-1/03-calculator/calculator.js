function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 'Invalid operator';
  }
  return result;
  
  // if (operator === '+') {
  //   return num1 + num2;
  // } else if (operator === '-') {
  //   return num1 - num2;
  // } else if (operator === '*') {
  //   return num1 * num2;
  // } else if (operator === '/') {
  //   return num1 / num2;
  // } else {
  //   return 'Invalid operator';
  // }

}

module.exports = calculator;
