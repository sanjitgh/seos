$(document).ready(function(){
    $(".client_carousel").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed:1200,

    });
  });

//   back to top

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

// sticky header
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	if (scroll >= 50) {
		$(".main_header").addClass("header_bg");
	} else {
		$(".main_header").removeClass("header_bg");
	}
 });

// animation

 new WOW().init();

// drawer menu

 document.querySelector(".ham").addEventListener("click",changeIcon);

function changeIcon(event){
  let ham = event.currentTarget;
  ham.classList.toggle("clicked");
    ham.children[0].classList.toggle('rotate-left');
    ham.children[1].classList.toggle('vanish');
    ham.children[2].classList.toggle('rotate-right');
    document.querySelector(".drawer-items").classList.toggle("visible");
}