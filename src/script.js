/*
Scrie cod astfel încât să funcționeze interfața:
La apăsarea unui buton (.buttons a):
    - Se șterg clasele "active" de la fiecare `.buttons a` și `.tabs article`
    - Adaugă clasa "active" la butonul apăsat
    - Adaugă clasa "active" la tab-ul identificat prin atributul data-target
*/
const buttons = document.querySelectorAll(".buttons a");
const articles = document.querySelectorAll(".tabs article");
buttons[0].addEventListener("click", () => {
  buttons[0].classList.add("active");
  buttons[1].classList.remove("active");
  buttons[2].classList.remove("active");
  articles[0].classList.add("active");
  articles[1].classList.remove("active");
  articles[2].classList.remove("active");
});
buttons[1].addEventListener("click", () => {
  buttons[0].classList.remove("active");
  buttons[1].classList.add("active");
  buttons[2].classList.remove("active");
  articles[0].classList.remove("active");
  articles[1].classList.add("active");
  articles[2].classList.remove("active");
});
buttons[2].addEventListener("click", () => {
  buttons[0].classList.remove("active");
  buttons[1].classList.remove("active");
  buttons[2].classList.add("active");
  articles[0].classList.remove("active");
  articles[1].classList.remove("active");
  articles[2].classList.add("active");
});
