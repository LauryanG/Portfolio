function afficherProjet() {
    let lesProjets = projets;
    let chaineHtml = "";
    let id = "";

    // Parcourir le tableau projets pour générer les projets et injecter le code HTML
    for (let i = 0; i < lesProjets.length; i++) {
      id = i;

      chaineHtml += "<li class=\"bg-image\">";
      chaineHtml += "<div class=\"unProjet\"> <div style=\"background-image: url("+ lesProjets[i].images[0] +");\"  class=\"titre\"> <h2>" + lesProjets[i].titre + " </h2> </div>";
      chaineHtml += "<div class=\"description\">" + "<p> Projet :" + lesProjets[i].titre + "  <br>" + lesProjets[i].description + "</p>" + "</div> </div>";
      chaineHtml += "<div id=\""+ id +"\" class=\"image-projet\" data-mdb-toggle=\"modal\" data-mdb-target=\"#exampleModal\"><img src=\""+lesProjets[i].images[0]+"\" alt=\"\"></div>";
      chaineHtml += "</li>";
    }

    document.querySelector('ul.listeProjets').innerHTML = chaineHtml;
    
}

afficherProjet();

// Donne la classe droite à chaque li pair
$( ".listeProjets li:even" ).addClass('droite');

//   do functionality on screens smaller than 768px
//   Toggle la classe ouvert des li lorsque cliquer
if (window.matchMedia('(max-width: 768px)').matches)
{
  $( ".titre" ).click(function() {
    $( this ).toggleClass("ouvert");
    let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
  });
}

$( ".image-projet" ).click(function() {
  // Va chercher le tableau contenant les images du projet cliquer
  let tabImages = projets[$(this).attr('id')].images;

  // Vider le carousel...
  $( ".carousel-inner" ).empty();

  // Et le remplir avec les images du projet cliqué...
  for (let i = 0; i < tabImages.length; i++) {
    $( ".carousel-inner" ).append( "<div class=\"carousel-item\"><img src=\"" + tabImages[i] + "\"class=\"d-block w-100\" alt=\"...\"/></div>" );
  }

  // S'il y a des vidéos, ajouter les vidéos dans le carousel.
  let video = projets[$(this).attr('id')].video;
  if(video == true) {
    let tabVideo = projets[$(this).attr('id')].videos;
    for (let i = 0; i < tabVideo.length; i++) {
      $( ".carousel-inner" ).append( "<div class=\"carousel-item\"> <div class=\"embed-responsive embed-responsive-16by9\"> <iframe class=\"embed-responsive-item\" src=\"" + tabVideo[i] + "\"allowfullscreen></iframe> </div></div>" );
    }
  }
  // Ajoute la classe active au premier div
  $( ".carousel-inner div:first-of-type" ).addClass( "active" );
  // Ajoute le titre et la description aux endroits indiquer
  $(".card-title").html(projets[$(this).attr('id')].titre);
  $(".card-text").html(projets[$(this).attr('id')].description);
});

