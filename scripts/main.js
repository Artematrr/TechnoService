$(function () {
	const $body = $('body')
	const $header = $('.js-header')
	const $menuButton = $('.js-menu-button')
	const $submenuButtons = $('.js-submenu-button')
	const getCustomersAutoplayOptions = slider =>
		slider.classList.contains('js-customers-autoplay')
			? {
					loop: true,
					speed: 650,
					autoplay: {
						delay: 2200,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
					},
				}
			: {}

	$(document).on('click', '.js-location-modal-trigger', function (event) {
		event.preventDefault()

		if (window.MicroModal) {
			MicroModal.show('location-modal', {
				openClass: 'is-open',
				disableScroll: true,
			})
		}
	})

	$(document).on(
		'click',
		'[data-micromodal-trigger="image-modal"][data-modal-image-src]',
		function (event) {
			const modal = document.getElementById('image-modal')
			const image = modal ? modal.querySelector('.modal__image') : null

			if (!image) {
				return
			}

			image.src = this.dataset.modalImageSrc
			image.alt = this.dataset.modalImageAlt || ''

			if (window.MicroModal) {
				event.preventDefault()
				MicroModal.show('image-modal', {
					openClass: 'is-open',
					disableScroll: true,
				})
			}
		},
	)

	if (window.MicroModal) {
		MicroModal.init({
			openClass: 'is-open',
			disableScroll: true,
			awaitOpenAnimation: false,
			awaitCloseAnimation: false,
		})
	}

	$menuButton.on('click', function () {
		const isOpen = !$header.hasClass('is-open')

		$header.toggleClass('is-open', isOpen)
		$body.toggleClass('is-fixed', isOpen)
		$(this).attr('aria-expanded', String(isOpen))
	})

	$submenuButtons.on('click', function (event) {
		event.stopPropagation()

		const $item = $(this).closest('.header__menu-item')
		const isExpanded = !$item.hasClass('is-expanded')

		$item
			.toggleClass('is-expanded', isExpanded)
			.siblings('.header__menu-item')
			.removeClass('is-expanded')
			.find('.js-submenu-button')
			.attr('aria-expanded', 'false')

		$(this).attr('aria-expanded', String(isExpanded))
	})

	$(document).on('click', function (event) {
		if ($(event.target).closest('.header__menu-item').length) {
			return
		}

		$('.header__menu-item').removeClass('is-expanded')
		$submenuButtons.attr('aria-expanded', 'false')
	})

	$(window).on('resize', function () {
		if (window.matchMedia('(min-width: 1024px)').matches) {
			$header.removeClass('is-open')
			$body.removeClass('is-fixed')
			$menuButton.attr('aria-expanded', 'false')
		}
	})

	if (window.Swiper) {
		$('.js-cards-slider').each(function () {
			const slider = this.querySelector('.cards-grid__container')
			const pagination = this.querySelector('.cards-grid__pagination')
			const isMobileSingle = this.classList.contains(
				'cards-grid--mobile-single',
			)

			if (!slider || !pagination) {
				return
			}

			new Swiper(slider, {
				slidesPerView: isMobileSingle ? 1 : 2,
				spaceBetween: 12,
				grabCursor: true,
				simulateTouch: true,
				watchOverflow: true,
				pagination: {
					el: pagination,
					clickable: true,
					bulletClass: 'cards-grid__bullet',
					bulletActiveClass: 'is-active',
					renderBullet(index, className) {
						return `<button class="${className}" type="button" aria-label="Показать слайд ${index + 1}"></button>`
					},
				},
				breakpoints: {
					768: {
						slidesPerView: 3,
						spaceBetween: 24,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
				},
			})
		})

		$('.js-projects-slider').each(function () {
			const slider = this.querySelector('.projects-slider__swiper')
			const pagination = this.querySelector('.projects-slider__pagination')
			const previousButton = this.querySelector(
				'.projects-slider__button--prev',
			)
			const nextButton = this.querySelector('.projects-slider__button--next')
			const isSingleRow = this.classList.contains('projects-slider--single-row')

			if (!slider || !pagination || !previousButton || !nextButton) {
				return
			}

			new Swiper(slider, {
				slidesPerView: 1,
				spaceBetween: 16,
				grabCursor: true,
				simulateTouch: true,
				watchOverflow: true,
				grid: {
					rows: 1,
					fill: 'row',
				},
				navigation: {
					prevEl: previousButton,
					nextEl: nextButton,
				},
				pagination: {
					el: pagination,
					clickable: true,
					bulletClass: 'projects-slider__bullet',
					bulletActiveClass: 'is-active',
					renderBullet(index, className) {
						return `<button class="${className}" type="button" aria-label="Показать группу проектов ${index + 1}"></button>`
					},
				},
				breakpoints: {
					768: {
						slidesPerView: 2,
						spaceBetween: 24,
						grid: {
							rows: isSingleRow ? 1 : 2,
							fill: 'row',
						},
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 30,
						grid: {
							rows: isSingleRow ? 1 : 2,
							fill: 'row',
						},
					},
				},
			})
		})

		$('.js-about-certificates').each(function () {
			const pagination = this
				.closest('.about-certificates')
				?.querySelector('.about-certificates__pagination')

			if (!pagination) {
				return
			}

			new Swiper(this, {
				slidesPerView: 1,
				spaceBetween: 16,
				grabCursor: true,
				simulateTouch: true,
				watchOverflow: true,
				pagination: {
					el: pagination,
					clickable: true,
					bulletClass: 'about-certificates__bullet',
					bulletActiveClass: 'is-active',
					renderBullet(index, className) {
						return `<button class="${className}" type="button" aria-label="Показать сертификат ${index + 1}"></button>`
					},
				},
				breakpoints: {
					375: {
						slidesPerView: 2,
						spaceBetween: 24,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 28,
					},
				},
			})
		})

		$('.js-related-news').each(function () {
			const slider = this.querySelector('.related-news__swiper')
			const pagination = this.querySelector('.related-news__pagination')
			const prevButton = this.querySelector('.related-news__prev')
			const nextButton = this.querySelector('.related-news__next')

			if (!slider || !pagination || !prevButton || !nextButton) {
				return
			}

			new Swiper(slider, {
				slidesPerView: 2,
				spaceBetween: 16,
				grabCursor: true,
				simulateTouch: true,
				watchOverflow: true,
				navigation: {
					prevEl: prevButton,
					nextEl: nextButton,
				},
				pagination: {
					el: pagination,
					clickable: true,
					bulletClass: 'related-news__bullet',
					bulletActiveClass: 'is-active',
					renderBullet(index, className) {
						return `<button class="${className}" type="button" aria-label="Показать группу новостей ${index + 1}"></button>`
					},
				},
				breakpoints: {
					768: {
						slidesPerView: 3,
						spaceBetween: 24,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
				},
			})
		})

	$('.js-news-slider').each(function () {
			const slider = this.querySelector('.news-slider__swiper')
			const pagination = this.querySelector('.news-slider__pagination')
			const previousButton = this.querySelector('.news-slider__button--prev')
			const nextButton = this.querySelector('.news-slider__button--next')

			if (!slider || !pagination || !previousButton || !nextButton) {
				return
			}

			new Swiper(slider, {
				slidesPerView: 1,
				spaceBetween: 16,
				grabCursor: true,
				simulateTouch: true,
				watchOverflow: true,
				navigation: {
					prevEl: previousButton,
					nextEl: nextButton,
				},
				pagination: {
					el: pagination,
					clickable: true,
					bulletClass: 'news-slider__bullet',
					bulletActiveClass: 'is-active',
					renderBullet(index, className) {
						return `<button class="${className}" type="button" aria-label="Показать новости ${index + 1}"></button>`
					},
				},
				breakpoints: {
					1024: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
				},
			})
		})

		$('.js-service-gallery').each(function () {
			const slider = this.querySelector('.service-gallery__swiper')
			const pagination = this.querySelector('.service-gallery__pagination')
			const previousButton = this.querySelector(
				'.service-gallery__button--prev',
			)
			const nextButton = this.querySelector('.service-gallery__button--next')

			if (!slider || !pagination || !previousButton || !nextButton) {
				return
			}

			new Swiper(slider, {
				slidesPerView: 2.25,
				spaceBetween: 12,
				grabCursor: true,
				simulateTouch: true,
				watchOverflow: true,
				navigation: {
					prevEl: previousButton,
					nextEl: nextButton,
				},
				pagination: {
					el: pagination,
					clickable: true,
					bulletClass: 'service-gallery__bullet',
					bulletActiveClass: 'is-active',
					renderBullet(index, className) {
						return `<button class="${className}" type="button" aria-label="Показать фотографию ${index + 1}"></button>`
					},
				},
				breakpoints: {
					768: {
						slidesPerView: 3,
						spaceBetween: 16,
					},
					1024: {
						slidesPerView: 5,
						spaceBetween: 16,
					},
				},
			})
		})

		$('.js-customers-slider').each(function () {
			const slider = this.querySelector('.customers-slider__swiper')
			const pagination = this.querySelector('.customers-slider__pagination')

			if (!slider || !pagination) {
				return
			}

			new Swiper(slider, {
				slidesPerView: 2.2,
				spaceBetween: 12,
				grabCursor: true,
				simulateTouch: true,
				watchOverflow: true,
				...getCustomersAutoplayOptions(slider),
				pagination: {
					el: pagination,
					clickable: true,
					bulletClass: 'customers-slider__bullet',
					bulletActiveClass: 'is-active',
					renderBullet(index, className) {
						return `<button class="${className}" type="button" aria-label="Показать заказчика ${index + 1}"></button>`
					},
				},
				breakpoints: {
					768: {
						slidesPerView: 3,
						spaceBetween: 16,
					},
					1024: {
						slidesPerView: 5,
						spaceBetween: 12,
					},
				},
			})
		})

		$('.solution-temperature__customers-slider').each(function () {
			new Swiper(this, {
				slidesPerView: 2.2,
				spaceBetween: 10,
				grabCursor: true,
				simulateTouch: true,
				watchOverflow: true,
				...getCustomersAutoplayOptions(this),
				breakpoints: {
					768: {
						slidesPerView: 3,
						spaceBetween: 14,
					},
					1024: {
						slidesPerView: 5,
						spaceBetween: 14,
					},
				},
			})
		})

		$('.service-customers__slider').each(function () {
			new Swiper(this, {
				slidesPerView: 2.2,
				spaceBetween: 10,
				grabCursor: true,
				simulateTouch: true,
				watchOverflow: true,
				...getCustomersAutoplayOptions(this),
				breakpoints: {
					768: {
						slidesPerView: 3,
						spaceBetween: 12,
					},
					1024: {
						slidesPerView: 5,
						spaceBetween: 12,
					},
				},
			})
		})

		$('.js-home-brands').each(function () {
			new Swiper(this.querySelector('.home-brands__swiper'), {
				slidesPerView: 1.5,
				centeredSlides: true,
				loop: true,
				speed: 650,
				spaceBetween: 15,
				allowTouchMove: true,
				autoplay: {
					delay: 2200,
					disableOnInteraction: false,
				},
				breakpoints: {
					768: { slidesPerView: 3, centeredSlides: false, },
					1024: { slidesPerView: 5 },
				},
			})
		})

		$('.js-home-production').each(function () {
			const block = this
			const slider = block.querySelector('.cards-grid__container')
			const pagination = block.querySelector('.cards-grid__pagination')
			const mobileMedia = window.matchMedia('(max-width: 767px)')
			let sliderInstance = null

			if (!slider || !pagination) {
				return
			}

			const toggleSlider = function () {
				if (mobileMedia.matches && !sliderInstance) {
					sliderInstance = new Swiper(slider, {
						slidesPerView: 1,
						spaceBetween: 15,
						grabCursor: true,
						watchOverflow: true,
						pagination: {
							el: pagination,
							clickable: true,
							bulletClass: 'cards-grid__bullet',
							bulletActiveClass: 'is-active',
							renderBullet(index, className) {
								return `<button class="${className}" type="button" aria-label="Показать карточку ${index + 1}"></button>`
							},
						},
					})
				} else if (!mobileMedia.matches && sliderInstance) {
					sliderInstance.destroy(true, true)
					sliderInstance = null
				}
			}

			toggleSlider()
			mobileMedia.addEventListener('change', toggleSlider)
		})

		$('.js-service-clients').each(function () {
			const slider = this.querySelector('.service-clients__swiper')
			const previousButton = this.querySelector('.service-clients__button--prev')
			const nextButton = this.querySelector('.service-clients__button--next')
			const pagination = this.querySelector('.service-clients__pagination')
			const hasArrows = !this.classList.contains(
				'service-clients--arrows-hidden',
			)
			const hasPagination = !this.classList.contains(
				'service-clients--pagination-hidden',
			)
			const options = {
				slidesPerView: 2,
				spaceBetween: 24,
				grabCursor: true,
				simulateTouch: true,
				watchOverflow: true,
				autoplay: true,
				...getCustomersAutoplayOptions(slider),
				breakpoints: {
					768: { slidesPerView: 4, spaceBetween: 12 },
					1024: { slidesPerView: 5, spaceBetween: 12 },
				},
			}

			if (!slider) {
				return
			}

			if (hasArrows && previousButton && nextButton) {
				options.navigation = {
					prevEl: previousButton,
					nextEl: nextButton,
				}
			}

			if (hasPagination && pagination) {
				options.pagination = {
					el: pagination,
					clickable: true,
					bulletClass: 'service-clients__bullet',
					bulletActiveClass: 'is-active',
					renderBullet(index, className) {
						return `<button class="${className}" type="button" aria-label="Показать заказчика ${index + 1}"></button>`
					},
				}
			}

			new Swiper(slider, options)
		})

		$('.js-solution-temperature').each(function () {
			const component = this
			const slider = component.querySelector('.solution-temperature__swiper')
			const previousButton = component.querySelector(
				'.solution-temperature__button--prev',
			)
			const nextButton = component.querySelector(
				'.solution-temperature__button--next',
			)
			const mobileMedia = window.matchMedia('(max-width: 767px)')
			const items = Array.from(
				component.querySelectorAll('.solution-temperature__item'),
			)
			const currentItemIndex = items.findIndex(item =>
				item.classList.contains('is-active'),
			)
			const fallbackIndex = Number.parseInt(
				component.dataset.activeIndex || '0',
				10,
			)
			const activeIndex =
				currentItemIndex >= 0
					? currentItemIndex
					: Number.isNaN(fallbackIndex)
						? 0
						: fallbackIndex
			let temperatureSlider = null

			if (!slider || !previousButton || !nextButton) {
				return
			}

			const updateTemperatureSlider = () => {
				if (mobileMedia.matches && !temperatureSlider) {
					temperatureSlider = new Swiper(slider, {
						slidesPerView: 'auto',
						centeredSlides: true,
						initialSlide: activeIndex,
						spaceBetween: 8,
						grabCursor: true,
						simulateTouch: true,
						watchOverflow: true,
						navigation: {
							prevEl: previousButton,
							nextEl: nextButton,
						},
					})
				} else if (!mobileMedia.matches && temperatureSlider) {
					temperatureSlider.destroy(true, true)
					temperatureSlider = null
				}
			}

			updateTemperatureSlider()

			if (typeof mobileMedia.addEventListener === 'function') {
				mobileMedia.addEventListener('change', updateTemperatureSlider)
			} else {
				mobileMedia.addListener(updateTemperatureSlider)
			}
		})
	}

	$('.js-testimonials').each(function () {
		const testimonials = this
		const rows = Array.from(
			testimonials.querySelectorAll('.testimonials__row'),
		)
		const forwardRow = testimonials.querySelector(
			'.testimonials__row--forward',
		)
		const pagination = testimonials.querySelector(
			'.testimonials__pagination',
		)
		const mobileMedia = window.matchMedia('(max-width: 767px)')
		let mobileSlider = null

		const removeMarquee = function () {
			rows.forEach(row => {
				row.classList.remove('is-marquee-ready')
				const list = row.querySelector('.testimonials__list')

				list?.style.removeProperty('--testimonials-duration')
				list
					?.querySelectorAll('[data-testimonials-clone]')
					.forEach(clone => clone.remove())
			})
		}

		const createMarquee = function () {
			rows.forEach(row => {
				const list = row.querySelector('.testimonials__list')
				const slides = list
					? Array.from(list.children).filter(
							slide => !slide.hasAttribute('data-testimonials-clone'),
						)
					: []

				if (!list || !slides.length) {
					return
				}

				slides.forEach(slide => {
					const clone = slide.cloneNode(true)
					const button = clone.querySelector('button')

					clone.dataset.testimonialsClone = ''
					clone.setAttribute('aria-hidden', 'true')
					button?.setAttribute('tabindex', '-1')
					list.append(clone)
				})

				list.style.setProperty(
					'--testimonials-duration',
					`${Math.max(28, slides.length * 8)}s`,
				)
				row.classList.add('is-marquee-ready')
			})
		}

		const updateTestimonials = function () {
			if (mobileMedia.matches) {
				removeMarquee()

				if (!mobileSlider && forwardRow && pagination) {
					mobileSlider = new Swiper(forwardRow, {
						slidesPerView: 1,
						spaceBetween: 12,
						loop: true,
						speed: 650,
						grabCursor: true,
						autoplay: {
							delay: 3000,
							disableOnInteraction: false,
							pauseOnMouseEnter: true,
						},
						pagination: {
							el: pagination,
							clickable: true,
							bulletClass: 'testimonials__bullet',
							bulletActiveClass: 'is-active',
							renderBullet(index, className) {
								return `<button class="${className}" type="button" aria-label="Показать отзыв ${index + 1}"></button>`
							},
						},
					})
				}
			} else {
				if (mobileSlider) {
					mobileSlider.destroy(true, true)
					mobileSlider = null
				}

				removeMarquee()
				createMarquee()
			}
		}

		updateTestimonials()

		if (typeof mobileMedia.addEventListener === 'function') {
			mobileMedia.addEventListener('change', updateTestimonials)
		} else {
			mobileMedia.addListener(updateTestimonials)
		}
	})

	$('.js-news-detail-gallery').each(function () {
		new Swiper(this, {
			slidesPerView: 1.22,
			spaceBetween: 14,
			watchOverflow: true,
			breakpoints: {
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
			},
		})
	})

	$('.js-project-metrics').each(function () {
		const metrics = this
		const dateParts = String(metrics.dataset.startDate || '')
			.split('-')
			.map(Number)
		const counters = Array.from(metrics.querySelectorAll('.flip-counter'))

		if (
			dateParts.length !== 3 ||
			dateParts.some(Number.isNaN) ||
			!counters.length
		) {
			return
		}

		const startDate = new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
		const now = new Date()
		let years = now.getFullYear() - startDate.getFullYear()
		let anniversary = new Date(startDate)

		anniversary.setFullYear(startDate.getFullYear() + years)

		if (anniversary > now) {
			years -= 1
			anniversary = new Date(startDate)
			anniversary.setFullYear(startDate.getFullYear() + years)
		}

		const remainder = Math.max(0, now - anniversary)
		const targets = {
			years: Math.max(0, years),
			days: Math.floor(remainder / 86400000),
			hours: Math.floor((remainder % 86400000) / 3600000),
		}
		const widths = {
			years: 2,
			days: 3,
			hours: 2,
		}

		const setCounterValue = function (counter, value, animate) {
			const unit = counter.dataset.timeUnit
			const output = String(value).padStart(widths[unit] || 2, '0')
			const card = counter.querySelector('.flip-counter__card')

			counter.querySelectorAll('.flip-counter__half span').forEach(element => {
				element.textContent = output
			})

			if (animate && card) {
				const flipDuration =
					parseFloat(counter.style.getPropertyValue('--flip-duration')) || 180

				card.classList.remove('is-flipping')
				void card.offsetWidth
				card.classList.add('is-flipping')
				clearTimeout(card.flipTimer)
				card.flipTimer = setTimeout(() => {
					card.classList.remove('is-flipping')
				}, flipDuration + 40)
			}
		}

		counters.forEach(counter => {
			setCounterValue(counter, targets[counter.dataset.timeUnit] || 0, false)
		})

		const runCounters = function () {
			if (metrics.classList.contains('is-animated')) {
				return
			}

			metrics.classList.add('is-animated')

			if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
				counters.forEach(counter => {
					setCounterValue(
						counter,
						targets[counter.dataset.timeUnit] || 0,
						false,
					)
					counter.querySelector('.flip-counter__card')?.classList.add('is-complete')
				})
				return
			}

			const animationDuration = 1600
			const maxFlipSteps = 14
			const animationStart = performance.now()
			const counterStates = {}
			let maxFlipDuration = 0
			let completionScheduled = false

			counters.forEach(counter => {
				const unit = counter.dataset.timeUnit
				const target = targets[unit] || 0
				const card = counter.querySelector('.flip-counter__card')
				const steps = Math.min(target, maxFlipSteps)
				const stepDuration = steps ? animationDuration / steps : 0
				const flipDuration = target
					? Math.min(180, Math.max(70, stepDuration * 0.7))
					: 180

				card?.classList.remove('is-complete')
				counter.style.setProperty('--flip-duration', `${flipDuration}ms`)
				maxFlipDuration = Math.max(maxFlipDuration, flipDuration)
				counterStates[unit] = {
					target,
					steps,
					stepDuration,
					previousValue: 0,
				}
				setCounterValue(counter, 0, false)
			})

			const frame = function (timestamp) {
				const progress = Math.min(
					(timestamp - animationStart) / animationDuration,
					1,
				)
				const elapsed = timestamp - animationStart

				counters.forEach(counter => {
					const unit = counter.dataset.timeUnit
					const state = counterStates[unit]
					const { target, steps, stepDuration } = state
					const currentStep =
						progress >= 1 || !stepDuration
							? steps
							: Math.min(steps, Math.floor(elapsed / stepDuration))
					const nextValue =
						progress >= 1 || !steps
							? target
							: Math.min(
									target,
									Math.round((target * currentStep) / steps),
								)

					if (state.previousValue !== nextValue) {
						setCounterValue(counter, nextValue, nextValue > 0)
						state.previousValue = nextValue
					}
				})

				if (progress < 1) {
					requestAnimationFrame(frame)
				} else if (!completionScheduled) {
					completionScheduled = true
					setTimeout(() => {
						counters.forEach(counter => {
							counter
								.querySelector('.flip-counter__card')
								?.classList.add('is-complete')
						})
					}, maxFlipDuration + 50)
				}
			}

			requestAnimationFrame(frame)
		}

		let observer

		const checkVisibility = function () {
			const rect = metrics.getBoundingClientRect()
			const isVisible =
				rect.top < window.innerHeight * 0.85 &&
				rect.bottom > window.innerHeight * 0.15

			if (!isVisible) {
				return
			}

			observer?.disconnect()
			window.removeEventListener('scroll', checkVisibility)
			window.removeEventListener('resize', checkVisibility)
			runCounters()
		}

		if ('IntersectionObserver' in window) {
			observer = new IntersectionObserver(checkVisibility, {
				threshold: 0.2,
			})
			observer.observe(metrics)
		}

		window.addEventListener('scroll', checkVisibility, { passive: true })
		window.addEventListener('resize', checkVisibility)
		checkVisibility()
	})

	$(document).on('click', '.js-review-card', function () {
		const $card = $(this)

		$('.js-review-modal-title').text(
			$card.data('review-author') || 'Отзыв заказчика',
		)
		$('.js-review-modal-company').text($card.data('review-company') || '')
		$('.js-review-modal-text').text($card.data('review-text') || '')

		if (window.MicroModal) {
			MicroModal.show('review-text-modal', {
				openClass: 'is-open',
				disableScroll: true,
			})
		}
	})

	$('.js-print-page').on('click', function () {
		window.print()
	})

	const galleryLightbox = document.createElement('div')
	galleryLightbox.className = 'gallery-lightbox'
	galleryLightbox.setAttribute('aria-hidden', 'true')
	galleryLightbox.innerHTML = `
		<div class="gallery-lightbox__overlay">
			<button class="gallery-lightbox__close" type="button" aria-label="Закрыть фотографию"></button>
			<button class="gallery-lightbox__button gallery-lightbox__button--prev" type="button" aria-label="Предыдущая фотография">←</button>
			<figure class="gallery-lightbox__figure">
				<img class="gallery-lightbox__image" src="" alt="">
				<figcaption class="gallery-lightbox__caption"></figcaption>
			</figure>
			<button class="gallery-lightbox__button gallery-lightbox__button--next" type="button" aria-label="Следующая фотография">→</button>
		</div>`
	document.body.append(galleryLightbox)

	let galleryImages = []
	let galleryIndex = 0
	let galleryTrigger = null
	const lightboxImage = galleryLightbox.querySelector(
		'.gallery-lightbox__image',
	)
	const lightboxCaption = galleryLightbox.querySelector(
		'.gallery-lightbox__caption',
	)

	const showGalleryImage = function () {
		const image = galleryImages[galleryIndex]

		if (!image) {
			return
		}

		lightboxImage.src = image.currentSrc || image.src
		lightboxImage.alt = image.alt
		lightboxCaption.textContent = image.alt
	}

	const closeGallery = function () {
		galleryLightbox.classList.remove('is-open')
		galleryLightbox.setAttribute('aria-hidden', 'true')
		$body.removeClass('is-fixed')
		galleryTrigger?.focus()
	}

	$('.js-service-gallery').each(function () {
		const images = Array.from(
			this.querySelectorAll('.service-gallery__open img'),
		)

		$(this).on('click', '.service-gallery__open', function () {
			galleryImages = images
			galleryIndex = Math.max(0, images.indexOf(this.querySelector('img')))
			galleryTrigger = this
			showGalleryImage()
			galleryLightbox.classList.add('is-open')
			galleryLightbox.setAttribute('aria-hidden', 'false')
			$body.addClass('is-fixed')
			galleryLightbox.querySelector('.gallery-lightbox__close').focus()
		})
	})

	$(galleryLightbox).on('click', '.gallery-lightbox__close', closeGallery)
	$(galleryLightbox).on(
		'click',
		'.gallery-lightbox__overlay',
		function (event) {
			if (event.target === this) {
				closeGallery()
			}
		},
	)
	$(galleryLightbox).on(
		'click',
		'.gallery-lightbox__button--prev',
		function () {
			galleryIndex =
				(galleryIndex - 1 + galleryImages.length) % galleryImages.length
			showGalleryImage()
		},
	)
	$(galleryLightbox).on(
		'click',
		'.gallery-lightbox__button--next',
		function () {
			galleryIndex = (galleryIndex + 1) % galleryImages.length
			showGalleryImage()
		},
	)

	$(document).on('keydown', function (event) {
		if (!galleryLightbox.classList.contains('is-open')) {
			return
		}

		if (event.key === 'Escape') {
			closeGallery()
		} else if (event.key === 'ArrowLeft') {
			galleryIndex =
				(galleryIndex - 1 + galleryImages.length) % galleryImages.length
			showGalleryImage()
		} else if (event.key === 'ArrowRight') {
			galleryIndex = (galleryIndex + 1) % galleryImages.length
			showGalleryImage()
		}
	})

	$('.js-mobile-cards-slider').each(function () {
		const $slider = $(this)
		const $list = $slider.find('.cards-grid__list')
		const $items = $list.children('li')
		const $pagination = $slider.find('.cards-grid__pagination')

		if (!$list.length || !$items.length || !$pagination.length) {
			return
		}

		$items.each(function (index) {
			$('<button>', {
				class: `cards-grid__bullet${index === 0 ? ' is-active' : ''}`,
				type: 'button',
				'aria-label': `Показать карточку ${index + 1}`,
			}).appendTo($pagination)
		})

		const $bullets = $pagination.find('.cards-grid__bullet')

		const updatePagination = function () {
			const firstItem = $items.get(0)
			const secondItem = $items.get(1)
			const step = secondItem
				? secondItem.offsetLeft - firstItem.offsetLeft
				: firstItem.offsetWidth
			const activeIndex = Math.min(
				$bullets.length - 1,
				Math.max(0, Math.round($list.scrollLeft() / step)),
			)

			$bullets.removeClass('is-active').eq(activeIndex).addClass('is-active')
		}

		$bullets.on('click', function () {
			const target = $items.get($(this).index())

			if (!target) {
				return
			}

			$list.animate(
				{ scrollLeft: target.offsetLeft - $list.get(0).offsetLeft },
				240,
			)
		})

		$list.on('scroll', updatePagination)
		$(window).on('resize', updatePagination)
	})

	$('.product-catalog__nav').each(function () {
		const nav = this
		const list = nav.querySelector('.product-catalog__nav-list')
		const arrows = nav.querySelectorAll('.product-catalog__nav-arrow')
		const tabletMedia = window.matchMedia('(max-width: 1023px)')
		let swiper = null
		let swiperElement = null

		if (!list || arrows.length < 2) {
			return
		}

		const prepareSlider = function () {
			if (!swiperElement) {
				swiperElement = nav.querySelector('.product-catalog__nav-swiper')

				if (!swiperElement) {
					swiperElement = document.createElement('div')
					swiperElement.className = 'product-catalog__nav-swiper swiper'
					list.parentNode.insertBefore(swiperElement, list)
					swiperElement.appendChild(list)
				}
			}

			list.classList.add('swiper-wrapper')
			Array.from(list.children).forEach((item) => {
				item.classList.add('swiper-slide')
			})

			return swiperElement
		}

		const slideToActiveLink = function () {
			if (!swiper) {
				return
			}

			const activeSlide = list
				.querySelector('.product-catalog__nav-link.is-active')
				?.closest('.swiper-slide')
			const activeIndex = Array.from(list.children).indexOf(activeSlide)

			if (activeIndex >= 0) {
				swiper.slideTo(activeIndex, 0)
			}
		}

		const destroySlider = function () {
			if (!swiper) {
				return
			}

			swiper.destroy(true, true)
			swiper = null
		}

		const toggleSlider = function () {
			if (!tabletMedia.matches) {
				destroySlider()
				return
			}

			if (swiper || !window.Swiper) {
				return
			}

			swiper = new Swiper(prepareSlider(), {
				slidesPerView: 'auto',
				spaceBetween: 12,
				grabCursor: true,
				watchOverflow: true,
				navigation: {
					prevEl: arrows[0],
					nextEl: arrows[1],
				},
			})

			slideToActiveLink()
		}

		arrows.forEach((arrow) => {
			arrow.addEventListener('click', function (event) {
				if (arrow.tagName === 'A') {
					event.preventDefault()
				}
			})
		})

		toggleSlider()

		if (tabletMedia.addEventListener) {
			tabletMedia.addEventListener('change', toggleSlider)
		} else {
			tabletMedia.addListener(toggleSlider)
		}
	})

	$('.service-brand__grid--selector').each(function () {
		const list = this
		const mobileMedia = window.matchMedia('(max-width: 767px)')
		let swiper = null
		let slider = null
		let swiperElement = null
		let prevButton = null
		let nextButton = null

		const prepareSlider = function () {
			if (!slider) {
				slider = document.createElement('div')
				slider.className = 'service-brand__grid-slider'

				prevButton = document.createElement('button')
				prevButton.className =
					'service-brand__grid-arrow service-brand__grid-arrow--prev'
				prevButton.type = 'button'
				prevButton.setAttribute('aria-label', 'Предыдущий тип оборудования')
				prevButton.textContent = '←'

				nextButton = document.createElement('button')
				nextButton.className =
					'service-brand__grid-arrow service-brand__grid-arrow--next'
				nextButton.type = 'button'
				nextButton.setAttribute('aria-label', 'Следующий тип оборудования')
				nextButton.textContent = '→'

				swiperElement = document.createElement('div')
				swiperElement.className = 'service-brand__grid-swiper swiper'

				list.parentNode.insertBefore(slider, list)
				slider.appendChild(prevButton)
				slider.appendChild(swiperElement)
				swiperElement.appendChild(list)
				slider.appendChild(nextButton)
			}

			list.classList.add('swiper-wrapper')
			Array.from(list.children).forEach((item) => {
				item.classList.add('swiper-slide')
			})

			return swiperElement
		}

		const slideToActiveItem = function () {
			if (!swiper) {
				return
			}

			const activeSlide = list.querySelector('li.is-active')
			const activeIndex = Array.from(list.children).indexOf(activeSlide)

			if (activeIndex >= 0) {
				swiper.slideTo(activeIndex, 0)
			}
		}

		const destroySlider = function () {
			if (!swiper) {
				return
			}

			swiper.destroy(true, true)
			swiper = null
		}

		const toggleSlider = function () {
			if (!mobileMedia.matches) {
				destroySlider()
				return
			}

			if (swiper || !window.Swiper) {
				return
			}

			swiper = new Swiper(prepareSlider(), {
				slidesPerView: 1,
				spaceBetween: 0,
				grabCursor: true,
				watchOverflow: true,
				navigation: {
					prevEl: prevButton,
					nextEl: nextButton,
				},
			})

			slideToActiveItem()
		}

		toggleSlider()

		if (mobileMedia.addEventListener) {
			mobileMedia.addEventListener('change', toggleSlider)
		} else {
			mobileMedia.addListener(toggleSlider)
		}
	})

	$('.js-faq').each(function () {
		const $items = $(this).find('.faq__item')
		const $buttons = $items.find('.faq__question')

		$buttons.on('click', function () {
			const $item = $(this).closest('.faq__item')
			const isOpen = !$item.hasClass('is-open')

			$items.removeClass('is-open')
			$buttons.attr('aria-expanded', 'false')

			$item.toggleClass('is-open', isOpen)
			$(this).attr('aria-expanded', String(isOpen))
		})
	})

	$('.js-home-work-tabs').each(function () {
		const $section = $(this)
		const $buttons = $section.find('.projects-slider__tab')
		const $slides = $section.find('.projects-slider__slide')
		const swiper = $section.find('.projects-slider__swiper').get(0)?.swiper

		const activateTab = button => {
			const $button = $(button)
			const category = $button.data('category')

			$buttons.removeClass('is-active').attr('aria-selected', 'false')
			$button.addClass('is-active').attr('aria-selected', 'true')
			$slides.each(function () {
				$(this).toggle(
					category === 'all' || $(this).data('category') === category,
				)
			})
			swiper?.slideTo(0)
			swiper?.update()
		}

		$buttons.on('click', function () {
			activateTab(this)
		})
	})

	$('.js-detail-accordion').each(function () {
		const $items = $(this).find('.detail-accordion__item')
		const $buttons = $items.find('.detail-accordion__button')
		const $details = $items.find('.detail-accordion__details')

		const syncDetails = function () {
			$details.each(function () {
				const isOpen = $(this)
					.closest('.detail-accordion__item')
					.hasClass('is-open')

				$(this).css({
					maxHeight: isOpen ? `${this.scrollHeight}px` : '0px',
					opacity: isOpen ? 1 : 0,
				})
			})
		}

		syncDetails()
		$(window).on('resize', syncDetails)

		$buttons.on('click', function () {
			const $item = $(this).closest('.detail-accordion__item')
			const isOpen = !$item.hasClass('is-open')

			$items.removeClass('is-open')
			$buttons.attr('aria-expanded', 'false')
			$item.toggleClass('is-open', isOpen)
			$(this).attr('aria-expanded', String(isOpen))
			syncDetails()
		})
	})

	$('.js-spare-parts-brands').each(function () {
		const $brands = $(this)
		const $button = $brands.find('.spare-parts-brands__toggle')
		const $label = $button.find('span')

		$button.on('click', function () {
			const isExpanded = !$brands.hasClass('is-expanded')

			$brands.toggleClass('is-expanded', isExpanded)
			$button.attr('aria-expanded', String(isExpanded))
			$label.text(isExpanded ? 'Свернуть' : 'Развернуть ещё')
		})
	})

	$('.js-product-offers').each(function () {
		const $items = $(this).find('.product-offers__item')
		const $buttons = $items.find('.product-offers__button')
		const $details = $items.find('.product-offers__details')

		const syncDetails = function () {
			$details.each(function () {
				const isOpen = $(this)
					.closest('.product-offers__item')
					.hasClass('is-open')

				$(this).css({
					maxHeight: isOpen ? `${this.scrollHeight}px` : '0px',
					opacity: isOpen ? 1 : 0,
				})
			})
		}

		syncDetails()
		$(window).on('resize', syncDetails)

		$buttons.on('click', function (event) {
			if ($(event.target).closest('[data-micromodal-trigger]').length) {
				return
			}

			const $item = $(this).closest('.product-offers__item')
			const isOpen = !$item.hasClass('is-open')

			$items.removeClass('is-open')
			$buttons.attr('aria-expanded', 'false')

			$item.toggleClass('is-open', isOpen)
			$(this).attr('aria-expanded', String(isOpen))
			syncDetails()
		})
	})
})
