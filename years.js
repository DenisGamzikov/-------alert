function whatYear() {
  let Year = prompt("Введите год");
  Year = Number(Year);
  let currentYear = Year % 100;
  let currentCentury = Year / 100;

  let remnantCentury = currentCentury % 1;
  let afterChristmas = confirm("это год от Р.Х. или нет?");
  if (afterChristmas == 1) {
    if (remnantCentury > 0) {
      let readyCentury = currentCentury + 1;

      let cleanCentury = Math.trunc(readyCentury);
      alert(
        Year +
          " год это " +
          currentYear +
          " год " +
          cleanCentury +
          "ого " +
          "века"
      );
    } else {
      let readyCentury = currentCentury;
      let njeornj = Math.trunc(readyCentury);
      let lastYear = 100;
      alert(
        Year + " год это " + lastYear + " год " + cleanCentury + "ого " + "века"
      );
    }
  } else if (afterChristmas == 0) {
    if (remnantCentury > 0) {
      let readyCentury = currentCentury + 1;

      let cleanCentury = Math.trunc(readyCentury);
      alert(
        Year +
          " год это " +
          currentYear +
          " год " +
          cleanCentury +
          "ого " +
          "века до рождества Христова"
      );
    } else {
      let readyCentury = currentCentury;
      let cleanCentury = Math.trunc(readyCentury);
      let lastYear = 100;
      alert(
        Year +
          " год это " +
          lastYear +
          " год " +
          cleanCentury +
          "ого " +
          "века до рождества Христова"
      );
    }
  }
}
