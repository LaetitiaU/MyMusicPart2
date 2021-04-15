const App = () => {

 // Initialisation de la liste de gauche

    let titres = ['Mes recherches récentes', 'Hatik - 1,2,3', 'RK feat SCH - Diva', 'Halsey - Eastside', 'PNL - Blanka', 'Maes - Prioritaire'];

    let chansonsrecentes = document.querySelector('.chansonsrecentes');

    chansonsrecentes.innerHTML = titres.map(function (titres) {
        return `<p class="maClass"> ${titres} </p>`;
    }).join('');

// Gestion de la couleur du bouton

    const goElement = document.getElementById("go");
    let isWhite = true;

    goElement.addEventListener("click", () => {
        ChangeButtonColor()
    });

    const ChangeButtonColor = () => {

        if (isWhite === true) {  // ou (isWhite)
            goElement.style.backgroundColor = "black";
            goElement.style.color ="white";
            isWhite = false;
        } else if (isWhite === false) { // ou (!isWhite)
            goElement.style.backgroundColor = "white";
            goElement.style.color ="black";
            isWhite = true;
        }
    }

}


window.addEventListener('load', App);


