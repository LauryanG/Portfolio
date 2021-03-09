function afficherProjet() {
    let lesProjets = projets;
    let chaineHtml = "";

    // Parcourir le tableau projets pour générer les projets et injecter le code HTML

    for (let i = 0; i < lesProjets.length; i++) {

        chaineHtml += "<li class=\"bg-image\">";
        chaineHtml += "<div class=\"unProjet\"> <div style=\"background-image: url("+ lesProjets[i].images[0] +");\"  class=\"titre\"> <h2>" + lesProjets[i].titre + " </h2> </div>";
        chaineHtml += "<div class=\"description\">" + "<p> Projet :" + lesProjets[i].titre + "  <br>" + lesProjets[i].description + "</p>" + "</div> </div>";
        chaineHtml += "<div class=\"image-projet\"><img src=\""+lesProjets[i].images[0]+"\" alt=\"\"></div>";
        chaineHtml += "</li>";
    }

    document.querySelector('ul.listeProjets').innerHTML = chaineHtml;
}

afficherProjet();

// Donne la classe droite à chaque li pair
$( ".listeProjets li:even" ).addClass('droite');

// Toggle la classe ouvert des li lorsque cliquer
  let acc = document.getElementsByClassName("titre");
  let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("ouvert");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
