
document.querySelector(".header__burger-button").addEventListener("click", function() {
    document.querySelector(".header__navigation").classList.add("header__navigation--show"); 
  });

document.querySelector(".header__navigation-button-close").addEventListener("click", function() {
    document.querySelector(".header__navigation").classList.remove("header__navigation--show"); 
  });