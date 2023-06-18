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


        // typing text animation script
        var typed = new Typed(".typing", {
          strings: ["Web Developer"],
          typeSpeed: 100,
          backSpeed: 60,
          loop: true
      });

      var typed = new Typed(".typing-2", {
          strings:["Software Engineer ", "Mern Stack Developer"],
          typeSpeed: 100,
          backSpeed: 60,
          loop: true
      });


// sills circular bar
const skill=document.getElementById('skills');
console.log(skill)
    const card = document.querySelectorAll('.card');
 window.addEventListener('load', function(){
   console.log('scroll')
  card.forEach(item => {
    let numElement = item.querySelector('.number');
    let num = parseInt(numElement.innerText);
    let count = 0;
    let time = 2000 / num;
    let circle = item.querySelector('.circle');
    setInterval(() => {
      if(count == num){
        clearInterval();
      } else {
        count += 1;
        numElement.innerText = count + "";
      }
    }, time)
    circle.style.strokeDashoffset = 235 - ( 235 * ( num / 100 ));


  })
});



// $(window).scroll(function(){
//   const card = document.querySelectorAll('.card');
//   console.log('scroll')
//   if(this.scrollY > 1688){
//  card.forEach(item => {
//    let numElement = item.querySelector('.number');
//    let num = parseInt(numElement.innerText);
//    let count = 0;
//    let time = 2000 / num;
//    let circle = item.querySelector('.circle');
//    setInterval(() => {
//      if(count == num){
//        clearInterval();
//      } else {
//        count += 1;
//        numElement.innerText = count + "%";
//      }
//    }, time)
//    circle.style.strokeDashoffset = 235 - ( 235 * ( num / 100 ));


//  })
// }else{
//  console.log("not working")
// }
// });


