function breeding() {
  const date = new Date();
  let weekDay = date.getDay();
  let hours = date.getHours();
  let start = new Date().getTime();
  let userName = prompt("Как тебя зовут?");
  let end = new Date().getTime();
  let milliSeconds = end - start;
  let clearMilliseconds = milliSeconds % 1000;
  let seconds = Math.trunc(milliSeconds / 1000);
  let minutes = Math.trunc(seconds / 60);

  let answerTime =
    "Вы отвечали на вопрос " +
    clearMilliseconds +
    " милисекунд, " +
    seconds +
    " секунд, " +
    minutes +
    " минут";
  alert(answerTime);
  if (6 < hours < 12) {
    alert("Доброе утро " + userName + ". Сегодня " + weekDay + " день недели");
  } else if (12 < hours < 18) {
    alert("Добрый день " + userName + ". Сегодня " + weekDay + " день недели");
  } else if (18 < hours < 24) {
    alert("Добрый вечер " + userName + ". Сегодня " + weekDay + " день недели");
  } else if (0 < hours < 24) {
    alert("Доброй ночи " + userName + ". Сегодня " + weekDay + " день недели");
  }
}
