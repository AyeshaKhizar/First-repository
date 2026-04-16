

function openPopup() {
    document.getElementById("popup").style.display = "block";
    document.body.style.overflow = "hidden";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.body.style.overflow = "auto";
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


document.querySelector(".next").onclick = () => {
    index = (index + 1) % slide1.length;
    updateSlider1();
};

document.querySelector(".prev").onclick = () => {
    index = (index - 1 + slide1.length) % slide1.length;
    updateSlider1();
};




updateSlider1();

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





