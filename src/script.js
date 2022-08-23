/*
Scrie cod astfel încât să funcționeze interfața:
La apăsarea unui buton (.buttons a):
    - Se șterg clasele "active" de la fiecare `.buttons a` și `.tabs article`
    - Adaugă clasa "active" la butonul apăsat
    - Adaugă clasa "active" la tab-ul identificat prin atributul data-target
*/

const btn = document.querySelector(".buttons");

btn.addEventListener("click", (event) => {
  const item = document.querySelectorAll(".tabs article, .buttons a");

  item.forEach((currentValue) => {
    currentValue.classList.remove("active");
  });

  event.target.classList.add("active");
  const selector = event.target.dataset.target;
  const article = document.querySelector(selector);
  article.classList.add("active");
});
