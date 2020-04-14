$(document).ready(function () {
  // Event handler for setting the active nav-item in the navigation bar.
  $(window).scroll(function () {
    const media = window.matchMedia('(min-width: 992px)');
    const aboutmeTop = $('#aboutme-section').offset().top;
    const aboutmeHeight = $('#aboutme-section').outerHeight();
    const portfolioTop = $('#portfolio-section').offset().top;
    const portfolioHeight = $('#portfolio-section').outerHeight();
    const contactmeTop = $('#contactme-section').offset().top;
    const contactmeHeight = $('#contactme-section').outerHeight();
    const windowHeight = $(window).height();
    const windowScroll = $(this).scrollTop();

    if (media.matches) {
      // About Me section active
      if (windowScroll > (aboutmeTop + aboutmeHeight - windowHeight)) {
        if (!$('#aboutme-nav').hasClass('active')) {
          $('#aboutme-nav').addClass('active');
        }
        if ($('#portfolio-nav').hasClass('active')) {
          $('#portfolio-nav').removeClass('active');
        }
        if ($('#contactme-nav').hasClass('active')) {
          $('#contactme-nav').removeClass('active');
        }
      }

      // Portfolio section fade in
      if (windowScroll > (portfolioTop - (windowHeight / 1.5))) {
        $('#portfolio-header').addClass('animate-header');
        $('#portfolio-header-underline').addClass('animate-header-underline');
        $('.card').addClass('animate-card');
      }

      // Portfolio section active
      if (windowScroll > (portfolioTop + portfolioHeight - windowHeight - 150)) {
        if (!$('#portfolio-nav').hasClass('active')) {
          $('#portfolio-nav').addClass('active');
        }
        if ($('#aboutme-nav').hasClass('active')) {
          $('#aboutme-nav').removeClass('active');
        }
        if ($('#contactme-nav').hasClass('active')) {
          $('#contactme-nav').removeClass('active');
        }
      }

      // Contact Me section fade in
      if (windowScroll > (contactmeTop - (windowHeight / 1.5))) {
        $('#contactme-header').addClass('animate-header');
        $('#contactme-header-underline').addClass('animate-header-underline');
        $('.contactme-input').addClass('animate-form');
        $('.sendmessage').addClass('animate-button');
      }

      // Contact Me section active
      if (windowScroll > (contactmeTop + contactmeHeight - windowHeight - 40)) {
        if (!$('#contactme-nav').hasClass('active')) {
          $('#contactme-nav').addClass('active');
        }
        if ($('#portfolio-nav').hasClass('active')) {
          $('#portfolio-nav').removeClass('active');
        }
        if ($('#aboutme-nav').hasClass('active')) {
          $('#aboutme-nav').removeClass('active');
        }
      }
    } else {
      // About Me section active
      if (windowScroll > (aboutmeTop + aboutmeHeight - windowHeight)) {
        if (!$('#aboutme-nav').hasClass('active')) {
          $('#aboutme-nav').addClass('active');
        }
        if ($('#portfolio-nav').hasClass('active')) {
          $('#portfolio-nav').removeClass('active');
        }
        if ($('#contactme-nav').hasClass('active')) {
          $('#contactme-nav').removeClass('active');
        }
      }

      // Portfolio section active
      if (windowScroll > (portfolioTop + portfolioHeight - windowHeight - 300)) {
        if (!$('#portfolio-nav').hasClass('active')) {
          $('#portfolio-nav').addClass('active');
        }
        if ($('#aboutme-nav').hasClass('active')) {
          $('#aboutme-nav').removeClass('active');
        }
        if ($('#contactme-nav').hasClass('active')) {
          $('#contactme-nav').removeClass('active');
        }
      }

      // Contact Me section active
      if (windowScroll > (contactmeTop + contactmeHeight - windowHeight - 300)) {
        if (!$('#contactme-nav').hasClass('active')) {
          $('#contactme-nav').addClass('active');
        }
        if ($('#portfolio-nav').hasClass('active')) {
          $('#portfolio-nav').removeClass('active');
        }
        if ($('#aboutme-nav').hasClass('active')) {
          $('#aboutme-nav').removeClass('active');
        }
      }
    }
  });

  // Event handler for clicking the navigation items.
  $('#navbarSupportedContent li a').click(function (e) {
    const targetHref = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(targetHref).offset().top - 65
    }, 500);

    e.preventDefault();
  });

  // Event handler for the back to the top link at the bottom of the page.
  $('#backtotop').click(function (e) {
    $('html, body').animate({
      scrollTop: $('#aboutme-section').offset().top - 70
    }, 1000);

    e.preventDefault();
  });
});
