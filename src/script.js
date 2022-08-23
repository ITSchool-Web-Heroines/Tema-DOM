/*
Scrie cod astfel încât să funcționeze interfața:
La apăsarea unui buton (.buttons a):
    - Se șterg clasele "active" de la fiecare `.buttons a` și `.tabs article`
    - Adaugă clasa "active" la butonul apăsat
    - Adaugă clasa "active" la tab-ul identificat prin atributul data-target
*/

const lorem = document.querySelector("#lorem");
const dino = document.querySelector("#dino");
const bacon = document.querySelector("#bacon");
const btnLorem = document.querySelector(".lorem");
const btnDino = document.querySelector(".dino");
const btnBacon = document.querySelector(".bacon");

btnLorem.addEventListener("click", function () {
  dino.classList.remove("active");
  bacon.classList.remove("active");
  lorem.classList.add("active");
  btnLorem.classList.add("active");
});

btnDino.addEventListener("click", function () {
  lorem.classList.remove("active");
  bacon.classList.remove("active");
  dino.classList.add("active");
  btnDino.classList.add("active");
});

btnBacon.addEventListener("click", function () {
  dino.classList.remove("active");
  lorem.classList.remove("active");
  bacon.classList.add("active");
  btnBacon.classList.add("active");
});
