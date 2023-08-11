function betterCalc() {
  let geometricMeaning = prompt("Выберете искомое: S(площадь) ,P(периметр)");
  let figure = prompt(
    "Выберете фигуру: square(квадрат), rectangle(прямоугольник), circle(круг)"
  );
  let result;
  switch (figure) {
    case "square":
      sideSquare = prompt("Введите длину стороны квадрата");
      switch (geometricMeaning) {
        case "S":
          result = Math.pow(sideSquare, 2);
          break;
        case "P":
          result = sideSquare * 4;
          break;
      }
      break;
    case "rectangle":
      let firstSideRectangle = prompt(
        "Введите длину одной стороны прямоугольника"
      );
      let secondSideRectangle = prompt(
        "Введите длину другой стороны прямоугольника, не противоположной предыдущей"
      );
      switch (geometricMeaning) {
        case "S":
          result = firstSideRectangle * secondSideRectangle;
          break;
        case "P":
          result = (firstSideRectangle + secondSideRectangle) * 2;
          break;
      }
      break;
    case "circle":
      let circleRadius = prompt("Введите радиус окружности");
      switch (geometricMeaning) {
        case "S":
          result = Math.PI * Math.pow(circleRadius, 2);
          break;
        case "P":
          result = Math.PI * circleRadius * 2;
          break;
      }
      break;
  }
  alert(result);
}
