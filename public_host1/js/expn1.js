


  /* trial remaining*/



function growDiv() {

  var change = document.getElementById("more-button");
  var change2=document.getElementById("plusid");
   console.log("check know more");
   var growDiv = document.getElementById('grow');
   if (change.innerHTML == "Know more"){
       
        if (!growDiv.clientHeight) {
          console.log("inside new if")
          var wrapper = document.querySelector('.measuringWrapper');
          growDiv.style.height = wrapper.clientHeight + "px";
          //$('html, body').animate({scrollTop: $("#hdsh").offset().top-80}, "smooth");

          
          $('html, body').stop(true,true).animate({scrollTop: $("#hdsh").offset().top-80}, 800);
          change.innerHTML = "Cancel";
          //change2.innerHTML="<img src=\"/images/homesvgn/Plus cross.svg\" width=\"400px\" height=\"150px\">";
          //<img src="/images/homesvgn/Plus cross.svg" style="height: 25px;">
          console.log("changed to cancel");
          //imgElement.setAttribute('src', '/images/homesvgn/Plus cross.svg');
          document.getElementById("plusid").setAttribute("src","images/homesvgn/Cancel cross.svg");
        }
    }
    else{
        
          console.log("inside growdiv if");
          change.innerHTML = "Know more";
          document.getElementById("plusid").setAttribute("src","images/homesvgn/Plus cross.svg");
          



          growDiv.style.height = 0;
          $("#more-button").on("click", function() {
              var el = $(this);
              if (el.text() == el.data("text-swap")) {
                console.log("in if swap");
                el.text(el.data("text-original"));
              } else {
                  console.log("in else swap");
                  el.data("text-original", el.text());
                  el.text(el.data("text-swap"));
                }
          });

     
          }
  var growDiv = document.getElementById('grow');
  console.log("growDiv.getBoundingClientRect(): %j",growDiv.getBoundingClientRect());
  const d = document.getElementById('hdsh');
  var yourHeight = '100';
 
  
}


/********************************************************************************************************/

 var upClass = 'toggle-up';
 var downClass = 'toggle-down';
function toggle() {
  var square = document.querySelector('.square');
  
  if (~square.className.indexOf(downClass)) {
    square.className = square.className.replace(downClass, upClass);
  } else {
        square.className = square.className.replace(upClass, downClass);
  }
}

/************************************************************************/

$(document).on("scroll", function(){ 
// or as a shorthand $(document).scroll(function(){
if($(document).scrollTop() > 50)
    {
        //begin to scroll
        $("#floating_list").css("position","fixed");
        $("#floating_list").css("marginTop","0px");



        $("#rmvlegal1").removeClass("rmvlegal");
        $("#rmvlegal2").removeClass("rmvlegal");
        $("#floating_list").css("top",0);
    }
    else
    {
        //lock it back into place
        $("#floating_list").css("position","relative");
        $("#floating_list").css("marginTop","40px");
        $("#floating_list").css("zIndex","800");

        // $("#floating_list").css("width","500px");
        $("#rmvlegal1").addClass("rmvlegal");
        $("#rmvlegal2").addClass("rmvlegal");
        
    }
});


function terms(){
  // $("#floating_list").css("marginBottom","70px");
  // $("#floating_list").css("marginTop","70px");
  window.location.hash ="";
  if("#floating_list".css(margin-top)!='0px' &&  "#floating_list".css(margin-bottom)!='0px'){
    console.log("true");
    $("#floating_list").removeClass("addmargin");
  }
  else if($(document).scrollTop() > 50){
    console.log("scrolled else if");
    $("#floating_list").removeClass("addmargin");
    $("#floating_list").css("marginTop","0px");
  }
  else{
    console.log("false");
    $("#floating_list").css("marginTop","0px");

  }

}

function privacy(){
  // $("#floating_list").css("marginBottom","70px");
  // $("#floating_list").css("marginTop","70px");

  if("#floating_list".css(margin-top)!='0px' &&  "#floating_list".css(margin-bottom)!='0px'){
    console.log("true");
    $("#floating_list").removeClass("addmargin");
  }
  else if($(document).scrollTop() > 50){
    console.log("scrolled else if");
    $("#floating_list").removeClass("addmargin");
    $("#floating_list").css("marginTop","4px");
  }
  else{
    console.log("false");
    $("#floating_list").css("marginTop","4px");

  }

}



/*********************************************************************/




$(document).click(function(e){
  if (!$(e.target).hasClass('navbar-collapse') && !$(e.target).hasClass('nav') && $(e.target).parents('.nav').length == 0) {
    $('.closeOnHtml').removeClass('in');
  }
});



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






