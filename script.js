// Language settings
$(document).ready(function(){
  $('.header_languages').click(function(){
    $(".header_languages_hidden").toggleClass("header_languages_active");
  });
});

// Adaptive navbar
$(document).ready(function(){
  $('.fa-bars').click(function(){
    $(".header_nav").toggleClass("header_nav_active");
  });
});

// About slider
var about_slider = new Swiper('.section_about_slider_container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clicable: true,
  },
  type: 'progressbar',
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
// Accordion menu
var acc = document.getElementsByClassName("section_features_burger_btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    // this.getElementsByClassName('').classList.toggle("accordion_active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
