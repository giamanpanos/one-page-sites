/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup(".game__container", {
  selectors: {
    target: ".game__card",
  },
  animation: {
    duration: 300,
  },
});

/*===== Link Active Game =====*/
const linkGame = document.querySelectorAll(".game__item");

function activeGame() {
  linkGame.forEach((l) => l.classList.remove("active-game"));
  this.classList.add("active-game");
}

linkGame.forEach((l) => l.addEventListener("click", activeGame));

/*===== Game Popup =====*/
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("game__button")) {
    togglePortfolioPopUp();
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopUp() {
  document.querySelector(".portfolio__popup").classList.toggle("open");
}

document
  .querySelector(".portfolio__popup-close")
  .addEventListener("click", togglePortfolioPopUp);

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp__thumbnail img").src =
    portfolioItem.querySelector(".game__img").src;
  document.querySelector(".portfolio__popup-subtitle span").innerHTML =
    portfolioItem.querySelector(".game__title").innerHTML;
  document.querySelector(".portfolio__popup-body").innerHTML =
    portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}
