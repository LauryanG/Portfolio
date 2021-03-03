function afficherProjet() {
    let lesProjets = projets;
    let chaineHtml = "";

    // Parcourir le tableau projets pour générer les projets

    for (let i = 0; i < lesProjets.length; i++) {

        chaineHtml += "<div class=\"accordion-item\">";
        chaineHtml += "<h2 class=\"accordion-header\" id=\"flush-headingOne\">";
        chaineHtml += "<button class=\"accordion-button collapsed\" type=\"button\" data-mdb-toggle=\"collapse\" data-mdb-target=\"#flush-collapseOne\" aria-expanded=\"false\" aria-controls=\"flush-collapseOne\">";
        chaineHtml += lesProjets[i].titre;
        chaineHtml += "</button>"
        chaineHtml += "</h2>"
        chaineHtml += "<div id=\"flush-collapseOne\" class=\"accordion-collapse collapse\" aria-labelledby=\"flush-headingOne\" data-mdb-parent=\"#accordionFlushExample\>";
        chaineHtml += "<div class=\"accordion-body\">";
        chaineHtml += lesProjets[i].description;
        chaineHtml += "</div>";
        chaineHtml += "</div>";
        chaineHtml += "</div>";
    }

    document.querySelector('div.accordion').innerHTML = chaineHtml;
}

afficherProjet();