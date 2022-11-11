const FADEIN_ELEM1 = document.getElementById('fadein1');

window.addEventListener('scroll', () => {
    const FADEIN_ELEM_TOP = FADEIN_ELEM1.getBoundingClientRect().top;
    const WINDOW_HEIGHT = window.innerHeight;
    if (WINDOW_HEIGHT > (FADEIN_ELEM_TOP + 200)) {
        FADEIN_ELEM1.classList.add('fadein-after');
    }else{
        FADEIN_ELEM1.classList.remove('fadein-after');
    }
});
/*---------------------------------------------------------*/
const FADEIN_ELEM2 = document.getElementById('fadein2');

window.addEventListener('scroll', () => {
    const FADEIN_ELEM_TOP = FADEIN_ELEM2.getBoundingClientRect().top;
    const WINDOW_HEIGHT = window.innerHeight;
    if (WINDOW_HEIGHT > (FADEIN_ELEM_TOP + 200)) {
        FADEIN_ELEM2.classList.add('fadein-after');
    }else{
        FADEIN_ELEM2.classList.remove('fadein-after');
    }
});
/*---------------------------------------------------------*/
const FADEIN_ELEM3 = document.getElementById('fadein3');

window.addEventListener('scroll', () => {
    const FADEIN_ELEM_TOP = FADEIN_ELEM3.getBoundingClientRect().top;
    const WINDOW_HEIGHT = window.innerHeight;
    if (WINDOW_HEIGHT > (FADEIN_ELEM_TOP + 200)) {
        FADEIN_ELEM3.classList.add('fadein-after');
    }else{
        FADEIN_ELEM3.classList.remove('fadein-after');
    }
});
/*---------------------------------------------------------*/
const FADEIN_ELEM4 = document.getElementById('fadein4');

window.addEventListener('scroll', () => {
    const FADEIN_ELEM_TOP = FADEIN_ELEM4.getBoundingClientRect().top;
    const WINDOW_HEIGHT = window.innerHeight;
    if (WINDOW_HEIGHT > (FADEIN_ELEM_TOP + 200)) {
        FADEIN_ELEM4.classList.add('fadein-after');
    }else{
        FADEIN_ELEM4.classList.remove('fadein-after');
    }
});
/*---------------------------------------------------------*/
const FADEIN_ELEM5 = document.getElementById('fadein5');

window.addEventListener('scroll', () => {
    const FADEIN_ELEM_TOP = FADEIN_ELEM5.getBoundingClientRect().top;
    const WINDOW_HEIGHT = window.innerHeight;
    if (WINDOW_HEIGHT > (FADEIN_ELEM_TOP + 200)) {
        FADEIN_ELEM5.classList.add('fadein-after');
    }else{
        FADEIN_ELEM5.classList.remove('fadein-after');
    }
});
/*---------------------------------------------------------*/
const FADEIN_ELEM6 = document.getElementById('fadein6');

window.addEventListener('scroll', () => {
    const FADEIN_ELEM_TOP = FADEIN_ELEM6.getBoundingClientRect().top;
    const WINDOW_HEIGHT = window.innerHeight;
    if (WINDOW_HEIGHT > (FADEIN_ELEM_TOP + 200)) {
        FADEIN_ELEM6.classList.add('fadein-after');
    }else{
        FADEIN_ELEM6.classList.remove('fadein-after');
    }
});
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


