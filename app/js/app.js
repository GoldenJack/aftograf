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


//services carousel
$(document).ready(function() {
    $('.auto__review__carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
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
        log(left__click)
    })
    $('.right__click').click(function(){
        var right__click = $('.sertifics__carousel .slick-next.slick-arrow');
        right__click.click();
        log(right__click)
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