$(document).ready(function(){
/*acc*/

$(function() {

  $(".accordion__title").on("click", function(e) {

    e.preventDefault();
    var $this = $(this);

    if (!$this.hasClass("accordion-active")) {
      $(".accordion__content").slideUp(400);
      $(".accordion__title").removeClass("accordion-active");
      $('.accordion__arrow').removeClass('accordion__rotate');
    }

    $this.toggleClass("accordion-active");
    $this.next().slideToggle();
    $('.accordion__arrow',this).toggleClass('accordion__rotate');
  });
  
});

/*tabs*/

  $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
    var idx = $(this).index();
    $(this).addClass('active').siblings().removeClass('active');
    $(this).closest('div.tabs').find('div.tabs__content').removeClass('active').eq(idx).addClass('active');
  });


/*reviews*/

let list = document.querySelectorAll(".reviews__list li");

list.forEach(el => {
  el.addEventListener("click", function() {
      el.classList.toggle("show-review"); 
    });
})

/*burger*/

$(".burger").on("click", function() {
  $(".header__nav-list").toggleClass("nav-list-show");
});


/*header*/

  $(window).scroll(function() {
    if ($(this).scrollTop() > 30) {
      $('header').addClass('scrolling');
      $('.menu ul').addClass('menu-bg');
    } else {
      $('header').removeClass('scrolling');
      $('.menu ul').removeClass('menu-bg');
    }

    if($(this).scrollTop() < 30) {
      $('#menu-main').removeClass('menu-show');
    }
  }).trigger("scroll");

  $(".burger").on("click", function() {
    $("nav").toggleClass("menu-show"); 
  });



  $('.header__nav-list a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(".header__nav-list").removeClass("nav-list-show");
    
    var target = $(this).attr('href');
    
    if ($(target).length) {
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 300);
    }
  });
  $(document).on('click', function(event) {
    if (!$(event.target).closest('.header__nav-list').length && !$(event.target).is('.burger')) {
      if ($('.header__nav-list').hasClass('nav-list-show')) {
        $('.header__nav-list').removeClass('nav-list-show');
      }
    }
  });

});