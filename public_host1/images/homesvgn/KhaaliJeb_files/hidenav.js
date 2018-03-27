
/*// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 400);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
         // updated to 0px from 70px.
         $(".cmn2all").css("marginTop","70px");
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        //$('nav').removeClass('nav-down').addClass('nav-up');
        $('nav').removeClass('nav-down',1000,'ease');
        $('nav').addClass('nav-up',1000,'ease');
        $(".cmn2all").css("marginTop","0px");
        
    } else {
        // Scroll Up
        
        if(st + $(window).height() < $(document).height()) {
            //$('nav').removeClass('nav-up'); 
            //$('nav').addClass('nav-down');
            $('nav').removeClass('nav-up',1000,'ease');
            $('nav').addClass('nav-down',1000,'ease');
            //$( this ).addClass( "big-blue", 1000, "easeOutBounce" );


            //$(this).stop().animate( getClassContent('blue'), {duration:500});
            //$('.donotapply').removeClass('nav-up');   
            //$('.donotapply').removeClass('nav-down');                    
        }
    }
    lastScrollTop = st;
}*/



//hide/show navbar on scroll
var previousScroll = 0,
    //headerOrgOffset = $('.mainmenu').height();
    headerOrgOffset=70;
    console.log("headerOrgOffset "+headerOrgOffset);

//$('.header-wrap').height($('.mainmenu').height());
 $('.header-wrap').height(70);
$(window).scroll(function () {
    console.log("headerOrgOffset "+headerOrgOffset);
    console.log("currentScroll "+$(this).scrollTop());
    var currentScroll = $(this).scrollTop();
    if (currentScroll > headerOrgOffset) {
        if (currentScroll > previousScroll) {
            // if(currentScroll>=(previousScroll+70){
            //     $('.header-wrap').slideUp(100,"linear");
            // }
            $('.header-wrap').slideUp(50,"swing");
            
        } else {
            $('.header-wrap').slideDown(50,"swing");
        }
    } 
    previousScroll = currentScroll;
});










$(document).click(function(e){
  if (!$(e.target).hasClass('navbar-collapse') && !$(e.target).hasClass('nav') && $(e.target).parents('.nav').length == 0) {
    $('.closeOnHtml').removeClass('in');
  }
});


// $('.nav a').on('click', function(){
//   $(".navbar-toggle").click() //bootstrap 3.x
// });





/*$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("navbar-collapse in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
            $("button.navbar-toggle").click();
        }
    });
});*/




    // $(document).click(function (e) {
    //     var clickover = $(e.target);
    //     var _opened = $(".navbar-collapse").hasClass("navbar-collapse");
    //      if (_opened == true && !clickover.hasClass("navbar-toggle") && $(".closeOnHtml").height()!= 0) {

    //         $("button.legaltogglebutton").click();
    //     }
    //     //$(".closeOnHtml").height()= 0;
    // });
    
  



    function txtclick(){
        $('#ss1').text('');
    }
    function stxtclick(){
        $('#sss1').text('');
    }
    
    
    
 function chred(x){
    x.style.color="red";
}

function chblack(x){
    x.style.color="#777";
}




  console.log("in csljs");

$(document).ready(function(){
    var mCarouselTO = setTimeout(function(){
        $('#Carousel').carousel({
            interval: 6000,
            cycle: true,
        }).trigger('slide');
    }, 10);
    var q = mCarouselTO;
});

$(document).ready(function(){
    var mCarouselTO = setTimeout(function(){
        $('#Carousel1').carousel({
            interval: 6000,
            cycle: true,
        }).trigger('slide');
    }, 10);
    var q = mCarouselTO;
});


// $(".carousel").swipe({

//   swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

//     if (direction == 'left') $(this).carousel('next');
//     if (direction == 'right') $(this).carousel('prev');

//   },
//   allowPageScroll:"vertical"

// });




// $(document).ready(function() {
//    $("#Carousel").swiperight(function() {
//       console.log("swiperight");
//       $(this).carousel('prev');
//     });
//    $("#Carousel").swipeleft(function() {
//       console.log("swipeleft");
//       $(this).carousel('next');
//    });
// });


 // $(document).ready(function() {  
 //         console.log("in swiping")
 //         $(".carousel-inner").swiperight(function() {  
 //              $(this).parent().carousel('prev');  
 //                });  
 //           $(".carousel-inner").swipeleft(function() {  
 //              $(this).parent().carousel('next');  
 //       });  
 //    });  










// $(document).ready(function() {
//     var blue = document.getElementById("blue");
    
//     // Hammer(blue).on("swipeleft", function() {
//     //       $(blue).animate({left: "-=100"}, 500)  
//     // });
    
//     Hammer(document.getElementById("blue")).on("swiperight", function() {
//           $(blue).animate({left: "+=100"}, 500)  
//     });
// });




// $(document).ready(function() {
//     var blue = document.getElementById("blue");
//     var hammertime = new Hammer(blue);
//      hammertime.on("swipeleft", function() {
//         $(blue).animate({left: "-=100"}, 500);
//         $("#event").text("swipe left");
//     });
    
//     hammertime.on("swiperight", function() {
//         $(blue).animate({left: "+=100"}, 500);
//         $("#event").text("swipe right");
//     });
// });






// $(blue).hammer().on("swipeleft", function() {
//     //callback
// });















