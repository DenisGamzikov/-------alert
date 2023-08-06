let sound = {
  собака: "Гав-гав",
  кошка: "Мяу-мяу",
  кот: "Мяу-мяу",
  корова: "Муу",
  петух: "Кукареку",
  курица: "Кукареку",
};
function sounds() {
  let animal = prompt("Введите свое любимое животное");

  if (sound[animal] !== undefined) {
    alert(sound[animal]);
  } else if (sound[animal] == undefined) {
    let soundNewAnimal = prompt(
      "Мы не знаем такого животного. Какой звук оно издает?"
    );
    let newAnimal = animal;
    sound[newAnimal] = soundNewAnimal;
  }
}
