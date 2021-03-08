// let boutonMenu = document.getElementsByClassName("bouton-menu");

// boutonMenu.addEventListener('click'), function(event) {
//     document.nav.classList.toggle('ouvert');
// }

// document.getElementsByClassName("bouton-menu").addEventListener("click", function() {
//     document.nav.classList.toggle('ouvert');
//   });

$(document).ready(function() {

    // Get current page URL
    var url = window.location.href;
   
    // remove # from URL
    url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
   
    // remove parameters from URL
    url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
   
    // select file name
    url = url.substr(url.lastIndexOf("/") + 1);
    
    // If file name not avilable
    if(url == ''){
    url = 'index.html';
    }
    
    // Loop all menu items
    $('nav a').each(function(){
   
     // select href
     var href = $(this).find('a').attr('href');
    
     // Check filename
     if(url == href){
   
      // Add active class
      $(this).addClass('active');
     }
    });
   });