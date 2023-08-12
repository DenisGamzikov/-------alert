function objectWithVariables() {
  let myBook = {
    title: "Harry Potter",
    author: "Joanne Rowling",
    yearCreation: "2010",
    edition: "2",
    volume: "1",
  };
  let characteristic = prompt(
    "Выберете интересующую вас характеристику книги: название, автор, год создания книги, издание, том"
  );
  switch (characteristic) {
    case "название": {
      alert(myBook.title);
      break;
    }
    case "автор": {
      alert(myBook.author);
      break;
    }
    case "год создания книги": {
      alert(myBook.yearCreation);
      break;
    }
    case "издание": {
      alert(myBook.edition);
      break;
    }
    case "том": {
      alert(myBook.volume);
      break;
    }
    default: {
      alert("Такой характеристики у книги нет");
    }
  }
}
