let cMaria = document.querySelectorAll('.chooseMaria');
let cMarina = document.querySelectorAll('.chooseMarina');
let cNibelcole = document.querySelectorAll('.chooseNibelcole');
let Maria = document.querySelector('#maria');
let Marina = document.querySelector('#marina');
let Nibelcole = document.querySelector('#nibelcole')

for (let ArusuMaria of cMaria) {
    ArusuMaria.addEventListener('click', () => {
       Maria.style.display = "grid";
       Marina.style.display = "none";
       Nibelcole.style.display = "none";
    })
}
for (let ArusuMarina of cMarina) {
    ArusuMarina.addEventListener('click', () => {
        Marina.style.display = "grid";
        Maria.style.display = "none";
        Nibelcole.style.display = "none";
    })
}
for (let Beelzebub of cNibelcole) {
    Beelzebub.addEventListener('click', () => {
        Nibelcole.style.display = "grid";
        Maria.style.display = "none";
        Marina.style.display = "none";
    })
}