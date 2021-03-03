// Source : https://codyhouse.co/blog/post/store-theme-color-preferences-with-localstorage

let themeSwitch = document.getElementById('flexSwitchCheckDefault');
if(themeSwitch) {
    initTheme();
  themeSwitch.addEventListener('change', function(event){
    resetTheme(); // update color theme
  });
 
  function initTheme() {
    let darkThemeSelected = (localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'dark');
    themeSwitch.checked = darkThemeSelected;

    darkThemeSelected? document.body.classList.add("dark"):document.body.classList.remove("dark");

    // darkThemeSelected? document.getElementsByClassName("logo").src = "media/logo/logoBleu.png" : document.getElementsByClassName("logo").src = "media/logo/logoMauve.png";
  }


  function resetTheme() {
    if(themeSwitch.checked) { // dark theme has been selected
      document.body.classList.add('dark');
      localStorage.setItem('themeSwitch', 'dark'); // save theme selection 
    } else {
      document.body.classList.remove('dark');
      localStorage.removeItem('themeSwitch'); // reset theme selection 
    } 
  };
}