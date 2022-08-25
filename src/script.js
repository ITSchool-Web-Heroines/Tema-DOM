/*
Scrie cod astfel încât să funcționeze interfața:
La apăsarea unui buton (.buttons a):
    - Se șterg clasele "active" de la fiecare `.buttons a` și `.tabs article`
    - Adaugă clasa "active" la butonul apăsat
    - Adaugă clasa "active" la tab-ul identificat prin atributul data-target
*/
    const butoane = document.querySelector('.buttons');
    
    butoane.addEventListener("click",() => {
        const ancore = butoane.querySelectorAll('.buttons a') 
        console.log(ancore);
    })

    


