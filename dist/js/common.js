$('.sliderTop').slick({
  infinite: true,
  slidesToShow: 1,
  dots: true,
  arrows : false,
});

$('.slider-offer').slick({
  infinite: true,
  slidesToShow: 3,
  dots: false,
  arrows : true,
  responsive: [
  {
    breakpoint: 1500,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 962,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }
  ]
});

/*select placeholder*/

$(document).ready(function(){
      var touch = $('#touch-nav');
        var menu = $('.nav');
     
        $(touch).on('click', function(e) {
            e.preventDefault();
            menu.slideToggle();
        });
        $(window).resize(function(){
            var wid = $(window).width();
            if(wid > 760 && menu.is(':hidden')) {
                menu.removeAttr('style');
            }
        });
    });

$.widget( 'app.selectmenu', $.ui.selectmenu, {
  _drawButton: function() {
    this._super();
    var selected = this.element
    .find( '[selected]' )
    .length,
        placeholder = this.options.placeholder;

    if (!selected && placeholder) {
      this.buttonItem.text(placeholder);
    }
  }
});

$(document).ready(function() {
    $(".input-select").selectmenu({
      placeholder: 'Страна тура'
    });
  });


/*mask phone*/

$(document).ready(function() {
    $("#tel").mask("+3 (999) 999-9999");
  });