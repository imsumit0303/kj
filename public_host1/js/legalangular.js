// var app = angular.module("myApp", ['ngRoute','ngAnimate','ui.router']);
var app = angular.module("myApp", ['ngRoute']);
app.config(function($locationProvider, $routeProvider) {
  console.log("hello");
  $locationProvider.html5Mode(true);
    //$anchorScrollProvider.disableAutoScrolling();
    $locationProvider.hashPrefix('');
    $routeProvider
    
    .when('/',{
      templateUrl: 'home2.html'
    })
    .when('/about',{
      templateUrl: 'about.html'
    })
    .when('/upi',{
      templateUrl: 'upi002.html'
    })
    .when('/student',{
      templateUrl: 'student002.html'
    })
    .when('/contact',{
      templateUrl: 'contact.html'
    })
    .when('/business',{
      templateUrl: 'merchant002.html'
    })
    .when('/legal',{
      templateUrl: 'leg.html'
    })
    .when('/home',{
      templateUrl: 'home2.html'
    });

    console.log("hello1");
  });







  console.log("global hi");
  console.log(" gloval before if11");
  app.controller("myCtrl", function($scope, $http, $location, $rootScope) {



   console.log("into myCtrl");


   $scope.mobRegex=/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
   $scope.nameRegex=/^[a-zA-Z\s]*$/;
   $scope.emailRegex=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   console.log("before if1");
   console.log("hi again");

   
   $scope.hsubmit=function(){
    var emailReg=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var mobileRegex=/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
    console.log("before if2");
    if(emailReg.test($scope.emailNum) || mobileRegex.test($scope.emailNum)){
      var data={
        contact: $scope.emailNum
      };

      $http({
        method: 'post',
        url:'http://192.168.31.166:8080/user_register',
        data: {contact: $scope.emailNum}
      }).then(function (response) {
        console.log("response: %j",response);
      if(response.status==200){  //if success for post request
        console.log("got 200");
        document.getElementById("ss1").innerHTML="successfully submitted";
        document.getElementById('emailNum').value = "";
        //$('#ss1').text('');
      }
      else{
        console.log("response: %j",response);
        document.getElementById("ss1").innerHTML=data.message;
      }

   }, function (response) {  //if error in post request 
    console.log(response);
    alert("an error occured");

  });

    }
    else{
      console.log("under else");
      emailNum.style.border="1px solid red";
      emailNum.style.color="red";
      emailNum.onclick=function(){this.style.border='1px solid #d9d9d9'; this.style.color='#4a4a4a'};
    }
  };




  
  $scope.ssubmit=function(){
    var semailReg=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var smobileRegex=/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
    console.log("before if2");
    if(semailReg.test($scope.semailNum) || smobileRegex.test($scope.semailNum)){
      var data={
        contact: $scope.semailNum
      };
      console.log("$location.protocol "+window.location.protocol);
      $http({
        method: 'post',
        url:'http://192.168.31.166:8080/user_register',
        data: {contact: $scope.semailNum}
      }).then(function (response) {
        console.log("response: %j",response);
        if(response.status==200){
          console.log("got 200");
          document.getElementById("sss1").innerHTML="successfully submitted";
          document.getElementById('semailNum').value = "";
        }
        else{
          console.log("response: %j",response);
          document.getElementById("sss1").innerHTML=data.message;
        }

      }, function (response) {
        console.log(response);
        alert("an error occured");

      });

    }
    else{
     console.log("under else");
     semailNum.style.border="1px solid red";
     semailNum.style.color="red";
     semailNum.onclick=function(){this.style.border='1px solid #d9d9d9'; this.style.color='#4a4a4a'};
   }
 };




 $scope.csend=function(){
  var semailReg=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var smobileRegex=/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
  var data ={
    name: $scope.cname,
    mobile_no: $scope.cphone ,
    email_id: $scope.cemail ,
    message: $scope.cmessage
  };
  console.log("data: %j",data);
  if(semailReg.test($scope.cemail) && smobileRegex.test($scope.cphone) && data.name!=undefined){


    $http({
      method: 'post',
      url:'http://192.168.31.166:8080/contactus',
      data: {
        name: $scope.cname,
        mobile_no: $scope.cphone ,
        email_id: $scope.cemail ,
        message: $scope.cmessage
      }
    }).then(function (response) {
      console.log("response: %j",response);
      if(response.status==200){
        console.log("got 200");
        document.getElementById("sss1c").innerHTML="successfully submitted";
      }
      else{
        console.log("response: %j",response);
        document.getElementById("sss1c").innerHTML=data.message;
      }

    }, function (response) {
      console.log(response);
      alert("an error occured");

    });
  }
  else{
   alert("Enter valid details");
 }

};


});

app.controller('indexCtrl', function ( $window, $rootScope, $scope, $location, $timeout, $cacheFactory, $anchorScroll,) {
  $scope.crsbtn=false;
  $scope.burgbtn=true;
  //$scope.clpsef=true;

  $rootScope.$on("$locationChangeSuccess", function(){  

    // We are explicitly calling $anchorScroll(); function because if we wont then when we will go to next route(Not when we refresh page or use forwar/back button) then
    // for new route onscroll gets called automatically with $(window).scrollTop() = previous route scroll position.
    // Now in order to remove this functionality we are calling this function.
    console.log("anchorscroll called");
    $anchorScroll();
  });
  $scope.button_click = function(path){ 
    console.log("$scope.clpsef "+$scope.clpsef);
    //$scope.clpsef=false;
    //$('nav').removeClass('collapse');
    console.log("button_clicked called (new Date()).getSeconds(): " + (new Date()).getSeconds() + ", (new Date()).getMilliseconds(): " + (new Date()).getMilliseconds());
    
    console.log("path "+path +", $location.path():" + $location.path());
    if (sessionStorage.getItem('scrollpos_init')=="yes") {
      var objr1=JSON.parse(sessionStorage.getItem('scrollPos')); //"{ 'home':120, 'student':130}"
      // {"home":120, 'student': 130}
      console.log('path: ', path);
      if (path == "/") {
        console.log(" if path /");
        objr1["home"]=0;
      } else {
        console.log(" else path substring /");
        objr1[path.substring(1)]=0;
      }
      console.log('objr1: %j', objr1);
      sessionStorage.setItem('scrollPos', JSON.stringify(objr1));
      
    }
    if(path==$location.path() ){  // $location.url can not be implemented for the same route so to check for current page link clicked
      console.log("path is same.... "+path)
      //console.log("$location: %j",$location);
      //$location.url(path).replace();
      //$location.url(path);
      //console.log("$location: %j",$location);
      //$window.location.href=path;
      //$window.location.replace(path);
      $(window).scrollTop(0);
    } else if (path=="/home" && $location.path()=="/") {
      console.log("home path is same.... "+path)
      $(window).scrollTop(0);
      //$window.location.replace("/home");
    }
    else {
      //$window.location.replace(path);
      

      console.log("path is different.... "+path)
     // $scope.clpsef=false;
      //$location.url(path);
      $window.location.href=path;
    }
    


  };


  $(window).on('scroll', function() {
    console.log("user scrolled for $location.path(): "+ $location.path() + ", $(window).scrollTop():" + $(window).scrollTop());
        if (sessionStorage.okSaveScroll) { // false between $routeChangeStart and $routeChangeSuccess
          if(sessionStorage.getItem('scrollpos_init')!="yes"){
           sessionStorage.setItem('scrollPos', JSON.stringify({}));
           sessionStorage.setItem('scrollpos_init', "yes");
           console.log("sessionStorage.getItem('scrollPos'): " + sessionStorage.getItem('scrollPos'));
         }  


         console.log('user scrolled for $location.path(): ', $location.path());
         var scroll_stringfied=sessionStorage.getItem('scrollPos');
         console.log("sessionStorage.getItem('scrollPos'): " + sessionStorage.getItem('scrollPos'));
         var scroll_obj = JSON.parse(scroll_stringfied);
         console.log('$location.path(): ', $location.path());
         console.log("$(window).scrollTop(): ", $(window).scrollTop());
         if ($location.path() == "/") {
          scroll_obj["home"]=$(window).scrollTop();
          console.log('location empty');
        } else {
          scroll_obj[$location.path().substring(1)]=$(window).scrollTop();
          console.log('location not empty');
        }


        sessionStorage.setItem('scrollPos', JSON.stringify(scroll_obj));
      }
    });


  $scope.$on('$routeChangeStart', function() {
    console.log("routeChangeStart......");

    sessionStorage.okSaveScroll = false;
  });

  $scope.$on('$routeChangeSuccess', function() {
      // var queryResult = element[0].querySelector('.collapse');
      // angular.element('queryResult').collapse('hide');
      // console.log("angular.element('.navbar-collapse').collapse('hide'): %j",angular.element('.navbar-collapse').collapse('hide'));
      //angular.element()
      console.log("routechange success.......");
      console.log("moutechange success (new Date()).getSeconds(): " + (new Date()).getSeconds() + ", (new Date()).getMilliseconds(): " + (new Date()).getMilliseconds());
      $timeout(function() { // wait for DOM, then restore scroll position
        console.log("sessionStorage.getItem('scrollpos_init'): ", sessionStorage.getItem('scrollpos_init'));
        if (sessionStorage.getItem('scrollpos_init')=="yes") {
            var scr_obj2=JSON.parse(sessionStorage.getItem('scrollPos')); //{home:344}
            console.log('scr_obj2: %j', scr_obj2);
            var scroll_to_pos;
            if ($location.path() == "/") {
             scroll_to_pos = scr_obj2["home"];
           }else {
             scroll_to_pos = scr_obj2[$location.path().substring(1)];
           }
           console.log('scr_obj2: %j', scr_obj2);
           console.log('scroll_to_pos: ', scroll_to_pos);
           $(window).scrollTop(scroll_to_pos? scroll_to_pos: 0);
         }
         sessionStorage.okSaveScroll = true;
       }, 0);    
    });



  
  
  $scope.burgebtn=function(){
    $scope.clpsef=true;
    $scope.crsbtn=true;
    $scope.burgbtn=false;

    console.log("in burgbtn");
    $('.legaltogglebutton')[1].style.paddingTop="10px";
  }


  $scope.crosbtn=function(){

    $scope.crsbtn=false;
    $scope.burgbtn=true;
    $scope.clpsef=false;
  }

  $scope.blogclicked=function(){
    $scope.clpsef=false;
    $scope.burgbtn=true;
    $scope.crsbtn=false;
  }
  $scope.blogclicked2=function(){
    console.log("in blogclicked2");
    document.getElementsByClassName("blogcls")[0].style.setProperty('color', 'inherit', 'important');
  }


});




app.controller('hideHeaderCtrl', function ( $window, $rootScope, $scope, $location, $timeout, $cacheFactory, $anchorScroll,) {
  $scope.headerWrap = 0;
  var previousScroll = 0;
  var headerOrgOffset= 80;
  console.log("headerOrgOffset "+headerOrgOffset);
    //document.getElementById("headerWrap").style.display = 'block';
    //$('.header-wrap').height(70);
    $(window).scroll(function () {
      console.log("headerOrgOffset "+headerOrgOffset);
      console.log("currentScroll "+$(this).scrollTop());
      var currentScroll = $(this).scrollTop();
      if (currentScroll > headerOrgOffset) {
        if (currentScroll > previousScroll) {
        //$('.header-wrap').slideUp(50,"swing");
        //document.getElementById("headerWrap").style.top = "-75px";

        $("#headerWrap").css("top", "-75px");

      }else{
        //$('.header-wrap').slideDown(50,"swing");
        //document.getElementById("headerWrap").style.top = "0px";

        $("#headerWrap").css("top", "0px");
      }
    } 
    previousScroll = currentScroll;
  });


 

})











