//* oldal betöltés
//#region
var betoltes = document.getElementById("betoltes");
window.onload = () => {
    betoltes.style.display = "none";    // a töltés ikon eltűnik ha betöltődik az oldal
};

//* a kezdő oldal tartalma fadeIn-el fog megjelenni, amikor betölt az oldal
$(document).ready(
    function () {
        $("#kezdo_oldal").hide();
        $("#kezdo_oldal").fadeIn(3000);
    });
//#endregion

//* menu bar és menu elemek megjelenítése
//#region 
const menu_bar = document.querySelector(".menu_bar");
const navMenu = document.querySelector("#nav_menu");
const tama_valtas = document.querySelector(".tema_valtas")
menu_bar.addEventListener("click", () => {
    menu_bar.classList.toggle("active");
    navMenu.classList.toggle("active");
    tama_valtas.classList.toggle("active");
    tema_valtas.style.transition = "0.5s";

});

//* a menü elemre való kattintás után el tűnik a telefonnézetes (megnyílt állapotú) menü doboz
document.querySelectorAll(".nav_link").forEach(n => n.addEventListener("click", () => {
    menu_bar.classList.remove("active");
    navMenu.classList.remove("active");
    tema_valtas.classList.remove("active");

}));
//#endregion

//* köszönés napszaknak megfelelően
// #region 
function koszones_napszak_szerint() {
    var nap = new Date();
    var ora = nap.getHours();
    var nev = "kedves Látogató";
    var koszones;

    //* köszönés try catch-el
    // #region
    try {
        (ora >= 5 && ora < 10) ? koszones = `Jó reggelt ${nev}!` : ((ora >= 10 && ora <= 18) ? koszones = `Jó napot ${nev}!` : koszones = `Jó estét ${nev}!`);
    } catch (error) {
        document.getElementById("koszones").innerHTML = err.message;
    }
    // #endregion
    document.getElementById("koszones").innerHTML = koszones;
}

//* függvényhívás
koszones_napszak_szerint();
//#endregion

//* menü változása görgetés hatására
//#region 
window.addEventListener('scroll', () => {
    const gorget = window.scrollY;
    var menu_elem = document.getElementById("nav");
    //ehhez css ben irni kell egy osztály szabályt:
    gorget >= 170 ? menu_elem.classList.add("nav_szinvaltozas") : menu_elem.classList.remove("nav_szinvaltozas");

});
//#endregion

//* aktuális év (copyright) 
//#region  
var ev = document.querySelector('#ev');
var aktualis_ev = new Date().getFullYear();
ev.innerHTML = aktualis_ev;
//#endregion

//* világos és sötét téma
//#region 
const tema_valtas = document.querySelector('.tema_valtas');

tema_valtas.addEventListener('click', () => {
    document.body.classList.toggle('dark');
}
)
//#endregion

//* ScrollReveal
/* #region ScrollReveal  */

window.sr = ScrollReveal();
ScrollReveal.debug = true; // Megakadályozza, hogy hibát adjon a consolban.

sr.reveal('.jobbra_animacio', {
    origin: 'left',
    distance: '300px',
    duration: 1500,
    delay: 600,
    reset: false,
    easing: 'ease',
});

sr.reveal('.fel_animacio', {
    origin: 'bottom',
    distance: '300px',
    duration: 1500,
    delay: 600,
    reset: false,
    easing: 'ease',
});

sr.reveal('.kacsolat_ikon_animacio', {
    origin: 'right',
    distance: '300%',
    duration: 800,
    delay: 1000,
    reset: false,
    interval: 300,
    easing: 'ease',
    rotate: {
        x: 20,
        y: 20,
        z: 120
    }
});


/* #endregion */

//* Üzenetküldés ablak
//#region Üzenetküldés ablak

//** Megynitás
const felugro_ablak_megnyit = document.querySelector('#email_kuldes');
const felugro_ablak = document.querySelector("#felugro_ablak");
const felugro_ablak_tartalom = document.querySelector('#felugro_ablak_tartalom');

felugro_ablak_megnyit.addEventListener("click", (e) => {
    e.preventDefault();
    felugro_ablak.classList.add("felugro_ablak_flex");
    felugro_ablak_tartalom.classList.add("email_ablak_megnyit");
});

//** Bezárás
const felugro_ablak_bezar = document.querySelector('#vissza');
felugro_ablak_bezar.addEventListener("click", (e) => {
    e.preventDefault();
    felugro_ablak.classList.remove("felugro_ablak_flex");
});

//#endregion

//* email js
/* #region email js  */
const kuldesElemek = {
    uzenetkuldes_form: document.getElementById('uzenetkuldes_form'),
    user_name: document.getElementById('user_name'),
    email: document.getElementById('email'),
    message: document.getElementById('message'),
    kuldes_visszajelzes: document.getElementById('kuldes_visszajelzes'),
};

const emailjs_items = {
    serviceID: "service_42dok69",
    templateID: "template_rz659dk",
    form: "#uzenetkuldes_form",
    publicKey: "h5QAmvfSLThNvxXYt",
};

//* regex email validáláshoz
const email_formatum = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

kuldesElemek.uzenetkuldes_form.addEventListener("submit", (e) => {

    e.preventDefault();

    //*  üres mező ellenőrzése
    if (kuldesElemek.user_name.value === '' || kuldesElemek.email.value === '' || kuldesElemek.message.value === '') {

        //* Az előző üzenet eltávolítása
        kuldesElemek.kuldes_visszajelzes.textContent = '';
        kuldesElemek.kuldes_visszajelzes.classList.remove('sikeres_uzenet');

        //* szín hozzáadása és üzenet kiírása
        kuldes_visszajelzes.classList.add('hiba_uzenet');
        kuldesElemek.kuldes_visszajelzes.textContent = 'Az összes mezőt ki kell tölteni!💡'

        //*üzenet törlése 5s után
        setTimeout(() => {

            kuldesElemek.kuldes_visszajelzes.textContent = '';
            kuldesElemek.kuldes_visszajelzes.classList.remove('hiba_uzenet')

        }, 5000)

        return false;

    }

    //* Email formátum ellenőrzése
    //ha minden beviteli mezőbe írva van és az email cím nem egyezik a regex-es 'email_formatum' -al.
    if (!(kuldesElemek.email.value.match(email_formatum)) && !(kuldesElemek.user_name.value === '' && kuldesElemek.email.value === '' && kuldesElemek.message.value === '')) {

        //* Az előző üzenet eltávolítása
        kuldesElemek.kuldes_visszajelzes.textContent = '';
        kuldesElemek.kuldes_visszajelzes.classList.remove('sikeres_uzenet');

        //* szín hozzáadása és üzenet kiírása
        kuldes_visszajelzes.classList.add('hiba_uzenet');
        kuldesElemek.kuldes_visszajelzes.textContent = 'Az email cím helytelen!😾'

        //*üzenet törlése 5s után
        setTimeout(() => {

            kuldesElemek.kuldes_visszajelzes.textContent = '';
            kuldesElemek.kuldes_visszajelzes.classList.remove('hiba_uzenet')

        }, 5000)

        return false;

    } else {

        //* serviceID - templateID - #form - publicKey
        emailjs.sendForm(emailjs_items.serviceID, emailjs_items.templateID, emailjs_items.form, emailjs_items.publicKey)
            .then(() => {

                //* Az előző üzenet eltávolítása
                kuldesElemek.kuldes_visszajelzes.textContent = '';
                kuldesElemek.kuldes_visszajelzes.classList.remove('hiba_uzenet')

                //* Üzenet mutatása és szín hozzáadása
                kuldesElemek.kuldes_visszajelzes.classList.add('sikeres_uzenet')
                kuldesElemek.kuldes_visszajelzes.textContent = 'Üzenet sikeresen elküldve!😸'

                //*üzenet törlése 5s után
                setTimeout(() => {
                    kuldesElemek.kuldes_visszajelzes.textContent = '';
                    kuldesElemek.kuldes_visszajelzes.classList.remove('sikeres_uzenet');
                }, 5000)
            }, (error) => {
                alert('Sikertelen küldés!', error)
            })

        //* beviteli mezők értékek törlése
        kuldesElemek.user_name.value = '';
        kuldesElemek.email.value = '';
        kuldesElemek.message.value = '';

    }



})

/* #endregion */














