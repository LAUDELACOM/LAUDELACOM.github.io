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

document.getElementById("effect1").addEventListener("click", function () {
 if (this.getAttribute("src") == "assets/img/logos/votre-logo-ici-contact.png") {
    this.src = "assets/img/logos/votre-logo-ici.png";
  } else {
    this.src = "assets/img/logos/votre-logo-ici-contact.png";
  }
});

/* effet sur l'image bientôt freelance */

document.getElementById("effect3").addEventListener("click", function () {
 if (this.getAttribute("src") == "assets/img/logos/logo laudelacom.png") {
    this.src = "assets/img/logos/services-laudelacom.png";
  } else {
    this.src = "assets/img/logos/logo laudelacom.png";
  }
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

// /* page FORMATION effet sur le like des publis passage de gris à rose

document
  .getElementById("likeInstaColorF1")
  .addEventListener("click", function () {
    if (
      this.getAttribute("src") ==
      "assets/img/icones/icones insta/like-instagram.png"
    ) {
      this.src = "assets/img/outils/heart-pink.png";
    } else {
      this.src = "assets/img/icones/icones insta/like-instagram.png";
    }
  });

document
  .getElementById("likeInstaColorF2")
  .addEventListener("click", function () {
    if (
      this.getAttribute("src") ==
      "assets/img/icones/icones insta/like-instagram.png"
    ) {
      this.src = "assets/img/outils/heart-pink.png";
    } else {
      this.src = "assets/img/icones/icones insta/like-instagram.png";
    }
  });

document
  .getElementById("likeInstaColorF3")
  .addEventListener("click", function () {
    if (
      this.getAttribute("src") ==
      "assets/img/icones/icones insta/like-instagram.png"
    ) {
      this.src = "assets/img/outils/heart-pink.png";
    } else {
      this.src = "assets/img/icones/icones insta/like-instagram.png";
    }
  });

document
  .getElementById("likeInstaColorF4")
  .addEventListener("click", function () {
    if (
      this.getAttribute("src") ==
      "assets/img/icones/icones insta/like-instagram.png"
    ) {
      this.src = "assets/img/outils/heart-pink.png";
    } else {
      this.src = "assets/img/icones/icones insta/like-instagram.png";
    }
  });

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
