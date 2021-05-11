// (function() {

//   const container = document.querySelector('#carousel');
//   const slides = container.querySelectorAll('.slide');
//   const indicatorsContainer = container.querySelector('#indicators-container');
//   const indicators = indicatorsContainer.querySelectorAll('.indicator');
//   const pauseBtn = container.querySelector('#pause');
//   const prevBtn = container.querySelector('#prev');
//   const nextBtn = container.querySelector('#next');
  
//   const CODE_SPACE = "Space";
//   const CODE_ARROW_LEFT = "ArrowLeft";
//   const CODE_ARROW_RIGHT = "ArrowRight";
  
  
//   let slidesCount = slides.length;
//   let currentSlide = 0;
//   let timerID = null;
//   let isPlaying = true;
//   let swipeStartX = null;
//   let swipeEndX = null;
  
//   function gotoSlide(n) {
//     slides[currentSlide].classList.toggle('active');
//     indicators[currentSlide].classList.toggle('active');
//     currentSlide = (n + slidesCount) % slidesCount;
//     indicators[currentSlide].classList.toggle('active');
//     slides[currentSlide].classList.toggle('active');
//   }
  
//   const prevSlide = () => gotoSlide(currentSlide - 1);
  
//   const nextSlide = () => gotoSlide(currentSlide + 1);
  
//   function prev() {
//     pause();
//     prevSlide();
//   }
  
//   function next() {
//     pause();
//     nextSlide();
//   }
  
//   function pause() {
//     if (isPlaying) {
//       pauseBtn.innerHTML = 'Play';
//       isPlaying = false;
//       clearInterval(timerID);
//     }
//   }
  
//   function play() {
//     pauseBtn.innerHTML = 'Pause';
//     isPlaying = true;
//     timerID = setInterval(nextSlide, 1000);
//   }
  
//   const pausePlay = () => isPlaying ? pause() : play();
  
//   function indicate(e) {
//     const target = e.target;
  
//     if (target && target.classList.contains('indicator')) {
//       pause();
//       // console.log(+target.getAttribute('data-slide-to'));
//       gotoSlide(+target.dataset.slideTo);
//     }
//   }
  
//   function pressKey(e) {
//     console.log(e);
//     if (e.code === CODE_ARROW_LEFT) prev();
//     if (e.code === CODE_ARROW_RIGHT) next();
//     if (e.code === CODE_SPACE) pausePlay();
//   }
  
//   const swipeStart = (e) => swipeStartX = e.changedTouches[0].clientX;
  
  
//   function swipeEnd(e) {
//     swipeEndX = e.changedTouches[0].clientX;
//     swipeStartX - swipeEndX > 100 && next();
//     swipeStartX - swipeEndX < -100 && prev();
//   }
  
//   function initListeners() {
//     pauseBtn.addEventListener('click', pausePlay);
//     prevBtn.addEventListener('click', prev);
//     nextBtn.addEventListener('click', next);
//     indicatorsContainer.addEventListener('click', indicate);
//     document.addEventListener('keydown', pressKey);
//     container.addEventListener('touchstart', swipeStart);
//     container.addEventListener('touchend', swipeEnd);
//   }
  
//   function init () {
//     initListeners();
//     timerID = setInterval(nextSlide, 2000);
//   }
  
//   init ();
// }());


const carousel = new SwipeCarousel( params: {
  containerID: '.slider',
  slideID: '.item',
  interval: 1000,
  isPlaying: false
});

carousel.init();

//планы на эту работу
//1 добавить клавиатурную обработку+
//2 добавить поддержку свайпов для мобильных устройств+
//3 использовать паттерн модуль, чтобы недопустить дублирования переменных+
//4 переписать на прототипы
//5 использоваить наследование для создания pro версии слайдеров
//6 динамическое создание индикаторов
//7 динамическое создание контролсов
//8 базовое конфигурирование объекта
//9 переписать на продвинутые синтаксис - классы
//10 наследование классов
//11 продвинутая конфигурация класса




var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
    goToSlide(currentSlide+1);
}

function previousSlide() {
    goToSlide(currentSlide-1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide active';
}

var playing = true;
var pauseButton = document.querySelector('#pause');

function pauseSlideShow() {
    pauseButton.innerHTML = 'Play';
    playing = false;
    clearInterval(slideInterval);
}

function playSlideShow() {
    pauseButton.innerHTML = 'Pause';
    playing = true;
    slideInterval = setInterval(nextSlide, 2000);
}

pauseButton.onclick = function() {
    if (playing) {
  	    pauseSlideShow();
    } else {
  	    playSlideShow();
	  }
};

var next = document.querySelector('#next');
var previous = document.querySelector('#previous');

next.onclick = function() {
    pauseSlideShow();
    nextSlide();
};

previous.onclick = function() {
    pauseSlideShow();
    previousSlide();
};

var controls = document.querySelectorAll('.controls');

for (var i = 0; i < controls.length; i++){
    controls[i].style.display = 'inline-block';
}

