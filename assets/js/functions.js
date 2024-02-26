/*global jQuery */
/* Contents
// ------------------------------------------------>
	1.  BACKGROUND INSERT
	2.  MOBILE MENU
	3.	HEADER AFFIX
	4.  COUNTDOWN DATE
	5.  AJAX MAILCHIMP
	6.  AJAX CAMPAIGN MONITOR 
	7.  OWL CAROUSEL
	8.  MAGNIFIC POPUP
	9.  MAGNIFIC POPUP VIDEO
	10. SCROLL TO
	11. PROGRESS BAR
	
*/
const AllPortfolio = [
  {
    className: 'filter-building',
    imageSrc: 'assets/images/portfolio/constructions/1.jpg',
    size: '134,02 м2 + терраса 19,97 м2 и крыльцо 6,01 м2',
    title: 'Этажность',
    titleDetail: 'Двухэтажный',
  },
  {
    className: 'filter-building',
    imageSrc: 'assets/images/portfolio/constructions/2.jpg',
    size: '114,54 м2 + терраса 33,40 м2',
    title: 'Этажность',
    titleDetail: 'Двухэтажный',
  },
  {
    className: 'filter-building',
    imageSrc: 'assets/images/portfolio/constructions/3.jpg',
    size: '255,30 м2 +терраса 67,40 м2',
    title: 'Этажность',
    titleDetail: 'Двухэтажный',
  },
  {
    className: 'filter-building',
    imageSrc: 'assets/images/portfolio/constructions/4.jpg',
    size: '165,00 м2 + терраса 40,40 м2 и крыльцо 9,10 м2',
    title: 'Этажность',
    titleDetail: 'Двухэтажный',
  },
  {
    className: 'filter-building',
    imageSrc: 'assets/images/portfolio/constructions/5.jpg',
    size: '40,40 м2 + терраса 8,10 м2',
    title: 'Этажность',
    titleDetail: 'Двухэтажный',
  },
  {
    className: 'filter-building',
    imageSrc: 'assets/images/portfolio/constructions/6.jpg',
    size: '34,96 м2 + терраса 10,08 м2',
    title: 'Этажность',
    titleDetail: 'Двухэтажный',
  },
  {
    className: 'filter-building',
    imageSrc: 'assets/images/portfolio/constructions/7.jpg',
    size: '121,64 м2 + терраса 71,01 м2',
    title: 'Этажность',
    titleDetail: 'Двухэтажный',
  },
  {
    className: 'filter-building',
    imageSrc: 'assets/images/portfolio/constructions/8.jpg',
    size: '145,12 м2 + терраса 37,77 м2',
    title: 'Этажность',
    titleDetail: 'Двухэтажный',
  },
  {
    className: 'filter-building',
    imageSrc: 'assets/images/portfolio/constructions/9.jpg',
    size: '111,98 м2 + терраса 27,12 м2',
    title: 'Этажность',
    titleDetail: 'Двухэтажный',
  },
  {
    className: 'filter-building',
    imageSrc: 'assets/images/portfolio/constructions/10.jpg',
    size: '100,30 м2 + терраса 27,90 м2 и крыльцо 7,10 м2',
    title: 'Этажность',
    titleDetail: 'Двухэтажный',
  },
  {
    className: 'filter-construction',
    imageSrc: 'assets/images/portfolio/constructions/11.jpg',
    size: '42,00 м2',
    title: 'Этажность',
    titleDetail: 'Двухэтажный',
  },
  {
    className: 'filter-construction',
    imageSrc: 'assets/images/portfolio/constructions/12.jpg',
    size: '32,40 м2',
    title: 'Этажность',
    titleDetail: 'Двухэтажный',
  },
  {
    className: 'filter-construction',
    imageSrc: 'assets/images/portfolio/constructions/13.jpg',
    size: '56,57 м2 + терраса 26,27 м2    ',
    title: 'Этажность',
    titleDetail: 'Двухэтажный',
  },
  {
    className: 'filter-construction',
    imageSrc: 'assets/images/portfolio/constructions/14.jpg',
    size: '120,46 м2 + терраса 25,84 м2',
    title: 'Этажность',
    titleDetail: 'Двухэтажный',
  },
  {
    className: 'filter-construction',
    imageSrc: 'assets/images/portfolio/constructions/15.jpg',
    size: '120,51 м2',
    title: 'Этажность',
    titleDetail: 'Двухэтажный',
  },
  {
    className: 'filter-construction',
    imageSrc: 'assets/images/portfolio/constructions/16.jpg',
    size: '139,16 м2',
    title: 'Этажность',
    titleDetail: 'Двухэтажный',
  },
  {
    className: 'filter-construction',
    imageSrc: 'assets/images/portfolio/constructions/17.jpg',
    size: '118,98 м2 ',
    title: 'Этажность',
    titleDetail: 'Двухэтажный',
  },
  {
    className: 'filter-construction',
    imageSrc: 'assets/images/portfolio/constructions/18.jpg',
    size: '88,76 м2',
    title: 'Этажность',
    titleDetail: 'Двухэтажный',
  },
  {
    className: 'filter-construction',
    imageSrc: 'assets/images/portfolio/constructions/19.jpg',
    size: '139,46 м2',
    title: 'Этажность',
    titleDetail: 'Двухэтажный',
  },
  {
    className: 'filter-construction',
    imageSrc: 'assets/images/portfolio/constructions/20.jpg',
    size: '100,58 м2',
    title: 'Этажность',
    titleDetail: 'Двухэтажный',
  },
  {
    className: 'filter-planning',
    imageSrc: 'assets/images/portfolio/constructions/21.jpg',
    size: '178,10 м2    ',
    title: 'Этажность',
    titleDetail: 'Двухэтажный',
  },
  {
    className: 'filter-planning',
    imageSrc: 'assets/images/portfolio/constructions/22.jpg',
    size: '149,82 м2 + терраса 9,03 м2 и крыльцо 3,71 м2    ',
    title: 'Этажность',
    titleDetail: 'Одноэтажный + мансарда',
  },
  {
    className: 'filter-planning',
    imageSrc: 'assets/images/portfolio/constructions/23.jpg',
    size: '83,70 м2    ',
    title: 'Этажность',
    titleDetail: 'Одноэтажный',
  },
  {
    className: 'filter-terasa',
    imageSrc: 'assets/images/portfolio/constructions/24.jpg',
    size: '7,5 м2    ',
    title: 'Размеры',
    titleDetail: '2500 x 3000 мм',
  },
  {
    className: 'filter-terasa',
    imageSrc: 'assets/images/portfolio/constructions/25.jpg',
    size: '20 м2    ',
    title: 'Размеры',
    titleDetail: '5000 x 0000 мм',
  },
  {
    className: 'filter-terasa',
    imageSrc: 'assets/images/portfolio/constructions/26.jpg',
    size: '34 м2    ',
    title: 'Размеры',
    titleDetail: '8500 x 4000 мм',
  },
  {
    className: 'filter-terasa',
    imageSrc: 'assets/images/portfolio/constructions/27.jpg',
    size: '34 м2    ',
    title: 'Размеры',
    titleDetail: '8500 x 4000 мм',
  },
  {
    className: 'filter-terasa',
    imageSrc: 'assets/images/portfolio/constructions/28.jpg',
    size: '12 м2',
    title: 'Размеры',
    titleDetail: '4000 x 3000 мм',
  },
  {
    className: 'filter-terasa',
    imageSrc: 'assets/images/portfolio/constructions/29.jpg',
    size: '18 м2',
    title: 'Размеры',
    titleDetail: '3000 x 6000 мм',
  },
  {
    className: 'filter-terasa',
    imageSrc: 'assets/images/portfolio/constructions/30.jpg',
    size: '12 м2',
    title: 'Размеры',
    titleDetail: '3000 x 4000 мм',
  },
  {
    className: 'filter-garage',
    imageSrc: 'assets/images/portfolio/constructions/31.jpg',
    size: '35,40 м2',
    title: 'Этажность',
    titleDetail: 'Одноэтажный',
  },
  {
    className: 'filter-garage',
    imageSrc: 'assets/images/portfolio/constructions/32.jpg',
    size: '33,06 м2',
    title: 'Этажность',
    titleDetail: 'Одноэтажный',
  },
  {
    className: 'filter-garage',
    imageSrc: 'assets/images/portfolio/constructions/33.jpg',
    size: '24,00 м2',
    title: 'Этажность',
    titleDetail: 'Одноэтажный',
  },
  {
    className: 'filter-garage',
    imageSrc: 'assets/images/portfolio/constructions/34.jpg',
    size: '30 м2',
    title: 'Этажность',
    titleDetail: 'Одноэтажный',
  },
  {
    className: 'filter-garage',
    imageSrc: 'assets/images/portfolio/constructions/35.jpg',
    size: '30 м2',
    title: 'Этажность',
    titleDetail: 'Одноэтажный',
  },
  {
    className: 'filter-warehouse',
    imageSrc: 'assets/images/portfolio/constructions/36.jpg',
    size: '3474 x 5474 мм    ',
    title: 'Дополнительно',
    titleDetail: '-',
  },
  {
    className: 'filter-warehouse',
    imageSrc: 'assets/images/portfolio/constructions/37.jpg',
    size: '3474 x 5474 мм    ',
    title: 'Дополнительно',
    titleDetail: '-',
  },
  {
    className: 'filter-sauna',
    imageSrc: 'assets/images/portfolio/constructions/38.jpg',
    size: '28,60 м2',
    title: 'Этажность',
    titleDetail: 'Одноэтажный',
  },
  {
    className: 'filter-sauna',
    imageSrc: 'assets/images/portfolio/constructions/39.jpg',
    size: '76,95 м2 + терраса 32,95 м2    ',
    title: 'Этажность',
    titleDetail: 'Одноэтажный',
  },
  {
    className: 'filter-sauna',
    imageSrc: 'assets/images/portfolio/constructions/40.jpg',
    size: '22,32 м2    ',
    title: 'Этажность',
    titleDetail: 'Одноэтажный',
  },
];

(function ($) {
  'use strict';

  /* ------------------  Background INSERT ------------------ */

  var $bgSection = $('.bg-section');
  var $bgPattern = $('.bg-pattern');
  var $colBg = $('.col-bg');

  $bgSection.each(function () {
    var bgSrc = $(this).children('img').attr('src');
    var bgUrl = 'url(' + bgSrc + ')';
    $(this).parent().css('backgroundImage', bgUrl);
    $(this).parent().addClass('bg-section');
    $(this).remove();
  });

  $bgPattern.each(function () {
    var bgSrc = $(this).children('img').attr('src');
    var bgUrl = 'url(' + bgSrc + ')';
    $(this).parent().css('backgroundImage', bgUrl);
    $(this).parent().addClass('bg-pattern');
    $(this).remove();
  });

  $colBg.each(function () {
    var bgSrc = $(this).children('img').attr('src');
    var bgUrl = 'url(' + bgSrc + ')';
    $(this).parent().css('backgroundImage', bgUrl);
    $(this).parent().addClass('col-bg');
    $(this).remove();
  });

  /* ------------------  MOBILE MENU ------------------ */

  var $dropToggle = $('ul.dropdown-menu [data-toggle=dropdown]'),
    $module = $('.module');
  $dropToggle.on('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    $(this).parent().siblings().removeClass('open');
    $(this).parent().toggleClass('open');
  });

  /* ------------------ HEADER AFFIX ------------------ */

  var $navAffix = $('.header-fixed .navbar-fixed-top');
  $navAffix.affix({
    offset: {
      top: 50,
    },
  });

  /* ------------------ COUNTDOWN DATE ------------------ */

  $('.countdown').each(function () {
    var $countDown = $(this),
      countDate = $countDown.data('count-date'),
      newDate = new Date(countDate);
    $countDown.countdown({
      until: newDate,
      format: 'MMMM Do , h:mm:ss a',
    });
  });

  /* ------------------  AJAX MAILCHIMP ------------------ */

  $('.mailchimp').ajaxChimp({
    url: 'http://wplly.us5.list-manage.com/subscribe/post?u=91b69df995c1c90e1de2f6497&id=aa0f2ab5fa', //Replace with your own mailchimp Campaigns URL.
    callback: chimpCallback,
  });

  function chimpCallback(resp) {
    if (resp.result === 'success') {
      $('.subscribe-alert')
        .html('<div class="alert alert-success">' + resp.msg + '</div>')
        .fadeIn(1000);
      //$('.subscribe-alert').delay(6000).fadeOut();
    } else if (resp.result === 'error') {
      $('.subscribe-alert')
        .html('<div class="alert alert-danger">' + resp.msg + '</div>')
        .fadeIn(1000);
    }
  }

  /* ------------------  AJAX CAMPAIGN MONITOR  ------------------ */

  $('#campaignmonitor').submit(function (e) {
    e.preventDefault();
    $.getJSON(
      this.action + '?callback=?',
      $(this).serialize(),
      function (data) {
        if (data.Status === 400) {
          alert('Error: ' + data.Message);
        } else {
          // 200
          alert('Success: ' + data.Message);
        }
      }
    );
  });

  /* ------------------ OWL CAROUSEL ------------------ */

  $('.carousel').each(function () {
    var $Carousel = $(this);
    $Carousel.owlCarousel({
      loop: $Carousel.data('loop'),
      autoplay: $Carousel.data('autoplay'),
      margin: $Carousel.data('space'),
      nav: $Carousel.data('nav'),
      dots: $Carousel.data('dots'),
      center: $Carousel.data('center'),
      dotsSpeed: $Carousel.data('speed'),
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: $Carousel.data('slide-rs'),
        },
        1000: {
          items: $Carousel.data('slide'),
        },
      },
    });
  });

  /* ------------------ MAGNIFIC POPUP ------------------ */

  var $imgPopup = $('.img-popup');
  $imgPopup.magnificPopup({
    type: 'image',
  });
  $('.img-gallery-item').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true,
    },
  });
  /* ------------------  MAGNIFIC POPUP VIDEO ------------------ */

  $('.popup-video,.popup-gmaps').magnificPopup({
    disableOn: 700,
    mainClass: 'mfp-fade',
    removalDelay: 0,
    preloader: false,
    fixedContentPos: false,
    type: 'iframe',
    iframe: {
      markup:
        '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        '</div>',
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: '//www.youtube.com/embed/%id%?autoplay=1',
        },
      },
      srcAction: 'iframe_src',
    },
  });

  /* ------------------ PORTFOLIO FLITER ------------------ */

  var $portfolioFilter = $('.portfolio-filter'),
    portfolioLength = $portfolioFilter.length,
    protfolioFinder = $portfolioFilter.find('a'),
    $portfolioAll = $('#portfolio-all');

  // init Isotope For portfolio
  protfolioFinder.on('click', function (e) {
    e.preventDefault();
    $portfolioFilter.find('a.active-filter').removeClass('active-filter');
    $(this).addClass('active-filter');
  });
  if (portfolioLength > 0) {
    $portfolioAll.imagesLoaded().progress(function () {
      $portfolioAll.isotope({
        filter: '*',
        animationOptions: {
          duration: 750,
          itemSelector: '.portfolio-item',
          easing: 'linear',
          queue: false,
        },
      });
    });
  }
  protfolioFinder.on('click', function (e) {
    e.preventDefault();
    var $selector = $(this).attr('data-filter');
    $portfolioAll.imagesLoaded().progress(function () {
      $portfolioAll.isotope({
        filter: $selector,
        animationOptions: {
          duration: 750,
          itemSelector: '.portfolio-item',
          easing: 'linear',
          queue: false,
        },
      });
      return false;
    });
  });
  function createPortfolioItem(details) {
    const { imageSrc, className, size, title, titleDetail } = details;
    var colDiv = $('<div>').addClass(
      `col-xs-12 col-sm-4 col-md-4 portfolio-item ${className}`
    );
    var portfolioImgDiv = $('<div>').addClass('portfolio--img');
    var divDetails = $('<div>', {
      class: 'building-details',
    });

    var pSize = $('<p>').html('<span>Размеры: </span>' + size);
    var pOther = $('<p>').html(`<span>${title}: </span>` + titleDetail);

    divDetails.append(pSize, pOther);

    var link = $('<a>')
      .attr('href', '#')
      .click(function () {
        window.open(
          imageSrc,
          'targetWindow',
          'toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1090px, height=550px, top=25px, left=120px'
        );
        return false;
      });
    var image = $('<img>').attr('src', imageSrc).attr('alt', 'portfolio image');

    link.append(image);

    portfolioImgDiv.append(divDetails).append(link);
    colDiv.append(portfolioImgDiv);

    return colDiv;
  }

  // Usage
  var portfolioContainer = $('#portfolio-all');

  AllPortfolio.map((portfolioItem) => {
    console.log(portfolioItem);
    return portfolioContainer.append(createPortfolioItem(portfolioItem));
  });
  /* ------------------  SCROLL TO ------------------ */

  var aScroll = $('a[data-scroll="scrollTo"]');
  aScroll.on('click', function (event) {
    var target = $($(this).attr('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').animate(
        {
          scrollTop: target.offset().top - 100,
        },
        1000
      );
      if ($(this).hasClass('menu-item')) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    }
  });

  /* ------------------ PROGRESS BAR ------------------ */
  if ($('.skills').length > 0) {
    $(window).scroll(function () {
      var skillsTop = $('.skills').offset().top - 50,
        skillsHight = $(this).outerHeight(),
        wScroll = $(window).scrollTop();
      if (wScroll > skillsTop - 1 && wScroll < skillsTop + skillsHight - 1) {
        $('.progress-bar').each(function () {
          $(this).width($(this).attr('aria-valuenow') + '%');
        });
      }
    });
  }

  if ($('.skills-scroll').length > 0) {
    $('.progress-bar').each(function () {
      $(this).width($(this).attr('aria-valuenow') + '%');
    });
  }

  /* ------------------ NAV SPLIT ------------------ */

  if ($('.body-scroll').length > 0) {
    $(window).on('scroll', function () {
      $('.section').each(function () {
        var sectionID = $(this).attr('id'),
          sectionTop = $(this).offset().top - 100,
          sectionHight = $(this).outerHeight(),
          wScroll = $(window).scrollTop(),
          $navHref = $("a[href='#" + sectionID + "']"),
          $nav = $('.nav-split').find($navHref).parent();
        if (
          wScroll > sectionTop - 1 &&
          wScroll < sectionTop + sectionHight - 1
        ) {
          $nav.addClass('active');
          $nav.siblings().removeClass('active');
        }
      });
    });
  }

  /* ------------------ GOOGLE MAP ------------------ */
  $('.googleMap').each(function () {
    var $gmap = $(this);
    $gmap.gMap({
      address: $gmap.data('map-address'),
      zoom: $gmap.data('map-zoom'),
      maptype: $gmap.data('map-type'),
      markers: [
        {
          address: $gmap.data('map-address'),
          maptype: $gmap.data('map-type'),
          html: $gmap.data('map-info'),
          icon: {
            image: 'assets/images/gmap/maker.png',
            iconsize: [41, 54],
            iconanchor: [41, 54],
          },
        },
      ],
    });
  });
})(jQuery);
