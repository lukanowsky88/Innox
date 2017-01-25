/* HEADER */

// Sticky nav 

$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $('nav').addClass('sticky-nav');
        $('nav li').addClass('changed');
    }
    else {
        $('nav').removeClass('sticky-nav');
        $('nav li').removeClass('changed');
    }
});

//Slider setInterval function

setInterval(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();
    
    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      
    }
    
    currentSlide.removeClass('active-slide');
    nextSlide.addClass('active-slide');
}, 5000);


//Slider onclick function

var headerSlider = function() {
 
  $('.right-icon').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();
    
    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      
    }
    
    currentSlide.removeClass('active-slide');
    nextSlide.addClass('active-slide');
  });
  $('.left-icon').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();
      
    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
    }
      
    currentSlide.removeClass('active-slide');
    prevSlide.addClass('active-slide');
  });
    
}


$(document).ready(headerSlider);

//Responsive menu 

$('button.ham').on('click', function() {
    $('.nav-menu').slideToggle();
    $('button.ham').toggleClass('active');
});

/* ABOUT */

//About details - onclick toggleClass 

$('.btn-about').click(function() {
    $('.row-about-details').slideToggle();
});

/* WORKS */

//Filters - changing class onclick

$('.filter').on('click', function() {
    $('.filter').removeClass('active');
    $(this).addClass('active');
});

// Isotope 
var $grid = $('.row-works').isotope({
});
$('#filters').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

/* CLIENTS */ 

// Owl carousel settings 
 $("#owl-example").owlCarousel({
          autoplay: true,
          autoPlay: 3000, //Set AutoPlay to 3 seconds
          loop: true,
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3],
          responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            
        }
    }
      });

/* PURCHASE */

var purchaseSlider = function() {
 
  $('.arrow-right').click(function() {
    var currentSlide = $('.active-purchase-slide');
    var nextSlide = currentSlide.next();
    
    if(nextSlide.length === 0) {
      nextSlide = $('.purchase-slide').first();
      
    }
    
    currentSlide.removeClass('active-purchase-slide');
    nextSlide.addClass('active-purchase-slide');
  });
  $('.arrow-left').click(function() {
    var currentSlide = $('.active-purchase-slide');
    var prevSlide = currentSlide.prev();
      
    if(prevSlide.length === 0) {
      prevSlide = $('.purchase-slide').last();
    }
      
    currentSlide.removeClass('active-purchase-slide');
    prevSlide.addClass('active-purchase-slide');
  });
    
}

setInterval(function() {
 
   
    var currentSlide = $('.active-purchase-slide');
    var nextSlide = currentSlide.next();
    
    if(nextSlide.length === 0) {
      nextSlide = $('.purchase-slide').first();
      
    }
    
    currentSlide.removeClass('active-purchase-slide');
    nextSlide.addClass('active-purchase-slide');
    
    
}, 8000);


$(document).ready(purchaseSlider);


/* BLOG */

// .btn onclick load more and change text on button
$('.btn-load-more').on('click', function() {
    $('.row-blog-hide').slideToggle();
    $(this).text(function(i, text) {
        return text === "LOAD MORE" ? "HIDE" : "LOAD MORE";
    });
});


/* SMOOTH SCROLL */

$('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

/* CONTACT */ 

    $('#subject').css('color','#DBD9D8');
    $('#subject').change(function() {
       var current = $('#subject').val();
       if (current != '') {
           $('#subject').css('color','#97735e');
       } else {
           $('#subject').css('color','#b7b6b6');
           
       }
    }); 





