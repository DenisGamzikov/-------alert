function ageAndGender() {
  let age = prompt("Введите свой возраст");
  age = Number(age);
  let gender = prompt("Вы мужского пола?");
  if (age >= 16 && gender == "Да") {
    alert("Нам кажется, вам необходимы интструменты");
  } else if (age < 16 && gender == "Да") {
    alert("Нам кажется, вам необходимы машинки");
  } else if (age >= 16 && gender == "Нет") {
    alert("Нам кажется, вам необходимы сумки");
  } else if (age < 16 && gender == "Нет") {
    alert("Нам кажется, вам необходимы Куклы");
  } else {
    alert("Вы неправильно ответили на какой-то из вопросов");
  }
}
