$(function () {
    const worksSlider = $('[data-slider="slick"]');
    //? FILTER 
    const filter = $("[data-filter]");

    filter.on("click", function (event, item) {
        event.preventDefault();

        const cat = $(this).data('filter');

        if (cat === 'all') {
            $("[data-cat]").removeClass('hide');
        } else {

            $("[data-cat]").each(function () {
                const workCat = $(this).data('cat');

                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }


            });
        }

    });

    // ?Modal

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");



    modalCall.on("click", function (event) {
        event.preventDefault();
        $("body").addClass('no-scroll');

        const $this = $(this);
        const modalId = $this.data('modal');

        $(modalId).addClass('show');
        setTimeout(() => {
            $(modalId).find(".modal__dialog").css({
                transform: "rotateX(0)"
            });
        }, 200);

        worksSlider.slick('setPosition');

        //console.log(modalId);
    });



    modalClose.on("click", function (event) {
        event.preventDefault();

        const $this = $(this);
        const modalParent = $this.parents('.modal');

        modalParent.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        });

        setTimeout(() => {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);



    });

    $('.modal').on("click", function () {

        $(this).find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        });
        setTimeout(() => {
            $(this).removeClass('show');


            $("body").removeClass('no-scroll');
        }, 200);

    });
    $('.modal__dialog').on("click", function (event) {
        event.stopPropagation();
    });


    //TODO---- SLIDER: https://kenwheeler.github.io/slick/

    worksSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
    });

    $(".slickPrev").on("click", function (event) {
        event.preventDefault();

        const currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');

        currentSlider.slick("slickPrev");


    });
    $(".slickNext").on("click", function (event) {
        event.preventDefault();

        const currentSlider = $(this).parents(".modal").find('[data-slider="slick"]');

        currentSlider.slick("slickNext");


    })


});