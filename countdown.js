function countdown() {
  let countdown = prompt("Введите любое число от 0 до 10");
  countdown = Number(countdown);
  if (countdown > 10) {
    countdown = 10;
  }
  alert(countdown);

  while (countdown > 0) {
    countdown = countdown - 1;
    alert(countdown);
  }
}
