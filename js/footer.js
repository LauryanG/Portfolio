// Va chercher l'année actuelle
const annee = new Date().getFullYear();

// Inject l'année dans le footer
$( ".footer" ).append("&copy; - " + annee + " - Lauryan Gervais ");
