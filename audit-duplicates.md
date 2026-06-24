# Audit: duplicated and non-standardized blocks

## High priority

### Группа 1: detail-layout с боковым меню

* Файлы:
  * `service.html`
  * `service-detail-01.html`
  * `service-detail-02.html`
  * `our-services-detail-01.html`
  * `our-services-detail-02.html`
  * `production-detail.html`
  * `service-brand-01.html`
  * `service-brand-detail-01.html`
* Текущие блоки:
  * `service-overview`
  * `service-inspection`
  * `service-modernization`
  * `product-catalog--service-detail`
  * `product-catalog--detail`
  * `service-brand`
* Рекомендуемый общий блок:
  * `detail-layout`
* Что отличается:
  * контент;
  * активный пункт меню;
  * наличие сайдбара с брендами;
  * вложенные галереи, аккордеоны и карточки;
  * модификаторы страниц.
* Что можно стандартизировать:
  * HTML-структуру `container + nav + content`;
  * боковую навигацию на базе `product-catalog__nav`;
  * сетку layout;
  * общие отступы и адаптив.
* Потенциально объединить SCSS:
  * `styles/blocks/_service.scss`
  * `styles/blocks/_service-detail.scss`
  * `styles/blocks/_product-catalog.scss`
  * `styles/blocks/_production-detail.scss`

### Группа 2: карточки услуг / решений / сервисных направлений

* Файлы:
  * `index.html`
  * `our-services.html`
  * `solutions.html`
  * `solution-cooling.html`
  * `solution-cooling-detail-01.html`
* Текущие блоки:
  * `service-card`
  * `home-service__card`
  * `solution-services__item`
  * `cards-grid`
* Рекомендуемый общий блок:
  * `service-card-list` + `service-card` с модификаторами
* Что отличается:
  * медиа или его отсутствие;
  * иконка;
  * слайдер на главной;
  * количество карточек;
  * подписи и ссылки.
* Что можно стандартизировать:
  * структуру карточки;
  * hover-состояние;
  * стрелку;
  * работу с изображением и иконкой;
  * вариант сетки и вариант слайдера.
* Потенциально объединить SCSS:
  * `styles/blocks/_service-card.scss`
  * часть `styles/blocks/_home.scss`
  * часть `styles/blocks/_solution-detail.scss`
  * `styles/blocks/_cards-grid.scss`

### Группа 3: карточки работ / проектов

* Файлы:
  * `service.html`
  * `index.html`
  * `projects.html`
  * `project.html`
  * `our-services-detail-02.html`
* Текущие блоки:
  * `service-works`
  * `service-work-card`
  * `projects-slider`
  * `projects-slider__card`
* Рекомендуемый общий блок:
  * `work-card-slider`
* Что отличается:
  * табы на главной;
  * наличие стрелок;
  * количество строк Swiper;
  * CTA внутри карточки;
  * подписи категорий.
* Что можно стандартизировать:
  * карточку работы/проекта;
  * мета-строку;
  * медиа-блок;
  * Swiper-конфиг с модификаторами.
* Потенциально объединить SCSS:
  * `styles/blocks/_service.scss`
  * `styles/blocks/_projects-slider.scss`
  * часть `styles/blocks/_home.scss`
* JS для переиспользования:
  * `js-service-works`
  * `js-projects-slider`
  * `js-home-work-tabs`

## Medium priority

### Группа 4: новости и статьи

* Файлы:
  * `news.html`
  * `news-detail.html`
  * `index.html`
  * `culture.html`
  * `our-services-detail-01.html`
  * `solution-cooling.html`
  * `solution-cooling-detail-01.html`
* Текущие блоки:
  * `news-list`
  * `news-card`
  * `related-news`
  * `news-slider`
  * `news-slider__card`
* Рекомендуемый общий блок:
  * `news-card-slider` + единая `news-card`
* Что отличается:
  * сетка или слайдер;
  * заголовок секции;
  * стрелки и пагинация;
  * размеры карточек;
  * featured/horizontal варианты.
* Что можно стандартизировать:
  * карточку новости;
  * мета-строку;
  * варианты карточки через модификаторы;
  * Swiper-навигацию.
* Потенциально объединить SCSS:
  * `styles/blocks/_news.scss`
  * `styles/blocks/_news-slider.scss`
  * `styles/blocks/_news-detail.scss`
* JS для переиспользования:
  * `js-news-slider`
  * `js-related-news`

### Группа 5: логотипы, клиенты и бренды

* Файлы:
  * `index.html`
  * `service.html`
  * `our-services-detail-02.html`
  * `service-detail-02.html`
  * `service-brand-01.html`
  * `service-brand-detail-01.html`
* Текущие блоки:
  * `home-brands`
  * `service-clients`
  * `customers-slider`
  * `spare-parts-brands`
* Рекомендуемый общий блок:
  * `logos-list`
* Что отличается:
  * логотипы-картинки или текстовые бренды;
  * статический список или Swiper;
  * кнопка "Развернуть еще";
  * контекст страницы.
* Что можно стандартизировать:
  * оболочку списка;
  * состояния раскрытия;
  * адаптивный слайдер;
  * отступы и размеры ячеек.
* Потенциально объединить SCSS:
  * часть `styles/blocks/_home.scss`
  * `styles/blocks/_service.scss`
  * часть `styles/blocks/_service-detail.scss`
* JS для переиспользования:
  * `js-home-brands`
  * `js-home-clients`
  * `js-customers-slider`
  * `js-spare-parts-brands`

### Группа 6: accordion / раскрывающиеся строки

* Файлы:
  * `about.html`
  * `contacts.html`
  * `index.html`
  * `our-services-detail-01.html`
  * `our-services-detail-02.html`
  * `production-detail.html`
  * `service-brand-detail-01.html`
* Текущие блоки:
  * `faq`
  * `detail-accordion`
  * `product-offers`
  * `service-product-groups`
  * `about-values`
  * `about-projects`
* Рекомендуемый общий блок:
  * `accordion-list`
* Что отличается:
  * уровень заголовка;
  * состав кнопки;
  * вложенные спецификации или списки;
  * single-open логика;
  * CTA внутри панели.
* Что можно стандартизировать:
  * JS-логику раскрытия;
  * `aria-expanded`;
  * состояния `is-open`;
  * расчет `max-height`;
  * базовые элементы кнопки и панели.
* Потенциально объединить SCSS:
  * `styles/blocks/_contacts.scss`
  * `styles/blocks/_service-detail.scss`
  * `styles/blocks/_production-detail.scss`
  * часть `styles/blocks/_about.scss`
* JS для переиспользования:
  * `js-faq`
  * `js-detail-accordion`
  * `js-product-offers`

### Группа 7: продукция в каталоге и на главной

* Файлы:
  * `index.html`
  * `production.html`
* Текущие блоки:
  * `home-products`
  * `product-catalog`
  * `product-catalog__card`
* Рекомендуемый общий блок:
  * `product-catalog` с модификатором `--slider`
* Что отличается:
  * обертка Swiper;
  * количество карточек;
  * сетка против слайдера;
  * заголовок секции.
* Что можно стандартизировать:
  * контейнер карточек;
  * пагинацию;
  * responsive-поведение;
  * единую инициализацию слайдера.
* Потенциально объединить SCSS:
  * `styles/blocks/_product-catalog.scss`
  * часть `styles/blocks/_home.scss`
* JS для переиспользования:
  * `js-home-products`
  * общий Swiper helper.

## Low priority

### Группа 8: галереи и модалки изображений

* Файлы:
  * `service-detail-01.html`
  * `service-detail-02.html`
  * `our-services-detail-02.html`
  * `project.html`
* Текущие блоки:
  * `service-gallery`
  * `gallery-lightbox`
  * `modal--image`
* Рекомендуемый общий блок:
  * `image-gallery` + `modal--image`
* Что отличается:
  * источник изображения;
  * Swiper-галерея против одиночной картинки;
  * отдельный самописный lightbox;
  * MicroModal используется только для `image-modal`.
* Что можно стандартизировать:
  * открытие изображения;
  * клавиатурную навигацию;
  * блокировку скролла;
  * закрытие по Escape/overlay.
* Потенциально объединить SCSS:
  * `styles/blocks/_modal.scss`
  * часть `styles/blocks/_service-detail.scss`
* JS для переиспользования:
  * обработчик `[data-micromodal-trigger="image-modal"]`;
  * логика `galleryLightbox`.

## Что опасно рефакторить без ручной проверки

* Боковые меню с inline-SVG: в `production.html`, `service.html`, `service-detail-*`, `our-services-detail-*`, `service-brand-*` много встроенных SVG и активных состояний.
* `product-offers`: внутри кнопки есть CTA с `data-micromodal-trigger`, JS специально игнорирует клики по этой кнопке.
* Галерея `service-gallery`: использует отдельный динамически созданный `gallery-lightbox`, а проектные изображения используют MicroModal.
* `news-card` и `news-slider__card`: визуально похожи, но размеры и responsive-поведение могут отличаться.
* Логотипы и бренды: часть списков картинками, часть текстовыми ссылками; объединять только через модификаторы.
* `faq` и `detail-accordion`: логика похожа, но разметка заголовков и стили отличаются.

## Проверенные файлы

* HTML:
  * `about.html`
  * `contacts.html`
  * `culture.html`
  * `equipment.html`
  * `index.html`
  * `news-detail.html`
  * `news.html`
  * `our-services-detail-01.html`
  * `our-services-detail-02.html`
  * `our-services.html`
  * `production-detail.html`
  * `production.html`
  * `project.html`
  * `projects.html`
  * `service-brand-01.html`
  * `service-brand-detail-01.html`
  * `service-detail-01.html`
  * `service-detail-02.html`
  * `service.html`
  * `solution-cooling-detail-01.html`
  * `solution-cooling.html`
  * `solutions.html`
* SCSS:
  * `styles/styles.scss`
  * `styles/_mixins.scss`
  * `styles/_globals.scss`
  * `styles/_utils.scss`
  * `styles/_media.scss`
  * `styles/_reset.scss`
  * `styles/_variables.scss`
  * `styles/_fonts.scss`
  * все partial в `styles/blocks/`
* JS:
  * `scripts/main.js`
  * подключенные библиотеки `jquery`, `jquery.mask`, `jquery-ui`, `micromodal`, `swiper`

## Итоговые приоритеты

* Высокий: `detail-layout`, карточки услуг/решений, карточки работ/проектов.
* Средний: новости, логотипы/бренды, аккордеоны, каталог продукции на главной.
* Низкий: галереи и модалки изображений.

