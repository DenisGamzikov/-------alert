function whatYear() {
  let year = prompt("Введите год");
  year = Number(year);
  let yearOfCentury = year % 100;
  let century = year / 100;
  let afterChristmas = confirm("это год от Р.Х. или нет?");
  if (afterChristmas) {
    if (century > 0) {
      let readyCentury = century + 1;

      let cleanCentury = Math.trunc(readyCentury);
      alert(
        year +
          " год это " +
          yearOfCentury +
          " год " +
          cleanCentury +
          "ого " +
          "века"
      );
    } else {
      let readyCentury = century;
      let njeornj = Math.trunc(readyCentury);
      let lastYear = 100;
      alert(
        year + " год это " + lastYear + " год " + cleanCentury + "ого " + "века"
      );
    }
  } else if (afterChristmas) {
    if (century > 0) {
      let readyCentury = century + 1;

      let cleanCentury = Math.trunc(readyCentury);
      alert(
        year +
          " год это " +
          yearOfCentury +
          " год " +
          cleanCentury +
          "ого " +
          "века до рождества Христова"
      );
    } else {
      let readyCentury = century;
      let cleanCentury = Math.trunc(readyCentury);
      let lastYear = 100;
      alert(
        year +
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
