function breeding() {
alert("Привет")
alert("12")
let any
alert(any)
alert("null")
let check = 10 > 3
alert(check)
let userName = prompt("Как тебя зовут?");


alert("Добро пожаловать на сайт, " + userName)}


function sum() {
let firstNumber = prompt("Введите первое число")
firstNumber = Number(firstNumber)
let SecondNumber = prompt("Ведите второе число");
SecondNumber = Number(SecondNumber)
let sum = firstNumber + SecondNumber;
alert("сумма чисел = " + sum)}

function countdown() {
let Countdown = prompt("Введите любое число от 0 до 10")
Countdown = Number(Countdown)
if(Countdown > 10) {
     Countdown = 10
}
alert(Countdown)

  
  while (Countdown > 0 ) {
    Countdown = Countdown - 1
       alert(Countdown)
     }
    }


function sounds() {
  let animal = prompt("Введите свое любимое животное")
  switch (animal) {
    case 'собака': { 
        alert("Гав-гав")
      break;	
    }
    case 'кошка': {
        alert("Мяу-мяу")
      break;	
    }
    case 'корова': {
        alert("Муу")
      break;	
    }
    case 'петух': {
    alert("Кукареку")
    break;	
  }
    default: {
        alert("Мы не знаем такого животного")
    }
  }
}

function example() {
  let firstNumeric = prompt("Введите первое число")
  firstNumeric = Number(firstNumeric)
  let SecondNumeric = prompt("Ведите второе число");
  SecondNumeric = Number(SecondNumeric)
  let sign = prompt("Введите арифметичческий знак(+,-,*,/,%)")
  
  
  switch(sign) {
      case "+":
      result = firstNumeric + SecondNumeric
      alert(result)
      break
      case "-":
      result = firstNumeric - SecondNumeric
      alert(result)
      break
      case "*":
      result = firstNumeric * SecondNumeric
      alert(result)
      break
      case "/":
      result = firstNumeric / SecondNumeric
      alert(result)
      break
      case "%":
      result = firstNumeric % SecondNumeric
      alert(result)
      break
  }
  function agreement() {
let  UserAgreed;
do {
    UserAgreed = confirm("Дайте свое согласие")
}
while  (UserAgreed !== true)
}
}

function ageAndGender() {
let Age = prompt("Введите свой возраст")
Age = Number(Age)
let Gender = prompt("Вы мужского пола?")
if (Age >= 16 && Gender == "Да") {
    alert("Нам кажется, вам необходимы интструменты")
}
else if (Age < 16 && Gender == "Да") {
    alert("Нам кажется, вам необходимы машинки")
}
else if (Age > 16 && Gender == "Нет") {
    alert("Нам кажется, вам необходимы сумки")
}
else if (Age < 16 && Gender == "Нет") {
    alert("Нам кажется, вам необходимы Куклы")
}
else {
    alert("Вы неправильно ответили на какой-то из вопросов")
}
}

