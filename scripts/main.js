$(function () {
	const $body = $('body');
	const $header = $('.js-header');
	const $menuButton = $('.js-menu-button');
	const $submenuButtons = $('.js-submenu-button');

	if (window.MicroModal) {
		MicroModal.init({
			openClass: 'is-open',
			disableScroll: true,
			awaitOpenAnimation: false,
			awaitCloseAnimation: false,
		});
	}

	$menuButton.on('click', function () {
		const isOpen = !$header.hasClass('is-open');

		$header.toggleClass('is-open', isOpen);
		$body.toggleClass('is-fixed', isOpen);
		$(this).attr('aria-expanded', String(isOpen));
	});

	$submenuButtons.on('click', function (event) {
		event.stopPropagation();

		const $item = $(this).closest('.header__menu-item');
		const isExpanded = !$item.hasClass('is-expanded');

		$item
			.toggleClass('is-expanded', isExpanded)
			.siblings('.header__menu-item')
			.removeClass('is-expanded')
			.find('.js-submenu-button')
			.attr('aria-expanded', 'false');

		$(this).attr('aria-expanded', String(isExpanded));
	});

	$(document).on('click', function (event) {
		if ($(event.target).closest('.header__menu-item').length) {
			return;
		}

		$('.header__menu-item').removeClass('is-expanded');
		$submenuButtons.attr('aria-expanded', 'false');
	});

	$(window).on('resize', function () {
		if (window.matchMedia('(min-width: 1024px)').matches) {
			$header.removeClass('is-open');
			$body.removeClass('is-fixed');
			$menuButton.attr('aria-expanded', 'false');
		}
	});

	$('.js-mobile-cards-slider').each(function () {
		const $slider = $(this);
		const $list = $slider.find('.cards-grid__list');
		const $items = $list.children('li');
		const $pagination = $slider.find('.cards-grid__pagination');

		if (!$list.length || !$items.length || !$pagination.length) {
			return;
		}

		$items.each(function (index) {
			$('<button>', {
				class: `cards-grid__bullet${index === 0 ? ' is-active' : ''}`,
				type: 'button',
				'aria-label': `Показать карточку ${index + 1}`,
			}).appendTo($pagination);
		});

		const $bullets = $pagination.find('.cards-grid__bullet');

		const updatePagination = function () {
			const firstItem = $items.get(0);
			const secondItem = $items.get(1);
			const step = secondItem
				? secondItem.offsetLeft - firstItem.offsetLeft
				: firstItem.offsetWidth;
			const activeIndex = Math.min(
				$bullets.length - 1,
				Math.max(0, Math.round($list.scrollLeft() / step))
			);

			$bullets.removeClass('is-active').eq(activeIndex).addClass('is-active');
		};

		$bullets.on('click', function () {
			const target = $items.get($(this).index());

			if (!target) {
				return;
			}

			$list.animate({ scrollLeft: target.offsetLeft - $list.get(0).offsetLeft }, 240);
		});

		$list.on('scroll', updatePagination);
		$(window).on('resize', updatePagination);
	});
});
