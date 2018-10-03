(function($) {
	"use strict";

  	$(".main-search-btn").on('click', function(e){
      $('.main-search').toggleClass('search-expend');
      e.stopPropagation();
      e.preventDefault();
    });

    $(".navbar-toggler").on('click', function(e){
        $('#menu-toggle').toggleClass('open');
    });

    /*---------------------- Main Slider ------------------*/
    var mySwiper = new Swiper ('.swiper-container.main-slider', {
      slidesPerView: 1,
      loop: true,
      autoplay: 5000,
      speed: 800,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
    });

    /*---------------------- Testmonial Slider ------------------*/
    var mySwiper = new Swiper ('.swiper-container.testimonial-slide', {
    	slidesPerView: 1,
    	loop: true,
    	autoplay: 5000,
    	speed: 800,
    	nextButton: '.swiper-button-next',
    	prevButton: '.swiper-button-prev',
    });

    /*---------------------- Lightbox ------------------*/
    $('.inline-popup').magnificPopup({
      type:'inline',
      midClick: true,
      removalDelay: 300,
      mainClass: 'mfp-fade'
    });

    /*---------------------- Masonry ------------------*/
    var $masoGrid = $('.masonry-wrapper');
    $masoGrid.imagesLoaded( function() {
      $masoGrid.masonry({
        columnWidth: '.grid-sizer',
        itemSelector: '.masonry-item',
        percentPosition: true,
      });
    });

    /*---------------------- Masonry ------------------*/
    $(document).on('click', 'a.nav-link', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutCirc');
        event.preventDefault();
    });

    /*---------------------- Counter ------------------*/
    $('.count').counterUp({
      delay: 10,
      time: 1000
    });

    /*---------------------- Portfolio Filter ------------------*/
    var $portGrid = $('.portfolio-filter');
    $portGrid.imagesLoaded( function() {
      $portGrid.isotope({
          itemSelector: '.portfolio-filter-item',
          layoutMode: 'fitRows'
      });
    });

    // filter functions
    var filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: function() {
      var number = $(this).find('.design').text();
      return parseInt( number, 10 ) > 50;
      },
      // show if name ends with -ium
      ium: function() {
      var name = $(this).find('.design').text();
      return name.match( /ium$/ );
      }
    };
    // bind filter button click
    $('.portfolio-filter-btn').on( 'click', 'button', function() {
      var filterValue = $( this ).attr('data-filter');
      // use filterFn if matches value
      filterValue = filterFns[ filterValue ] || filterValue;
      $portGrid.isotope({ filter: filterValue });
    });
    // change is-checked class on buttons
    $('.portfolio-filter-btn').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.active').removeClass('active');
      $( this ).addClass('active');
      });
    });

    /*=================== Sticky Menu ===================*/
    if($('header.header').length > 0){
      var myNavBar = {

          flagAdd: true,

          elements: [],

          init: function(elements) {
              this.elements = elements;
          },

          add: function() {
              if (this.flagAdd) {
                  for (var i = 0; i < this.elements.length; i++) {
                      document.getElementById(this.elements[i]).className += " fixed-top";
                  }
                  this.flagAdd = false;
              }
          },

          remove: function() {
              for (var i = 0; i < this.elements.length; i++) {
                  document.getElementById(this.elements[i]).className =
                      document.getElementById(this.elements[i]).className.replace(/(?:^|\s)fixed-top(?!\S)/g, '');
              }
              this.flagAdd = true;
          }

      };
      /**
       * Init the object. Pass the object the array of elements
       * that we want to change when the scroll goes down
       */
      myNavBar.init([
          "fixed-nav"
      ]);

      /**
       * Function that manage the direction
       * of the scroll
       */
      function offSetManager() {

          var yOffset = 0;
          var currYOffSet = window.pageYOffset;

          if (yOffset < currYOffSet) {
              myNavBar.add();
          } else if (currYOffSet == yOffset) {
              myNavBar.remove();
          }
      }
      /**
       * bind to the document scroll detection
       */
      window.onscroll = function(e) {
          offSetManager();
      }

      /**
       * We have to do a first detectation of offset because the page
       * could be load with scroll down set.
       */
      offSetManager();
    }

})($);