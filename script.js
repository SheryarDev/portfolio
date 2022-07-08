$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('header').addClass("sticky");
            $('li > a').addClass("nav-font-color");
            $('.logo > a').addClass("logo-font-color");
            // $('li> a').addClass("col");
        }else{
            $('header').removeClass("sticky");
            $('li > a').removeClass("nav-font-color");
            $('.logo > a').removeClass("logo-font-color");
        }
        
    });



});

       // toggle menu/navbar script
       $('.menu-btn').click(function(){
        $('.menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
