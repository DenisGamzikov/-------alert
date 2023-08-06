function agreement() {
  let userAgreed;
  do {
    userAgreed = confirm("Дайте свое согласие");
  } while (userAgreed !== true);
}
