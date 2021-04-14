  
  let titres = ['Mes recherches récentes', 'Hatik - 1,2,3', 'RK feat SCH - Diva', 'Halsey - Eastside', 'PNL - Blanka', 'Maes - Prioritaire'];

  let chansonsrecentes = document.querySelector('.chansonsrecentes');

  chansonsrecentes.innerHTML = titres.map(function (titres) {
      return `<p class="maClass"> ${titres} </p>`;
  }).join('');

  document.getElementById("go").addEventListener("click", function() {
    this.style.backgroundColor = "black";
    this.style.color ="white";
  });