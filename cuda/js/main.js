$(document).ready(function(){
    
    // STICKY MENU
    $(".js--services-section").waypoint(function(direction){
       if (direction == "down"){
                $("nav").addClass("sticky");
           } else {
                $("nav").removeClass("sticky");
           } 
    });
    
    // ACTIVE LINK
    
    $("nav ul li a ").click(function(){
        $("nav ul li a").removeClass("active");
        $(this).addClass("active");
    });
    $("nav a img.logo").click(function(){
        $("nav ul li a").removeClass("active");
        $("nav ul li:first-child a").addClass("active");
    });
    
    // MIXITUP (PORTFOLIO SECTION)
    
    var mixer = mixitup('.container');
});

    // SMOOTH SCROLL FOR IE / SAFARI / EDGE
    
    $("a").on('click', function(event){
        if (this.hash !== "") {
                event.preventDefault();
            
                var hash = this.hash;
                
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){
                    window.location.hash = hash;
                });
            }
    });


    // MOBILE NAVBAR

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

// ANIMATED CIRCLE

$('svg.radial-progress').each(function( index, value ) { 
  $(this).find($('circle.complete')).removeAttr( 'style' );
});
$(window).scroll(function(){
  $('svg.radial-progress').each(function( index, value ) { 
    // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
    if ( 
        $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
        $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
    ) {
        // Get percentage of progress
        percent = $(value).data('percentage');
        // Get radius of the svg's circle.complete
        radius = $(this).find($('circle.complete')).attr('r');
        // Get circumference (2πr)
        circumference = 2 * Math.PI * radius;
        // Get stroke-dashoffset value based on the percentage of the circumference
        strokeDashOffset = circumference - ((percent * circumference) / 100);
        // Transition progress for 1.25 seconds
        $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
    }
  });
}).trigger('scroll');