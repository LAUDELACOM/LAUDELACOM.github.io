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

// page jardin secret passage au clic du like insta en rose

document
  .getElementById("likeInstaColorJ1")
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
  .getElementById("likeInstaColorJ2")
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
  .getElementById("likeInstaColorJ3")
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
  .getElementById("likeInstaColorJ4")
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
