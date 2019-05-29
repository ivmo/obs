$(document).ready(function(){
  jQuery(".promo__text").on('click', function(evt){
      var fixed_offset = 0;
      jQuery('html,body').stop().animate({ scrollTop: jQuery(this.hash).offset().top - fixed_offset }, 600);
      evt.preventDefault();
    });
});

jQuery(document).ready(function() {
  if ( jQuery(window).width() > 1024) {
    Revealator.effects_padding = '-220';
  }
});

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:100,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1024:{
            items:5,
            nav:false,
            loop:false
        }
    }
});
});



jQuery(document).ready(function() {
  jQuery('.counter-item__wrapper').each(function(i, list) {
    var input = jQuery(list).find('.counter-item__input'),
        input_val = parseInt(input.val()),
        btn_add = jQuery(list).find('.add'),
        btn_remove = jQuery(list).find('.remove');


    input.keyup(function()  {
        input_val = parseInt(input.val())
    });

    btn_add.click(function(e) {
        if (e.shiftKey) {
            input_val += 10
        } else {
            input_val += 50
        }
        input.val(input_val);
    });

    btn_remove.click(function(e) {
        if (input_val > 11 && e.shiftKey) {
            input_val -= 10
        } else if (input_val > 50) {
            input_val -= 50
        }
        input.val(input_val);
    });
    //
  });
});

jQuery(document).ready(function(){
      jQuery('.call-popup').on('click', function(event) {
        event.preventDefault();
        jQuery('#exampleModal').arcticmodal();
      });
  });

jQuery(function($){
   $(".phone_mask").mask("+7 (999) 999-9999");
});

var map;
function initialize() {
  var moscow = new google.maps.LatLng(44.038725,43.064297);
  var myOptions = {
  zoom: 16,
    scrollwheel: false,
  center: moscow,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById("google-map"), myOptions);
var point1 = new google.maps.LatLng(44.038725,43.064297);
var marker = new google.maps.Marker({
  position: point1, map: map, title: '��������'
});
}
jQuery(window).on('load', function(){
   initialize();
});
