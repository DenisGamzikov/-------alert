function example() {
  let firstNumeric = prompt("Введите первое число");
  firstNumeric = Number(firstNumeric);
  let secondNumeric = prompt("Ведите второе число");
  secondNumeric = Number(secondNumeric);
  let result;
  let sign = prompt(
    "Введите арифметический знак(+,-,*,/,%,!,>)\n(при использовании факториала будет взято первое число)\n(при использовании знака сравнения будет взято наибольшее число"
  );

  switch (sign) {
    case "+":
      result = firstNumeric + secondNumeric;
      break;
    case "-":
      result = firstNumeric - secondNumeric;
      break;
    case "*":
      result = firstNumeric * secondNumeric;
      break;
    case "/":
      result = firstNumeric / secondNumeric;
      break;
    case "%":
      result = firstNumeric % secondNumeric;
      break;
    case "!":
      result = 1;
      for (i = 1; i <= firstNumeric; i++) {
        result *= i;
      }
      break;
    case ">":
      result = Math.max([firstNumeric], [secondNumeric]);
      break;
  }
  alert(result);
}
