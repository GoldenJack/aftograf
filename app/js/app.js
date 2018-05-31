var log = function(i){
    console.log(i)
}

//tabs services
$(document).ready(function() {
    $('.services__menu__link').click(function(e){
        e.preventDefault();

        var self = $(this);
        var activeBlock = self.data('active');
        
        $(activeBlock).fadeIn(500).siblings('div.service').fadeOut(500);
        self.addClass('service__menu__active').siblings().removeClass('service__menu__active');
    })
});

//scrolls - menu, btns, address
$(document).ready(function() {
    var nav = $('.header__menu');

    nav.on('click', 'a.header__menu__link', function(e){
        e.preventDefault();
        var anchor = $(this).attr('href');
        var anchorBlock = $(anchor).offset().top;
        $('html,body').animate({scrollTop: anchorBlock}, 1000);
        history.pushState({}, '', anchor);
    })

    $('.header__address').click(function(){
        $('html,body').animate({scrollTop: $('#map').offset().top}, 1500);
    })

    $('.header__content__btns').on('click', 'a', function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop: $($(this).attr('href')).offset().top}, 1500);
    })
});

//up
$(document).ready(function() {
    var up = $('.up');


    $(document).scroll(function(){
        var header = $('#header').height();

        if($(document).scrollTop() > header) {
            up.fadeIn(500);
        }else{
            up.fadeOut(500);
        }
    });

    up.click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop: 0}, 1500);
    })
});

//mobile menu

$(document).ready(function() {
    var mobile_menu = $('.menu__mob__right');
    var btn         = $('.menu__btn');
    var close_m  = mobile_menu.find('.close');

    var closeMenu   = function(el, selector) {
        el.animate({
            right: '-100%'
        }, 500).addClass(selector)

    }

    btn.click(function(e){
        if(mobile_menu.hasClass('non-active')){
            mobile_menu.show(10);
            mobile_menu.animate({
                right: 0
            }, 500)
            mobile_menu.removeClass('non-active');
        }
    })

    $(document).mouseup(function (e){
        if (!mobile_menu.is(e.target) && mobile_menu.has(e.target).length === 0) { 
            closeMenu(mobile_menu, 'non-active');
        }
    });

    close_m.click(function(){
        closeMenu(mobile_menu, 'non-active');
    });
});

//services carousel
$(document).ready(function() {
    $('.auto__review__carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    });
});

//sertificats carousel
$(document).ready(function() {
    $('.left__click').click(function(){
        var left__click = $('.sertifics__carousel .slick-prev.slick-arrow');
        left__click.click();
    })
    $('.right__click').click(function(){
        var right__click = $('.sertifics__carousel .slick-next.slick-arrow');
        right__click.click();
    })

    var left__click = $('.left__click');
    var right__click = $('.right__click');

    left__click.hover(function() {
        $(this).find('path').attr('stroke', '#0082F3');
    }, function() {
        $(this).find('path').attr('stroke', '#BDBDBD');
    });
    right__click.hover(function() {
        $(this).find('path').attr('stroke', '#0082F3');
    }, function() {
        $(this).find('path').attr('stroke', '#BDBDBD');
    });


    $('.sertifics__carousel').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    });
});

//modals
$(document).ready(function() {
    //succes
    $('#success').iziModal({
        width: 410,
        padding: 30
    });
    //error
    $('#error').iziModal({
        width: 410,
        padding: 30
    });

    //callback header msg
    $('#callback__header__msg').iziModal({
        width: 410,
        padding: 30
    });
    $('.header__msg__btn').click(function(e){
        e.preventDefault();
        $('#callback__header__msg').iziModal('open');
    });

    //callback header phone

    $('#callback__header__phone').iziModal({
        width: 410,
        padding: 30
    });
    $('.header__cb__btn').click(function(e){
        e.preventDefault();
        $('#callback__header__phone').iziModal('open');
    });

    //service
    $('#service__book').iziModal({
        width: 410,
        padding: 30
    });
    $('.dig__btn').click(function(e){
        e.preventDefault();
        $('#service__book').iziModal('open');
    });


});

// ajax form
// $(document).ready(function() {

//     var ajaxForm = function(self){
//         var action = self[0].action;
//         var data = self.serializeArray();

//         $.ajax({
//             url: action,
//             type: 'POST',
//             data: data,
//             success: function(){
//                 $('#success').iziModal('open');
//             },
//             error: function(){
//                 $('#error').iziModal('open');
//             }
//         })        
//     }

//     $('form').submit(function(e){
//         e.preventDefault();
//         ajaxForm($(this));
//     })
// });