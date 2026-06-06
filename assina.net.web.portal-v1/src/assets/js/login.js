$(document).ready( function(){

   var portrait = window.innerHeight > window.innerWidth;

   var loginAnimation = anime.timeline({
       //loop: true
   });

   if ( portrait ) {
       loginAnimation.add([
           {
               targets: ".login-image_wrapper",
               translateY: ["50%", 50],
               scale: [0, 1.5],
               opacity: [0, 1],
               delay: 400,
               duration: 500,
               easing: "easeOutBack",
           },
           {
               targets: ".login-image_wrapper",
               translateY: [50, -10.7],
               scale: 1,
               easing: "easeOutSine",
               delay: 300,
               duration: 300,
           },
           {
               targets: ".form-signin",
               scale: [0, "1"],
               opacity: [0, "1"],
               easing: "easeInOutBack",
               duration: 650,
               offset: '-=550'
           },
           {
               targets: ".tecnologia",
               opacity: [0, 1],
               translateX: [50, 0],
               delay: 50,
               easing: "easeOutExpo",
               duration: 500,
           },
           {
               targets: ".sw",
               opacity: [0, 1],
               translateX: [50, 0],
               delay: 50,
               easing: "easeOutExpo",
               duration: 500,
           },
           {
               targets: ".form-signin",
               opacity: 1,
               duration: 2500,
           },
           {
               targets: ".sw-logo",
               rotateY: [0, 90],
               easing: "easeInOutQuad",
               delay: 0,
               duration: 150,
               offset: '-=2500'
           },
           {
               targets: ".sw-logo",
               opacity: [1, 0],
               easing: "easeOutQuad",
               delay: 250,
               duration: 1,
           },
           {
               targets: ".sw-logo",
               opacity: [0, 1],
               easing: "easeInOutQuad",
               delay: 0,
               duration: 1,
           },
           {
               targets: ".sw-logo",
               rotateY: [-90, 0],
               easing: "easeInQuad",
               delay: 0,
               duration: 250,
               offset: '-=2500'
           },
           {
               targets: ".foreground",
               opacity: [0, 1],
               easing: "easeInQuad",
               delay: 0,
               duration: 250,
               offset: '-=2500'
           },
       ]);
   }
   else {
       loginAnimation.add([
           {
               targets: ".login-image_wrapper",
               translateX: ["50%", "50%"],
               translateY: ["50%", 0],
               scale: [0, 1.5],
               opacity: [0, 1],
               delay: 400,
               duration: 500,
               easing: "easeOutBack",
           },
           {
               targets: ".login-image_wrapper",
               translateX: [50, -10.7],
               scale: 1,
               easing: "easeOutSine",
               delay: 300,
               duration: 300,
           },
           {
               targets: ".form-signin",
               scale: [0, "1"],
               opacity: [0, "1"],
               easing: "easeInOutBack",
               duration: 650,
               offset: '-=550'
           },
           {
               targets: ".tecnologia",
               opacity: [0, 1],
               translateX: [50, 0],
               delay: 50,
               easing: "easeOutExpo",
               duration: 500,
           },
           {
               targets: ".sw",
               opacity: [0, 1],
               translateX: [50, 0],
               delay: 50,
               easing: "easeOutExpo",
               duration: 500,
           },
           {
               targets: ".form-signin",
               opacity: 1,
               duration: 2500,
           },
           {
               targets: ".sw-logo",
               rotateY: [0, 90],
               easing: "easeInOutQuad",
               delay: 0,
               duration: 150,
               offset: '-=2500'
           },
           {
               targets: ".sw-logo",
               opacity: [1, 0],
               easing: "easeOutQuad",
               delay: 250,
               duration: 1,
           },
           {
               targets: ".sw-logo",
               opacity: [0, 1],
               easing: "easeInOutQuad",
               delay: 0,
               duration: 1,
           },
           {
               targets: ".sw-logo",
               rotateY: [-90, 0],
               easing: "easeInQuad",
               delay: 0,
               duration: 250,
               offset: '-=2500'
           },
           {
               targets: ".foreground",
               opacity: [0, 1],
               easing: "easeInQuad",
               delay: 0,
               duration: 250,
               offset: '-=2500'
           },
       ]);
   }

   $(function(){
      $('#slippry-back').slippry({
          transition: 'kenburns',
          kenZoom: 80,
          speed: 10000,
          pager: false,
          controls: false
      });
   });

});
