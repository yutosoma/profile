let els1 = document.querySelectorAll('.scroll_up1');

els1.forEach(function(fadeIn) {
  let windowHeight = window.innerHeight;
  
  window.addEventListener('scroll', function() {
    let offset = fadeIn.getBoundingClientRect().top;
    let scroll = window.scrollY;
    
    if(scroll > offset - windowHeight + 800){
       fadeIn.classList.add('is-scrollIn');
    }
  })
})
/*---------------------------------------------------------*/

let els2 = document.querySelectorAll('.scroll_up2');

els2.forEach(function(fadeIn) {
  let windowHeight = window.innerHeight;
  
  window.addEventListener('scroll', function() {
    let offset = fadeIn.getBoundingClientRect().top;
    let scroll = window.scrollY;
    
    if(scroll > offset - windowHeight + 2200){
       fadeIn.classList.add('is-scrollIn');
    }
  })
})
/*---------------------------------------------------------*/
img = new Array("image/shre9.png","image/shre8.png")
count = -1; //*2
imgTimer();

function imgTimer() {
  count++;
  if (count == img.length) count = 0;
  document.shrine.src = img[count];
  setTimeout("imgTimer()",3000); //*6
}
/*---------------------------------------------------------*/
const scroll_to_top_btn = document.querySelector('#scroll-to-top-btn');
scroll_to_top_btn.addEventListener( 'click' , scroll_to_top );

function scroll_to_top(){
	window.scroll({top: 0, behavior: 'smooth'});
};

window.addEventListener( 'scroll' , scroll_event );

function scroll_event(){
	
	if(window.pageYOffset > 400){
		scroll_to_top_btn.style.opacity = '1';
	}else	if(window.pageYOffset < 400){
		scroll_to_top_btn.style.opacity = '0';
	}
	
};

