const FADEIN_ELEM1 = document.getElementById('fadein1');

window.addEventListener('scroll', () => {
    const FADEIN_ELEM_TOP = FADEIN_ELEM1.getBoundingClientRect().top;
    const WINDOW_HEIGHT = window.innerHeight;
    if (WINDOW_HEIGHT > (FADEIN_ELEM_TOP + 300)) {
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
    if (WINDOW_HEIGHT > (FADEIN_ELEM_TOP + 300)) {
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
    if (WINDOW_HEIGHT > (FADEIN_ELEM_TOP + 250)) {
        FADEIN_ELEM3.classList.add('fadein-after');
    }else{
        FADEIN_ELEM3.classList.remove('fadein-after');
    }
});



