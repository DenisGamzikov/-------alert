function twoNumbers() {
  do {
    firstNumber = prompt("Введите первое число от 0 до 100");
  } while (100 >= firstNumber1 <= 0);

  do {
    secondNumber = prompt(
      "Введите второе число от 0 до 100, чтобы оно было меньше первого"
    );
  } while (100 >= secondNumber <= 0 || secondNumber > firstNumber);
}
