// gestion du bouton menu
var menu = document.getElementById("menu");
var burger = document.getElementById("iconBurger");

document.getElementById("burger").addEventListener("click", function () {
  menu.classList.toggle("open");
  this.classList.toggle("open");
});

/* effet sur l'image LA MANU Au clic changer l'image */

document.getElementById("effect2").addEventListener("click", function () {
  if (this.getAttribute("src") == "assets/img/logos/logo-la-manu-carre.png") {
    this.src = "assets/img/logos/diplome-web-designer.png";
  } else {
    this.src = "assets/img/logos/logo-la-manu-carre.png";
  }
});

/* effet sur l'image votre logo ici */

document.getElementById("effect1").addEventListener("mouseover", function () {
  document.getElementById("effect1").src =
    "assets/img/logos/votre-logo-ici-contact.png";
});

document.getElementById("effect1").addEventListener("mouseout", function () {
  document.getElementById("effect1").src =
    "assets/img/logos/votre-logo-ici.png";
});

/* effet sur l'image bientôt freelance */

document.getElementById("effect3").addEventListener("mouseover", function () {
  document.getElementById("effect3").src =
    "assets/img/logos/services-laudelacom.png";
});

document.getElementById("effect3").addEventListener("mouseout", function () {
  document.getElementById("effect3").src =
    "assets/img/logos/logo laudelacom.png";
});

// SLIDERS
// Noyon
var slide = new Array(
  "assets/img/lieux/noyon-1-pont-l-eveque-laurence-senilhe.png",
  "assets/img/lieux/noyon-2-becassine-laurence-senilhe.png",
  "assets/img/lieux/noyon-3-le-cloitre-laurence-senilhe.png"
);
var slideAlt = new Array(
  "Pont l'évèque à côté de Noyon",
  "Noyon et sa bécassine",
  "le cloître de Noyon"
);
var linkHref = new Array(
  "assets/img/lieux/noyon-1-pont-l-eveque-laurence-senilhe.png",
  "assets/img/lieux/noyon-2-becassine-laurence-senilhe.png",
  "assets/img/lieux/noyon-3-le-cloitre-laurence-senilhe.png"
);
var numero = 0;

function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero < 0) numero = slide.length - 1;
  if (numero > slide.length - 1) numero = 0;
  document.getElementById("slide").setAttribute("src", slide[numero]);
  document.getElementById("slide").setAttribute("alt", slideAlt[numero]);
  document.getElementById("linkSlider").setAttribute("href", linkHref[numero]);
}

// Paris
var slideParis = new Array(
  "assets/img/lieux/paris-1-tour-eiffel.png",
  "assets/img/lieux/paris-2-arc-triomphe.png",
  "assets/img/lieux/paris-3-sacre-coeur.png"
);
var slideAltParis = new Array(
  "Paris le tour eiffel",
  "Paris l'arc de triomphe",
  "Paris le sacré coeur"
);
var linkHrefParis = new Array(
  "assets/img/lieux/paris-1-tour-eiffel.png",
  "assets/img/lieux/paris-2-arc-triomphe.png",
  "assets/img/lieux/paris-3-sacre-coeur.png"
);
var numero = 0;

function ChangeSlideParis(sens) {
  numero = numero + sens;
  if (numero < 0) numero = slideParis.length - 1;
  if (numero > slideParis.length - 1) numero = 0;
  document.getElementById("slideParis").setAttribute("src", slideParis[numero]);
  document
    .getElementById("slideParis")
    .setAttribute("alt", slideAltParis[numero]);
  document
    .getElementById("linkSliderParis")
    .setAttribute("href", linkHrefParis[numero]);
}

// Pau
var slidePau = new Array(
  "assets/img/lieux/pau-1-boulevard-pyrénées-pau.png",
  "assets/img/lieux/pau-2-casino-valerie-dulac.png",
  "assets/img/lieux/pau-3-chateau-valerie-dulac.png"
);
var slideAltPau = new Array(
  "Pau le Boulevard des Pyrénées, la plus belle vue du monde selon Lamartine",
  "Pau et son casino",
  "Pau le château d'Henry 4"
);
var linkHrefPau = new Array(
  "assets/img/lieux/pau-1-boulevard-pyrénées-pau.png",
  "assets/img/lieux/pau-2-casino-valerie-dulac.png",
  "assets/img/lieux/pau-3-chateau-valerie-dulac.png"
);
var numero = 0;

function ChangeSlidePau(sens) {
  numero = numero + sens;
  if (numero < 0) numero = slidePau.length - 1;
  if (numero > slidePau.length - 1) numero = 0;
  document.getElementById("slidePau").setAttribute("src", slidePau[numero]);
  document.getElementById("slidePau").setAttribute("alt", slideAltPau[numero]);
  document
    .getElementById("linkSliderPau")
    .setAttribute("href", linkHrefPau[numero]);
}
// Page PORTFOLIO - Slider

// Slider Logos
var slideLogo = new Array(
  "assets/img/portfolio/logos-lau-de-la-com.png",
  "assets/img/portfolio/logos-sophrologue.png"
);
var slideAltLogo = new Array(
  "Logo de ma future activité LAU DE LA COM",
  "Logo pour une sophrologue"
);
var linkHrefLogo = new Array(
  "assets/img/portfolio/logos-lau-de-la-com.png",
  "assets/img/portfolio/logos-sophrologue.png"
);
var numero = 0;

function ChangeSlideLogo(sens) {
  numero = numero + sens;
  if (numero < 0) numero = slideLogo.length - 1;
  if (numero > slideLogo.length - 1) numero = 0;
  document.getElementById("slideLogo").setAttribute("src", slideLogo[numero]);
  document
    .getElementById("slideLogo")
    .setAttribute("alt", slideAltLogo[numero]);
  document
    .getElementById("linkSliderLogo")
    .setAttribute("href", linkHrefLogo[numero]);
}
// Slider Charte graphique
var slideCharte = new Array(
  "assets/img/portfolio/charte-graphique-traiteur.jpg",
  "assets/img/portfolio/charte-graphique-sophrologue.png",
  "assets/img/portfolio/charte-graphique-photographe.png"
);
var slideAltCharte = new Array(
  "Charte graphique d'un traiteur",
  "Charte graphique d'une sophrologue",
  "Charte graphique d'une photographe"
);
var linkHrefCharte = new Array(
  "assets/img/portfolio/charte-graphique-traiteur.jpg",
  "assets/img/portfolio/charte-graphique-sophrologue.png",
  "assets/img/portfolio/charte-graphique-photographe.png"
);
var numero = 0;

function ChangeSlideCharte(sens) {
  numero = numero + sens;
  if (numero < 0) numero = slideCharte.length - 1;
  if (numero > slideCharte.length - 1) numero = 0;
  document
    .getElementById("slideCharte")
    .setAttribute("src", slideCharte[numero]);
  document
    .getElementById("slideCharte")
    .setAttribute("alt", slideAltCharte[numero]);
  document
    .getElementById("linkSliderCharte")
    .setAttribute("href", linkHrefCharte[numero]);
}
// Slider Web
var slideWeb = new Array(
  "assets/img/portfolio/miniature-insta-site-photographe.png",
  "assets/img/portfolio/miniature-insta-site-sophrologue.png",
  "assets/img/portfolio/miniature-insta-hackathon-calendrier-avent-la-manu.png",
  "assets/img/portfolio/miniature-insta-site-traiteur-compiegne.png"
);
var slideAltWeb = new Array(
  "Site one page pour un photographe",
  "site vitrine pour une sophrologue",
  "site calendrier de l'avent pour la manu école supérieure du numérique à Noyon",
  "site marchand pour le traiteur et salon de thé à Longueil annel proche de compiègne"
);
var linkHrefWeb = new Array(
  "https://youtu.be/sw3cCt4YLZk",
  "https://youtu.be/AAcHTbj2Pqo",
  "https://youtu.be/G_U1oG0LIcQ",
  "https://youtu.be/57fcq5qTLe8"
);
var numero = 0;

function ChangeSlideWeb(sens) {
  numero = numero + sens;
  if (numero < 0) numero = slideWeb.length - 1;
  if (numero > slideWeb.length - 1) numero = 0;
  document.getElementById("slideWeb").setAttribute("src", slideWeb[numero]);
  document.getElementById("slideWeb").setAttribute("alt", slideAltWeb[numero]);
  document
    .getElementById("linkSliderWeb")
    .setAttribute("href", linkHrefWeb[numero]);
}
// Slider SocialMedia
var slideSocialMedia = new Array(
  "assets/img/portfolio/le-cluster-instagram.png",
  "assets/img/portfolio/facebook-media-management.png",
  "assets/img/portfolio/linkedin-cabinet-rh.png",
  "assets/img/portfolio/instagram-ascenseur-301.png",
  "assets/img/portfolio/facebook newsletter.png"
);
var slideAltSocialMedia = new Array(
  "Post sur Instagram Le Cluster été portes ouvertes",
  "Post sur Facebook media-management accueil d'une alternante",
  "Marronnier RH offert par le cabinet RH sur Linkedin",
  "Post sur Instagram pour les portes ouvertes de l'ascenseur 301 école du numérique",
  "Newsletter sur Facebook concernant l'ESC Compiègne"
);
var linkHrefSocialMedia = new Array(
  "https://www.instagram.com/p/CC8z9RlHdlm/?utm_source=ig_web_copy_link",
  "https://www.facebook.com/watch/?v=641824863134850&ref=sharing",
  "https://www.linkedin.com/posts/media-management-cabinet-rh_planifiez-vos-events-rh-formation-pour-activity-6758064888905510912-gE9o",
  "https://www.instagram.com/p/CC3e3qBIvL9/?utm_source=ig_web_copy_link",
  "https://www.facebook.com/ESCCompiegne/photos/a.281267335231167/2390512644306615/"
);
var numero = 0;

function ChangeSlideSocialMedia(sens) {
  numero = numero + sens;
  if (numero < 0) numero = slideSocialMedia.length - 1;
  if (numero > slideSocialMedia.length - 1) numero = 0;
  document
    .getElementById("slideSocialMedia")
    .setAttribute("src", slideSocialMedia[numero]);
  document
    .getElementById("slideSocialMedia")
    .setAttribute("alt", slideAltSocialMedia[numero]);
  document
    .getElementById("linkSliderSocialMedia")
    .setAttribute("href", linkHrefSocialMedia[numero]);
}
// Slider Print
var slidePrint = new Array(
  "assets/img/portfolio/exemple-dossier-de-presse.png",
  "assets/img/portfolio/CV-Manon-Senilhe-instagram.png"
);
var slideAltPrint = new Array(
  "Exemple dossier de presse de l'école du numérique",
  "création de CV pour des jeunes"
);
var linkHrefPrint = new Array(
  "assets/img/portfolio/Ascenseur 301 dossier de presse.pdf",
  "assets/img/portfolio/CV-Manon-Senilhe-instagram.png"
);
var numero = 0;

function ChangeSlidePrint(sens) {
  numero = numero + sens;
  if (numero < 0) numero = slidePrint.length - 1;
  if (numero > slidePrint.length - 1) numero = 0;
  document.getElementById("slidePrint").setAttribute("src", slidePrint[numero]);
  document
    .getElementById("slidePrint")
    .setAttribute("alt", slideAltPrint[numero]);
  document
    .getElementById("linkSliderPrint")
    .setAttribute("href", linkHrefPrint[numero]);
}

// Slider Vidéo
var slideVideo = new Array(
  "assets/img/portfolio/video-formation-communication.png",
  "assets/img/portfolio/visite-virtuelle-le-cluster-compiegne.png",
  "assets/img/portfolio/video-alternance-esc-compiegne.png"
);
var slideAltVideo = new Array(
  "Vidéo concepteur de projet de communication à l'Ascenseur 301 école digital de compiègne",
  "Vidéo de présentation du Cluster à Compiègne",
  "Vidéo de l'ESC Compiègne sur l'alternance"
);
var linkHrefVideo = new Array(
  "https://youtu.be/1zgewidlLko",
  "https://youtu.be/6icZcL3N15k",
  "https://youtu.be/1N82ecgUfvk"
);

var numero = 0;

function ChangeSlideVideo(sens) {
  numero = numero + sens;
  if (numero < 0) numero = slideVideo.length - 1;
  if (numero > slideVideo.length - 1) numero = 0;
  document.getElementById("slideVideo").setAttribute("src", slideVideo[numero]);
  document
    .getElementById("slideVideo")
    .setAttribute("alt", slideAltVideo[numero]);
  document
    .getElementById("linkSliderVideo")
    .setAttribute("href", linkHrefVideo[numero]);
}

/* effet sur la modale CONTACT = ouverture au clic */
const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");
//pour chaque trigger - déclencheur- j'ajoute évènement toggle qui crée une classe
modalTriggers.forEach((triggers) =>
  triggers.addEventListener("click", toggleModal)
);
function toggleModal() {
  modalContainer.classList.toggle("active");
}

// MODAL COPYRIGHT
// Get the modal
var modalC = document.getElementById("myModalC");

// Get the button that opens the modal
var btnC = document.getElementById("myBtnC");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeC")[0];

// When the user clicks the button, open the modal
btnC.onclick = function () {
  modalC.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modalC.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalC) {
    modalC.style.display = "none";
  }
};