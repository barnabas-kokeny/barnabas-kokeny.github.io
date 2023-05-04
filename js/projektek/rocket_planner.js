//* oldal betöltés
//#region
var betoltes = document.getElementById("betoltes");
window.onload = () => {
    betoltes.style.display = "none";    // a töltés ikon eltűnik ha betöltődik az oldal
};
//#endregion

//* aktuális év (copyright) 
//#region  
var ev = document.querySelector('#ev');
var aktualis_ev = new Date().getFullYear();
console.log(aktualis_ev);
ev.innerHTML = aktualis_ev;
//#endregion

//* ScrollReveal
/* #region ScrollReveal  */

window.sr = ScrollReveal();
ScrollReveal.debug = true; // Nem fog hiba üzenetet adni.

sr.reveal('.jobbra_animacio', {
    origin: 'left',
    distance: '300px',
    duration: 1500,
    delay: 600,
    reset: false,
    easing: 'ease-out',
});

sr.reveal('.balra_animacio', {
    origin: 'right',
    distance: '300px',
    duration: 1500,
    delay: 600,
    reset: false,
    easing: 'ease-out',
});

sr.reveal('.szines_dobozok', {
    origin: 'left',
    distance: '100%',
    duration: 800,
    delay: 1200,
    reset: false,
    interval: 300,
    easing: 'ease',
    scale: 0.3

});

sr.reveal('.funkciok_div', {
    origin: 'right',
    distance: '100%',
    duration: 1500,
    delay: 1000,
    reset: false,
    interval: 500,
    easing: 'ease',
});

sr.reveal('.tech_elem_cimek', {
    origin: 'bottom',
    distance: '300%',
    duration: 700,
    delay: 1200,
    reset: false,
    interval: 300,
    easing: 'ease-out',
});


/* #endregion */

// * felfele görgetés nyíllal
// #region 
fel_nyil = document.getElementById('fel_nyil');
window.addEventListener('scroll', () => {
    //         belső magasság   görgetés száma                      tartalom magassága
    window.innerHeight + ((window.scrollY) + 300) >= document.body.scrollHeight ? fel_nyil.classList.add("fel_nyil_display") : fel_nyil.classList.remove("fel_nyil_display");

    /* #region bővebben */
    /* 

    if ((window.innerHeight + (window.scrollY)+300) >= document.body.scrollHeight) {
        fel_nyil.classList.add("fel_nyil_display");
    }else {
        fel_nyil.classList.remove("fel_nyil_display");
    }
    */
    /*#endregion */

});

// ugrás az oldal tetejére 
fel_nyil.addEventListener('click', () => {
    window.scrollTo(0, 0);
});

// #endregion





