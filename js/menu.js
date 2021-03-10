// Ouvre et ferme le menu mobile lorsque l'on clique sur le bouton
$( ".bouton-menu" ).click(function() {
    $( ".nav" ).toggleClass( "ouvert" );
});

// Ajoute la classe pageActive à la page que nous sommes.
$(document).ready(function ($) {
    let url = window.location.href;
    let pages = url;
    $('.nav a').each(function () {
        let pageActive = this.href;

        if (pages == pageActive) {
            $(this).children().addClass("pageActive");
        }
    });
});