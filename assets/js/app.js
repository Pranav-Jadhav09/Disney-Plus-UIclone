"use strict";

/////////////////
// Current Year
const currentDate = new Date();

let yearEl = document.getElementById("year");
yearEl.innerText = currentDate.getFullYear();

/////////////////
// Carousel
const carousel = document.querySelector(".carousel");
let sliders = [];

let sliderIndex = 0;

const createSlide = () => {
  if (sliderIndex >= movies.length) {
    sliderIndex = 0;
  }

  // Create DOM El
  let slide = document.createElement("div");
  let imgEl = document.createElement("img");
  let slideContent = document.createElement("div");
  let title = document.createElement("h1");
  let description = document.createElement("p");

  // Attach All El
  imgEl.appendChild(document.createTextNode(""));
  title.appendChild(document.createTextNode(movies[sliderIndex].name));
  description.appendChild(document.createTextNode(movies[sliderIndex].desc));
  slideContent.appendChild(title);
  slideContent.appendChild(description);
  slide.appendChild(slideContent);
  slide.appendChild(imgEl);
  carousel.appendChild(slide);

  // Setting up images
  imgEl.src = movies[sliderIndex].image;
  sliderIndex++;

  // Setting El className
  slide.className = "slider";
  slideContent.className = "slide-content";
  title.className = "movie-title";
  description.className = "movie-desc";

  // Push in The Sliders Array
  sliders.push(slide);

  // Carousel Moving Logic
  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

setInterval(() => {
  createSlide();
}, 3000);

/////////////////
// Video
const videoCards = document.querySelectorAll(".video-card");

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

/////////////////
// Poster Card
let cardContainers = document.querySelectorAll(".card-container");
let preBtns = document.querySelectorAll(".pre-btn");
let nxtBtns = document.querySelectorAll(".nxt-btn");

// Function to scroll the card container to the left
function scrollLeft(container) {
  container.scrollLeft -= container.clientWidth;
}

// Function to scroll the card container to the right
function scrollRight(container) {
  container.scrollLeft += container.clientWidth;
}

// Attach click event listeners to previous and next btns
preBtns.forEach((preBtn, index) => {
  preBtn.addEventListener("click", () => {
    scrollLeft(cardContainers[index]);
  });
});
nxtBtns.forEach((nxtBtn, index) => {
  nxtBtn.addEventListener("click", () => {
    scrollRight(cardContainers[index]);
  });
});
