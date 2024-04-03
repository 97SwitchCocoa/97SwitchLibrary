$(".slider-component").each(function (index) {
    // all
    let loopMode = $(this).attr("loopMode") || false;
    let speed = $(this).attr("speed") || 700;
    let autoplay = $(this).attr("autoplayMode") || null;
    let effect = $(this).attr("effect") || "slide";

    // desktop
    let centeredSlides = $(this).attr("centeredSlides") || false;
    let slides = $(this).attr("slides") || "auto";

    // tablet
    let tabletSlides = $(this).attr("tabletSlides") || slides;
    let tabletCenteredSlides =
        $(this).attr("tabletCenteredSlides") || centeredSlides;

    // mobile landscape
    let landscapeSlides = $(this).attr("landscapeSlides") || slides;
    let landscapeCenteredSlides =
        $(this).attr("landscapeCenteredSlides") || tabletCenteredSlides;

    // mobile portrait
    let portraitSlides = $(this).attr("portraitSlides") || slides;
    let portraitCenteredSlides =
        $(this).attr("portraitCenteredSlides") || landscapeCenteredSlides;

    // initialize swipers
    const swiper = new Swiper($(this).find(".swiper")[0], {
        slidesPerView: portraitSlides,
        centeredSlides: portraitCenteredSlides,
        loop: loopMode,
        ...(autoplay && {
            autoplay: {
                delay: autoplay,
                disableOnInteraction: false,
            },
        }),
        effect: effect,
        speed: speed,
        spaceBetween: "3%",
        navigation: {
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
            disabledClass: "is-disabled",
        },
        pagination: {
            el: $(this).find(".swiper-bullet-wrapper")[0],
            bulletActiveClass: "is-active",
            bulletClass: "swiper-bullet",
            bulletElement: "button",
            clickable: true,
        },
        scrollbar: {
            el: $(this).find(".swiper-scrollbar")[0],
            draggable: true,
            dragClass: "swiper-drag",
            snapOnRelease: true,
        },
        breakpoints: {
            // Mobile Landscape
            478: {
                slidesPerView: landscapeSlides,
                centeredSlides: landscapeCenteredSlides,
            },
            // Tablet
            767: {
                slidesPerView: tabletSlides,
                centeredSlides: tabletCenteredSlides,
            },
            // Desktop
            991: {
                slidesPerView: slides,
                centeredSlides: centeredSlides,
            },
        },
    });
});
