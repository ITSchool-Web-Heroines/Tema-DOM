/*
Scrie cod astfel încât să funcționeze interfața:
La apăsarea unui buton (.buttons a):
    - Se șterg clasele "active" de la fiecare `.buttons a` și `.tabs article`
    - Adaugă clasa "active" la butonul apăsat
    - Adaugă clasa "active" la tab-ul identificat prin atributul data-target
*/
const button = document.querySelector(".buttons");

button.addEventListener("click", (event) => {
    const item = document.querySelectorAll(".tabs article, .buttons a");

    item.forEach((currentValue) => {
        currentValue.classList.remove("active");
    });
    const article = document.querySelector(event.target.dataset.target);
    article.classList.add("active");
});
