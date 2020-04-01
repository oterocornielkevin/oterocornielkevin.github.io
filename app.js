$(document).ready(function(){

    //Event handler for setting the active nav-item in the navigation bar.
    $(window).scroll(function() {

        let media = window.matchMedia('(min-width: 992px)');

        if(media.matches){
                let aboutmeTop = $('#aboutme-section').offset().top,
                aboutmeHeight = $('#aboutme-section').outerHeight(),
                portfolioTop = $('#portfolio-section').offset().top - 71,
                portfolioHeight = $('#portfolio-section').outerHeight(),
                contactmeTop = $('#contactme-section').offset().top - 40,
                contactmeHeight = $('#contactme-section').outerHeight(),
                windowHeight = $(window).height(),
                windowScroll = $(this).scrollTop();

            //About Me section
            if(windowScroll > (aboutmeTop + aboutmeHeight - windowHeight)){
                if(!$('#aboutme-nav').hasClass('active')){
                    $('#aboutme-nav').addClass('active');
                } 

                if($('#portfolio-nav').hasClass('active')){
                    $('#portfolio-nav').removeClass('active');
                }

                if($('#contactme-nav').hasClass('active')){
                    $('#contactme-nav').removeClass('active');
                }
            }
            
            //Portfolio section
            if(windowScroll > (portfolioTop + portfolioHeight - windowHeight)){
                if(!$('#portfolio-nav').hasClass('active')){
                    $('#portfolio-nav').addClass('active');
                }

                if($('#aboutme-nav').hasClass('active')){
                    $('#aboutme-nav').removeClass('active');
                }

                if($('#contactme-nav').hasClass('active')){
                    $('#contactme-nav').removeClass('active');
                }

                $('#portfolio-header').addClass('animate-header');
                $('.card').addClass('animate-card');
            }

            //Contact Me section
            if(windowScroll > (contactmeTop + contactmeHeight - windowHeight)){
                if(!$('#contactme-nav').hasClass('active')){
                    $('#contactme-nav').addClass('active');
                }

                if($('#portfolio-nav').hasClass('active')){
                    $('#portfolio-nav').removeClass('active');
                }

                if($('#aboutme-nav').hasClass('active')){
                    $('#aboutme-nav').removeClass('active');
                }

                $('#contactme-header').addClass('animate-header');
                $('.contactme-input').addClass('animate-form');
                $('.sendmessage').addClass('animate-button');
            }
        }

        
    });

    //Event handler for clicking the navigation items.
    $('#navbarSupportedContent li a').click(function(e){
        let targetHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(targetHref).offset().top - 65
        }, 500);

        e.preventDefault();
    });

    //Event handler for the back to the top link at the bottom of the page.
    $('#backtotop').click(function(e){
        $('html, body').animate({
            scrollTop: $('#aboutme-section').offset().top - 70
        }, 1000);

        e.preventDefault();
    });
});