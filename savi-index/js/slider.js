$(document).ready(function() {

  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 5; //globaly define number of elements per page
  var syncedSecondary = false;

  sync1.owlCarousel({
      items: 1,
      slideSpeed: 2000,
      autoplay: false, 
      // dots: true,
      nav: true,
      loop: true,
      responsiveRefreshRate: 200,
      navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: white;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: white;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
  }).on('changed.owl.carousel', syncPosition);

  sync2
      .on('initialized.owl.carousel', function() {
          sync2.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
          items: slidesPerPage,
          // dots: true,
          smartSpeed: 200,
          slideSpeed: 500,
          // slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
          responsiveRefreshRate: 100,
          responsive:{
            0: {
              items: 1
            },
            768: {
              items: 2
            },
            992: {
                items: 3
            },
            1200: {
              items: 5
            }
          }
      }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
      //if you set loop to false, you have to restore this next line
      //var current = el.item.index;

      //if you disable loop you have to comment this block
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - (el.item.count / 2) - 4);


      //end block

      sync2
          .find(".owl-item")
          .removeClass("current")
          .eq(current)
          .addClass("current");
      var onscreen = sync2.find('.owl-item.active').length - 1;
      var start = sync2.find('.owl-item.active').first().index();
      var end = sync2.find('.owl-item.active').last().index();

      if (current > end) {
          sync2.data('owl.carousel').to(current, 100, true);
      }
      if (current < start) {
          sync2.data('owl.carousel').to(current - onscreen, 100, true);
      }
  }

  function syncPosition2(el) {
          var number = el.item.index;
          sync1.data('owl.carousel').to(number, 100, true);
  }

  sync2.on("click", ".owl-item", function(e) {
      e.preventDefault();
      var number = $(this).index();
      sync1.data('owl.carousel').to(number, 300, true);
  });


  $(".certification-slider").owlCarousel({
    mouseDrag: true,
    dots: false,
    nav: true,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #a90e14;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #a90e14;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    responsive: {
        0 : {
          items: 2

        },
        0 : {
          items: 2
        },
        768 : {
          items: 3
        },
        992 : {
          items: 4
        },
        1170 : {
          items: 6
        }
    }
  });
});