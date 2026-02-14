const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-track img");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dots = document.querySelectorAll(".dot");
const carousel = document.querySelector(".carousel");

let index = 0; //номер текущего слайда
let intervalId; //id прокрутки

function updateCarousel() {
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}//обновление положения слайдов

function nextSlide() {
    index = (index + 1) % slides.length;
    updateCarousel();
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        index = i;
        updateCarousel();
    });
});

function startAutoSlide() {
    intervalId = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
    clearInterval(intervalId);
}

carousel.addEventListener("mouseenter", stopAutoSlide);
carousel.addEventListener("mouseleave", startAutoSlide);


window.addEventListener("load", () => {
    startAutoSlide(); //запуск при загрузке страницы
});


document.querySelectorAll(".open-page").forEach(link => {
    //находим все элементы с классом open page
    link.addEventListener("click", function (event) {
        //если кликнули по ссылке то
        event.preventDefault(); // отменяем обычный переход
        window.open(this.href, "_blank"); // открываем в новой вкладке
    });
});
