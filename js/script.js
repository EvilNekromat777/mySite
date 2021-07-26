
// ====================== Поэкранная прокрутка =================================
let wrapper = document.querySelector('.wrapper');

let pageSlider = new Swiper(".page", {
    // свои классы
    wrapperClass: "page__wrapper",
    slideClass: "page__screen",

    // Вертикальный слайдер
	direction: 'vertical',

	// Количество слайдов для показа
	slidesPerView: 'auto',

	// Включаем параллакс
	parallax: true,


    	// Управление клавиатурой
	keyboard: {
		// Включить\выключить
		enabled: true,
		// Включить\выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить\выключить
		// управление клавишами
		// pageUp, pageDown
		pageUpDown: true,
	},


    // Управление колесом мыши
	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 1,
		// Класс объекта на котором
		// будет срабатывать прокрутка мышью.
		//eventsTarget: ".image-slider"
	},


    // Отключение функционала
	// если слайдов меньше чем нужно
	watchOverflow: true,

	// Скорость
	speed: 800,

	// Обновить свайпер
	// при изменении элементов слайдера
	observer: true,

    // Обновить свайпер
	// при изменении родительских
	// элементов слайдера
	observeParents: true,

	// Обновить свайпер
	// при изменении дочерних
	// элементов слайда
	observeSlideChildren: true,


    // Навигация 
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.page__pagination',
		type: 'bullets',
		clickable: true,
		bulletClass: "page__bullet",
		bulletActiveClass: "page__bullet_active",
	},
	// Скролл
	scrollbar: {
		el: '.page__scroll',
		dragClass: "page__drag-scroll",
		// Возможность перетаскивать скролл
		draggable: true
	},


    // Отключаем автоинициализацию
	init: false,

   	// События
	on: {
		// Событие инициализации
		init: function () {
			menuSlider();
			setScrollType();
			wrapper.classList.add('_loaded');
		},
		// Событие смены слайда
		slideChange: function () {
			menuSliderRemove();
			menuLinks[pageSlider.realIndex].classList.add('_active');
		},
		resize: function () {
			setScrollType();
		}
	},
});



// ==========================  Кнопки меню  ======================
let menuLinks = document.querySelectorAll('.menu__link');


function menuSlider() {
	if (menuLinks.length > 0) {
		menuLinks[pageSlider.realIndex].classList.add('_active');
		for (let index = 0; index < menuLinks.length; index++) {
			const menuLink = menuLinks[index];
			menuLink.addEventListener("click", function (e) {
				menuSliderRemove();
				pageSlider.slideTo(index, 800);
				menuLink.classList.add('_active');
				e.preventDefault();
			});
		}
	}
}

function menuSliderRemove() {
	let menuLinkActive = document.querySelector('.menu__link._active');
	if (menuLinkActive) {
		menuLinkActive.classList.remove('_active');
	}
}

function setScrollType() {
	if (wrapper.classList.contains('_free')) {
		wrapper.classList.remove('_free');
		pageSlider.params.freeMode = false;
	}
	for (let index = 0; index < pageSlider.slides.length; index++) {
		const pageSlide = pageSlider.slides[index];
		const pageSlideContent = pageSlide.querySelector('.screen__content');
		if (pageSlideContent) {
			const pageSlideContentHeight = pageSlideContent.offsetHeight;
			if (pageSlideContentHeight > window.innerHeight) {
				wrapper.classList.add('_free');
				pageSlider.params.freeMode = true;
				break;
			}
		}
	}
}
pageSlider.init();




// ======================  Паутинка  ========================
particlesJS("particles-js", {
	"particles": {
	  "number": {
		"value": 380,
		"density": {
		  "enable": true,
		  "value_area": 2000
		}
	  },
	  "color": {
		// "value": "#ffffff"
		"value": "#4DBBC5"
	  },
	  "shape": {
		"type": "circle",
		"stroke": {
		  "width": 0,
		  "color": "#000000"
		},
		"polygon": {
		  "nb_sides": 5
		},
		"image": {
		  "src": "img/github.svg",
		  "width": 100,
		  "height": 100
		}
	  },
	  "opacity": {
		"value": 0.6,
		"random": false,
		"anim": {
		  "enable": false,
		  "speed": 1,
		  "opacity_min": 0.1,
		  "sync": false
		}
	  },
	  "size": {
		"value": 4,
		"random": true,
		"anim": {
		  "enable": false,
		  "speed": 40,
		  "size_min": 0.1,
		  "sync": false
		}
	  },
	  "line_linked": {
		"enable": true,
		"distance": 150,
		"color": "#ffffff",
		"opacity": 0.4,
		"width": 1
	  },
	  "move": {
		"enable": true,
		"speed": 5,
		"direction": "none",
		"random": false,
		"straight": false,
		"out_mode": "out",
		"bounce": false,
		"attract": {
		  "enable": false,
		  "rotateX": 600,
		  "rotateY": 1200
		}
	  }
	},
	"interactivity": {
	  "detect_on": "canvas",
	  "events": {
		"onhover": {
		  "enable": true,
		  "mode": "grab"
		},
		"onclick": {
		  "enable": true,
		  "mode": "push"
		},
		"resize": true
	  },
	  "modes": {
		"grab": {
		  "distance": 200,
		  "line_linked": {
			"opacity": 1
		  }
		},
		"bubble": {
		  "distance": 400,
		  "size": 40,
		  "duration": 2,
		  "opacity": 8,
		  "speed": 3
		},
		"repulse": {
		  "distance": 200,
		  "duration": 0.4
		},
		"push": {
		  "particles_nb": 4
		},
		"remove": {
		  "particles_nb": 2
		}
	  }
	},
	"retina_detect": true
  });
  
  

// ======================  Ховер на карточку посередине, 1 слайд  ======================
$(".hover").mouseleave(
	function() {
	  $(this).removeClass("hover");
	}
  );



  // =======================  3D - slider на втором экране  ================================================>
	
function lerp({ x, y }, { x: targetX, y: targetY }) {
	const fraction = 0.1;
  
	x += (targetX - x) * fraction;
	y += (targetY - y) * fraction;
  
	return { x, y };
  }
  
  class Slider {
	constructor(el) {
	  const imgClass = (this.IMG_CLASS = "slider__images-item");
	  const textClass = (this.TEXT_CLASS = "slider__text-item");
	  const activeImgClass = (this.ACTIVE_IMG_CLASS = `${imgClass}--active`);
	  const activeTextClass = (this.ACTIVE_TEXT_CLASS = `${textClass}--active`);
  
	  this.el = el;
	  this.contentEl = document.getElementById("slider-content");
	  this.onMouseMove = this.onMouseMove.bind(this);
  
	  // taking advantage of the live nature of 'getElement...' methods
	  this.activeImg = el.getElementsByClassName(activeImgClass);
	  this.activeText = el.getElementsByClassName(activeTextClass);
	  this.images = el.getElementsByTagName("img");
  
	  document
		.getElementById("slider-dots")
		.addEventListener("click", this.onDotClick.bind(this));
  
	  document
		.getElementById("left")
		.addEventListener("click", this.prev.bind(this));
  
	  document
		.getElementById("right")
		.addEventListener("click", this.next.bind(this));
  
	  window.addEventListener("resize", this.onResize.bind(this));
  
	  this.onResize();
  
	  this.length = this.images.length;
	  this.lastX = this.lastY = this.targetX = this.targetY = 0;
	}
	onResize() {
	  const htmlStyles = getComputedStyle(document.documentElement);
	  const mobileBreakpoint = htmlStyles.getPropertyValue("--mobile-bkp");
  
	  const isMobile = (this.isMobile = matchMedia(
		`only screen and (max-width: ${mobileBreakpoint})`
	  ).matches);
  
	  this.halfWidth = innerWidth / 2;
	  this.halfHeight = innerHeight / 2;
	  this.zDistance = htmlStyles.getPropertyValue("--z-distance");
  
	  if (!isMobile && !this.mouseWatched) {
		this.mouseWatched = true;
		this.el.addEventListener("mousemove", this.onMouseMove);
		this.el.style.setProperty(
		  "--img-prev",
		  `url(${this.images[+this.activeImg[0].dataset.id - 1].src})`
		);
		this.contentEl.style.setProperty(
		  "transform",
		  `translateZ(${this.zDistance})`
		);
	  } else if (isMobile && this.mouseWatched) {
		this.mouseWatched = false;
		this.el.removeEventListener("mousemove", this.onMouseMove);
		this.contentEl.style.setProperty("transform", "none");
	  }
	}
	getMouseCoefficients({ pageX, pageY } = {}) {
	  const halfWidth = this.halfWidth;
	  const halfHeight = this.halfHeight;
	  const xCoeff = ((pageX || this.targetX) - halfWidth) / halfWidth;
	  const yCoeff = (halfHeight - (pageY || this.targetY)) / halfHeight;
  
	  return { xCoeff, yCoeff };
	}
	onMouseMove({ pageX, pageY }) {
	  this.targetX = pageX;
	  this.targetY = pageY;
  
	  if (!this.animationRunning) {
		this.animationRunning = true;
		this.runAnimation();
	  }
	}
	runAnimation() {
	  if (this.animationStopped) {
		this.animationRunning = false;
		return;
	  }
  
	  const maxX = 10;
	  const maxY = 10;
  
	  const newPos = lerp(
		{
		  x: this.lastX,
		  y: this.lastY
		},
		{
		  x: this.targetX,
		  y: this.targetY
		}
	  );
  
	  const { xCoeff, yCoeff } = this.getMouseCoefficients({
		pageX: newPos.x,
		pageY: newPos.y
	  });
  
	  this.lastX = newPos.x;
	  this.lastY = newPos.y;
  
	  this.positionImage({ xCoeff, yCoeff });
  
	  this.contentEl.style.setProperty(
		"transform",
		`
		translateZ(${this.zDistance})
		rotateX(${maxY * yCoeff}deg)
		rotateY(${maxX * xCoeff}deg)
	  `
	  );
  
	  if (this.reachedFinalPoint) {
		this.animationRunning = false;
	  } else {
		requestAnimationFrame(this.runAnimation.bind(this));
	  }
	}
	get reachedFinalPoint() {
	  const lastX = ~~this.lastX;
	  const lastY = ~~this.lastY;
	  const targetX = this.targetX;
	  const targetY = this.targetY;
  
	  return (
		(lastX == targetX || lastX - 1 == targetX || lastX + 1 == targetX) &&
		(lastY == targetY || lastY - 1 == targetY || lastY + 1 == targetY)
	  );
	}
	positionImage({ xCoeff, yCoeff }) {
	  const maxImgOffset = 1;
	  const currentImage = this.activeImg[0].children[0];
  
	  currentImage.style.setProperty(
		"transform",
		`
		translateX(${maxImgOffset * -xCoeff}em)
		translateY(${maxImgOffset * yCoeff}em)
	  `
	  );
	}
	onDotClick({ target }) {
	  if (this.inTransit) return;
  
	  const dot = target.closest(".slider__nav-dot");
  
	  if (!dot) return;
  
	  const nextId = dot.dataset.id;
	  const currentId = this.activeImg[0].dataset.id;
  
	  if (currentId == nextId) return;
  
	  this.startTransition(nextId);
	}
	transitionItem(nextId) {
	  function onImageTransitionEnd(e) {
		e.stopPropagation();
  
		nextImg.classList.remove(transitClass);
  
		self.inTransit = false;
  
		this.className = imgClass;
		this.removeEventListener("transitionend", onImageTransitionEnd);
	  }
  
	  const self = this;
	  const el = this.el;
	  const currentImg = this.activeImg[0];
	  const currentId = currentImg.dataset.id;
	  const imgClass = this.IMG_CLASS;
	  const textClass = this.TEXT_CLASS;
	  const activeImgClass = this.ACTIVE_IMG_CLASS;
	  const activeTextClass = this.ACTIVE_TEXT_CLASS;
	  const subActiveClass = `${imgClass}--subactive`;
	  const transitClass = `${imgClass}--transit`;
	  const nextImg = el.querySelector(`.${imgClass}[data-id='${nextId}']`);
	  const nextText = el.querySelector(`.${textClass}[data-id='${nextId}']`);
  
	  let outClass = "";
	  let inClass = "";
  
	  this.animationStopped = true;
  
	  nextText.classList.add(activeTextClass);
  
	  el.style.setProperty("--from-left", nextId);
  
	  currentImg.classList.remove(activeImgClass);
	  currentImg.classList.add(subActiveClass);
  
	  if (currentId < nextId) {
		outClass = `${imgClass}--next`;
		inClass = `${imgClass}--prev`;
	  } else {
		outClass = `${imgClass}--prev`;
		inClass = `${imgClass}--next`;
	  }
  
	  nextImg.classList.add(outClass);
  
	  requestAnimationFrame(() => {
		nextImg.classList.add(transitClass, activeImgClass);
		nextImg.classList.remove(outClass);
  
		this.animationStopped = false;
		this.positionImage(this.getMouseCoefficients());
  
		currentImg.classList.add(transitClass, inClass);
		currentImg.addEventListener("transitionend", onImageTransitionEnd);
	  });
  
	  if (!this.isMobile) this.switchBackgroundImage(nextId);
	}
	startTransition(nextId) {
	  function onTextTransitionEnd(e) {
		if (!e.pseudoElement) {
		  e.stopPropagation();
  
		  requestAnimationFrame(() => {
			self.transitionItem(nextId);
		  });
  
		  this.removeEventListener("transitionend", onTextTransitionEnd);
		}
	  }
  
	  if (this.inTransit) return;
  
	  const activeText = this.activeText[0];
	  const backwardsClass = `${this.TEXT_CLASS}--backwards`;
	  const self = this;
  
	  this.inTransit = true;
  
	  activeText.classList.add(backwardsClass);
	  activeText.classList.remove(this.ACTIVE_TEXT_CLASS);
	  activeText.addEventListener("transitionend", onTextTransitionEnd);
  
	  requestAnimationFrame(() => {
		activeText.classList.remove(backwardsClass);
	  });
	}
	next() {
	  if (this.inTransit) return;
  
	  let nextId = +this.activeImg[0].dataset.id + 1;
  
	  if (nextId > this.length) nextId = 1;
  
	  this.startTransition(nextId);
	}
	prev() {
	  if (this.inTransit) return;
  
	  let nextId = +this.activeImg[0].dataset.id - 1;
  
	  if (nextId < 1) nextId = this.length;
  
	  this.startTransition(nextId);
	}
	switchBackgroundImage(nextId) {
	  function onBackgroundTransitionEnd(e) {
		if (e.target === this) {
		  this.style.setProperty("--img-prev", imageUrl);
		  this.classList.remove(bgClass);
		  this.removeEventListener("transitionend", onBackgroundTransitionEnd);
		}
	  }
  
	  const bgClass = "slider--bg-next";
	  const el = this.el;
	  const imageUrl = `url(${this.images[+nextId - 1].src})`;
  
	  el.style.setProperty("--img-next", imageUrl);
	  el.addEventListener("transitionend", onBackgroundTransitionEnd);
	  el.classList.add(bgClass);
	}
  }
  
  const sliderEl = document.getElementById("slider");
  const slider = new Slider(sliderEl);
  
  // ---------- Demo stuff ------- //
  
  let timer = 0;
  
  function autoSlide() {
	requestAnimationFrame(() => {
	  slider.next();
	});
  
	timer = setTimeout(autoSlide, 5000);
  }
  
  function stopAutoSlide() {
	clearTimeout(timer);
  
	this.removeEventListener("touchstart", stopAutoSlide);
	this.removeEventListener("mousemove", stopAutoSlide);
  }
  
  sliderEl.addEventListener("mousemove", stopAutoSlide);
  sliderEl.addEventListener("touchstart", stopAutoSlide);
  
  timer = setTimeout(autoSlide, 2000);
  



  //   ======================  Modal Window    =============================
(() => {
	const modalBtns = Array.from(document.querySelectorAll(".otherPages"));
	modalBtns.forEach(btn => {
	  btn.onclick = function() {
		const modal = btn.getAttribute('data-modal');
		document.getElementById(modal).style.display = "block";
		document.querySelector("body").style.overflow = 'hidden';
	  }
	});
	
	const closeBtns = Array.from(document.querySelectorAll(".close-button"));
	closeBtns.forEach(btn => {
	  btn.onclick = function() {
		let modal = btn.closest('.modal');
		modal.style.display = "none";
		document.querySelector("body").style.overflow = 'visible';
	  }
	});
	
	window.onclick = function(event) {
	  if (event.target.className === "modal") {
		event.target.style.display = "none";
	  }
	}
	})();
