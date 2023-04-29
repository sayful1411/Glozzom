// Responsive menu
const mobile_nav = document.querySelector('.mobile-nav-btn');
const nav_header = document.querySelector('#header');

const toggleNavbar = () =>{
  nav_header.classList.toggle('active');
}

mobile_nav.addEventListener('click', () => toggleNavbar());

// Owl Carousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });
});
// Wow animation
new WOW().init();
