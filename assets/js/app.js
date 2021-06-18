$(function() {

  var header = $("#header"),
      introH = $("#header").innerHeight(),
      scrollOffset = $(window).scrollTop();

  /* Fixed Header */
  checkScroll(scrollOffset);

  $(window).on("scroll", function() {

    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);

  });

  function checkScroll(scrollOffset) {
    if ( scrollOffset >= introH ) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  };

  /* Smooth Scroll */
  $("[data-scroll]").on("click", function(event){
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data("scroll"),
        blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate({
      scrollTop: blockOffset
    }, 500);
  });


  /* Menu nav toggle */
  $("#nav_toggle").on("click", function(event){
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });

    /* Collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    });

    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

});






// ScrollReveal animations
window.sr = ScrollReveal({
    reset: false

});

// Numbers Counter
sr.reveal('.stat', {
    beforeReveal: function (second_section_numbers) {

        $('.number42').animationCounter({
            start: 0,
            end: 42,
            step: 1,
            delay: 80
        });
        $('.number123').animationCounter({
            start: 0,
            end: 132,
            step: 1,
            delay: 30
        });

        $('.number15').animationCounter({
            start: 0,
            end: 15,
            step: 1,
            delay: 90
        });
        $('.number99').animationCounter({
            start: 0,
            end: 99,
            step: 1,
            delay: 60
        });
        $('.number24').animationCounter({
            start: 0,
            end: 24,
            step: 1,
            delay: 100
        });
    }

})


// Revealing of the Blocks
sr.reveal('.intro__inner', {
    duration: 2000
});

sr.reveal('.slider__inner', {
    duration: 2000
});

sr.reveal('.about-cards', {
    duration: 2000
});

sr.reveal('.we-work-with', {
    duration: 2000
});

sr.reveal('.for-all-devices', {
    duration: 2000
});

sr.reveal('.what-we-do', {
    duration: 2000
});

sr.reveal('.reviews-block', {
    duration: 2000
});

sr.reveal('.meet-our-team', {
    duration: 2000
});

sr.reveal('.logos-bar', {
    duration: 2000
});

sr.reveal('.works-portfolio', {
    duration: 2000
});

sr.reveal('.happy-clients', {
    duration: 2000
});

sr.reveal('.our-stories', {
    duration: 2000
});

sr.reveal('.map-icon', {
    viewFactor: 1,
    rotate: {
        y: 615
    },
    reset: true
})

sr.reveal('.footer', {
    duration: 2000
});


// ToTop Button
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 788) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
