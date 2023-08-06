function example() {
  let firstNumeric = prompt("Введите первое число");
  firstNumeric = Number(firstNumeric);
  let secondNumeric = prompt("Ведите второе число");
  secondNumeric = Number(SecondNumeric);
  let sign = prompt(
    "Введите арифметичческий знак(+,-,*,/,%,!(при использовании факториала будет взято первое число))"
  );

  switch (sign) {
    case "+":
      result = firstNumeric + secondNumeric;
      alert(result);
      break;
    case "-":
      result = firstNumeric - secondNumeric;
      alert(result);
      break;
    case "*":
      result = firstNumeric * secondNumeric;
      alert(result);
      break;
    case "/":
      result = firstNumeric / secondNumeric;
      alert(result);
      break;
    case "%":
      result = firstNumeric % secondNumeric;
      alert(result);
      break;
    case "!":
      let result = 1;
      for (i = 1; i <= firstNumeric; i = i + 1) {
        result = i * result;
      }
      alert(result);
      break;
  }
}
