

function openPopup() {
    document.getElementById("popup").style.display = "block";
    document.body.style.overflow = "hidden"; // 🔒 stop background scroll
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.body.style.overflow = "auto"; // 🔓 restore scroll
}



$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        variableWidth: true

    });

});
const slides = document.querySelector(".slides");
const slide1 = document.querySelectorAll(".slide1");
const dotsContainer = document.querySelector(".dots");

let index = 0;


slide1.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => {
        index = i;
        updateSlider();
    });
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dots span");


function updateSlider1() {
    slides.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

/* Buttons */
document.querySelector(".next").onclick = () => {
    index = (index + 1) % slide1.length;
    updateSlider1();
};

document.querySelector(".prev").onclick = () => {
    index = (index - 1 + slide1.length) % slide1.length;
    updateSlider1();
};



/* Init */
updateSlider1();
// const track = document.querySelector(".slider-track");
// const cards = document.querySelectorAll(".card");
// const nextBtn = document.querySelector(".next");
// const prevBtn = document.querySelector(".prev");

// // Clone first & last
// const firstClone = cards[0].cloneNode(true);
// const lastClone = cards[cards.length - 1].cloneNode(true);

// track.appendChild(firstClone);
// track.insertBefore(lastClone, track.firstChild);

// // Select ALL cards again (after cloning)
// const allCards = document.querySelectorAll(".card");

// let index = 1;

// // Get gap dynamically
// const trackStyle = window.getComputedStyle(track);
// const gap = parseInt(trackStyle.gap) || 0;

// function updateSlider(animate = true) {
//     const cardWidth = allCards[0].offsetWidth + gap;

//     track.style.transition = animate ? "0.4s ease" : "none";
//     track.style.transform = `translateX(-${index * cardWidth}px)`;
// }


// nextBtn.onclick = () => {
//     index++;
//     updateSlider();
// };

// prevBtn.onclick = () => {
//     index--;
//     updateSlider();
// };

// track.addEventListener("transitionend", () => {
//     const total = allCards.length;

//     if (index === total - 1) {
//         index = 1;
//         updateSlider(false);
//     }

//     if (index === 0) {
//         index = total - 1;
//         updateSlider(false);
//     }

// });

// updateSlider(false);




// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');

// const track = document.querySelector(".slider-track");
// const cards = document.querySelectorAll(".card");

// let index = 0;

// function updateSlider() {
//     const cardWidth = cards[0].offsetWidth + 100;
//     track.style.transform = `translateX(-${index * cardWidth}px)`;
// }
// document.querySelector(".next").onclick = () => {
//     index++;
//     if (index >= cards.length) {
//         index = 0;
//     }
//     updateSlider();
// };

// document.querySelector(".prev").onclick = () => {
//     index--;
//     if (index < 0) {
//         index = cards.length - 1;
//     }
//     updateSlider();
// };
const video = document.getElementById("hoverVideo");
const box = document.querySelector(".box");

function playVideo() {
    box.classList.add("show-video");
    video.currentTime = 0;
    video.play();
}

function pauseVideo() {
    box.classList.remove("show-video");
    video.pause();
}





