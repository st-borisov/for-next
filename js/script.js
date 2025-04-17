/*  */
if (window.innerWidth < 992) {
	var element = document.querySelector('.navbar');
	window.addEventListener('scroll', function () {
		if (window.scrollY > 0) {
			element.classList.add("scroll");
		} else {
			element.classList.remove("scroll");
		}
	});
}

/*  */
document.addEventListener('DOMContentLoaded', function () {
	const offcanvasElement = document.getElementById('offcanvasNavbar');

	// Функция для закрытия offcanvas
	function closeOffcanvas() {
		const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
		if (offcanvas) {
			offcanvas.hide();
		}
	}

	const navLinks = document.querySelectorAll('.nav-link');
	const offcanvasPhone = document.querySelector('.offcanvas-phone');
	const offcanvasCall = document.querySelector('.offcanvas-call');
	const mainScreenApart = document.querySelector('.main-screen__apart_mob');

	navLinks.forEach(link => {
		link.addEventListener('click', closeOffcanvas);
	});

	if (offcanvasPhone) {
		offcanvasPhone.addEventListener('click', closeOffcanvas);
	}

	if (offcanvasCall) {
		offcanvasCall.addEventListener('click', closeOffcanvas);
	}

	if (mainScreenApart) {
		mainScreenApart.addEventListener('click', closeOffcanvas);
	}
});


/*  */
gsap.registerPlugin(ScrollTrigger);

function initAnimation() {

	function isMobile() {
		return window.innerWidth <= 992;
	}

	if (!isMobile()) {

		const locoScroll = new LocomotiveScroll({
			el: document.querySelector("[data-scroll-container]"),
			smooth: true,
			multiplier: 0.5,
		});

		locoScroll.on("scroll", ScrollTrigger.update);

		ScrollTrigger.scrollerProxy("[data-scroll-container]", {
			scrollTop(value) {
				return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
			},
			getBoundingClientRect() {
				return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
			},

			pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
		});


		ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

		ScrollTrigger.refresh();

		const element = document.querySelector('.main-screen__apart');

		locoScroll.on('scroll', (obj) => {
			if (obj.scroll.y > 15) {
				element.classList.add("scroll");
				element.style.position = 'fixed';
			} else {
				element.classList.remove("scroll");
				element.style.position = '';
			}
		});

		gsap.fromTo('.infrastructure-item_1', {}, {
			x: 100,
			scrollTrigger: {
				trigger: '.infrastructure',
				start: 'top bottom',
				end: 'bottom top',
				scrub: true,
				scroller: '[data-scroll-container]',
			}
		})

		gsap.fromTo('.infrastructure-item_2', {}, {
			y: -80,
			x: 30,
			scrollTrigger: {
				trigger: '.infrastructure',
				start: 'top bottom',
				end: 'bottom top',
				scrub: true,
				scroller: '[data-scroll-container]',
			}
		})

		gsap.fromTo('.infrastructure-item_3', {}, {
			y: -60,
			x: 50,
			scrollTrigger: {
				trigger: '.infrastructure',
				start: 'top bottom',
				end: 'bottom top',
				scrub: true,
				scroller: '[data-scroll-container]',
			}
		})

		gsap.fromTo('.infrastructure-item_4', {}, {
			x: 60,
			scrollTrigger: {
				trigger: '.infrastructure',
				start: 'top bottom',
				end: 'bottom top',
				scrub: true,
				scroller: '[data-scroll-container]',
			}
		})

		gsap.fromTo('.infrastructure-item_5', {}, {
			y: -100,
			scrollTrigger: {
				trigger: '.infrastructure',
				start: 'top bottom',
				end: 'bottom top',
				scrub: true,
				scroller: '[data-scroll-container]',
			}
		})

		gsap.fromTo('.commercial-benefits__item_1', {}, {
			y: -70,
			scrollTrigger: {
				trigger: '.commercial-benefits',
				start: 'top bottom',
				end: 'bottom top',
				scrub: true,
				scroller: '[data-scroll-container]',
			}
		})

		gsap.fromTo('.commercial-benefits__item_2', {}, {
			y: 40,
			scrollTrigger: {
				trigger: '.commercial-benefits',
				start: 'top bottom',
				end: 'bottom top',
				scrub: true,
				scroller: '[data-scroll-container]',
			}
		})

		const imageParallax = gsap.utils.toArray('.image-parallax-big img');
		imageParallax.forEach(item => {
			gsap.fromTo(item, {}, {
				y: -100,
				scrollTrigger: {
					trigger: item,
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
					scroller: '[data-scroll-container]',
				}
			})
		});

		const imageParallaxSmall = gsap.utils.toArray('.image-parallax-small img');
		imageParallaxSmall.forEach(item => {
			gsap.fromTo(item, {}, {
				y: -70,
				scrollTrigger: {
					trigger: item,
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
					scroller: '[data-scroll-container]',
				}
			})
		});

		const titles = gsap.utils.toArray('.title-animate');
		titles.forEach(item => {
			gsap.fromTo(item, {}, {
				x: 20,
				scrollTrigger: {
					trigger: item,
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
					scroller: '[data-scroll-container]',
				}
			})
		});

		const titlesElem = gsap.utils.toArray('.title-animate > span.color');
		titlesElem.forEach(item => {
			gsap.fromTo(item, {}, {
				x: 30,
				scrollTrigger: {
					trigger: item,
					start: 'top bottom',
					end: 'bottom top',
					scrub: true,
					scroller: '[data-scroll-container]',
				}
			})
		});

	}
}

initAnimation();

window.addEventListener('resize', () => {

	ScrollTrigger.getAll().forEach(trigger => trigger.kill());
	initAnimation();
});


/* карта */
const [wrapper] = $('.map__image_wrapper') ?? []
if (wrapper) {
	const diffWidth = wrapper.scrollWidth - wrapper.clientWidth
	const diffHeight = wrapper.scrollHeight - wrapper.clientHeight
	wrapper.scroll(diffWidth / 2, diffHeight / 2)
};

/* виды */
$(document).ready(function () {
	$('.images-views-slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.images-views-slider-nav',
		initialSlide: 1
	});

	$('.images-views-slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.images-views-slider-for',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		arrows: false,
		initialSlide: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					arrows: true,
					fade: true,
					prevArrow: '.images-views-slider-nav-prev',
					nextArrow: '.images-views-slider-nav-next',
				}
			},
		]
	});

	$('.images-views-slider-nav').on('afterChange', function (event, slick, currentSlide) {
		$('.images-views-slider-for').slick('slickGoTo', currentSlide); // Обновляем текущий слайд в основном слайдере
	});
});


/* паркинг */
$(document).ready(function () {
	function initializeSlider(sliderSelector, counterSelector, prevArrow, nextArrow) {
		if ($(sliderSelector).length) {
			if ($(sliderSelector).hasClass('slick-initialized')) {
				return;
			}
			$(sliderSelector).slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				prevArrow: prevArrow,
				nextArrow: nextArrow,
			});

			var sliderCounter = $(counterSelector);

			var updateSliderCounter = function (slick, currentIndex) {
				var currentSlide = currentIndex + 1;
				var slidesCount = slick.slideCount || 0;
				sliderCounter.html("<span>" + currentSlide + "</span>" + "/" + slidesCount);
			};

			$(sliderSelector).on("init", function (event, slick) {
				updateSliderCounter(slick, slick.slickCurrentSlide());
			});

			$(sliderSelector).on("afterChange", function (event, slick, currentSlide) {
				updateSliderCounter(slick, currentSlide);
			});

			$(sliderSelector).slick("init");

			var initialSlideIndex = $(sliderSelector).slick("slickCurrentSlide");
			updateSliderCounter($(sliderSelector).slick('getSlick'), initialSlideIndex);
		}
	}

	initializeSlider(".parking-slider", ".slider__counter", '.parking-arrows-prev', '.parking-arrows-next');

	$('#myTab button[data-bs-toggle="tab"]').on("click", function () {
		var target = $(this).data("bs-target");

		if (target === "#profile-tab-pane") {
			if ($(".parking-slider-2").length) {
				initializeSlider(".parking-slider-2", ".slider__counter-2", '.parking-arrows-prev-2', '.parking-arrows-next-2');
			}
		}
	});
});


/* скрытие элементов */
$(document).ready(function () {
	let isExpanded = false;

	function toggleItems() {
		var items = $('.infrastructure-list__item');

		if ($(window).width() < 576 && items.length > 8) {
			items.slice(-8).hide();
		}

		$('.infrastructure__more').off('click').on('click', function () {
			var buttonText = $(this).find('span');

			if (isExpanded) {
				items.slice(-8).stop(true, true).slideUp();
				buttonText.text('показать еще');
				$(this).removeClass('active');
			} else {
				items.slice(-8).stop(true, true).slideDown();
				buttonText.text('скрыть');
				$(this).addClass('active');
			}
			isExpanded = !isExpanded;
		});
	}

	toggleItems();

	$(window).resize(function () {
		toggleItems();
	});
});



/* ход строительства */
$(document).ready(function () {
	initSlider('#2024-year-pane .progress-slider-for', '#2024-year-pane .progress-slider-nav');

	$('button[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
		var target = $(e.target).data('bs-target');

		initSlider(target + ' .progress-slider-for', target + ' .progress-slider-nav');
	});
});

function initSlider(forClass, navClass) {

	if ($(forClass).hasClass('slick-initialized')) {
		$(forClass).slick('unslick');
	}
	if ($(navClass).hasClass('slick-initialized')) {
		$(navClass).slick('unslick');
	}

	$(forClass).slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: navClass,
	});

	$(navClass).slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: forClass,
		dots: false,
		focusOnSelect: true,
		prevArrow: '.progress-arrows-prev',
		nextArrow: '.progress-arrows-next',
	});
}


$(document).ready(function () {
	$('.item-page-slider').each(function () {
		var $sliderContainer = $(this);
		var $slider = $sliderContainer.find('.item-page-slider-slick');

		$slider.slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: true,
			prevArrow: $sliderContainer.find('.item-page-slider-arrows-prev'),
			nextArrow: $sliderContainer.find('.item-page-slider-arrows-next')
		});
	});
});



