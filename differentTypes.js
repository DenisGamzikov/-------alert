function breeding() {
  const date = new Date();
  let weekDay = date.getDay();
  let hours = date.getHours();
  let start = new Date().getTime();
  let userName = prompt("Как тебя зовут?");
  let end = new Date().getTime();
  let milliSeconds = end - start;
  let clearSeconds;
  let clearMinutes;
  let clearMilliseconds;
  if (milliSeconds > 999) {
    let seconds = milliSeconds / 1000;
    clearSeconds = Math.trunc(seconds);
    clearMilliseconds = milliSeconds % 1000;
    if (seconds > 59) {
      let minutes = seconds / 60;
      clearMinutes = Math.trunc(minutes);
    } else if (seconds <= 59) {
      clearMinutes = 0;
    } else if (milliSeconds <= 999) {
      clearSeconds = 0;
      clearMilliseconds = milliSeconds;
    }
  }

  let answerTime =
    "Вы отвечали на вопрос " +
    clearMilliseconds +
    " милисекунд, " +
    clearSeconds +
    " секунд, " +
    clearMinutes +
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
