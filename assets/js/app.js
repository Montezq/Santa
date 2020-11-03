(function($) {
  $('.who__slider').slick({
    centerMode: true,
    slidesToShow: 3,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  });

  $('body').on('keyup', 'input.card-input', function(){
    var key = event.keyCode || event.charCode;
    var inputs = $('input.card-input');
    if(($(this).val().length === this.size) && key != 32) 
    {
      inputs.eq(inputs.index(this) + 1).focus();  
    } 
    if( key == 8 || key == 46 )
    {
      var indexNum = inputs.index(this);
      if(indexNum != 0)
      {
      inputs.eq(inputs.index(this) - 1).val('').focus();
      }
    }
  });
  $('body').on('keyup', 'input.exp-input', function(){
    var key = event.keyCode || event.charCode;
    var inputs = $('input.exp-input');
    if(($(this).val().length === this.size) && key != 32) 
    {
      inputs.eq(inputs.index(this) + 1).focus();  
    } 
    if( key == 8 || key == 46 )
    {
      var indexNum = inputs.index(this);
      if(indexNum != 0)
      {
      inputs.eq(inputs.index(this) - 1).val('').focus();
      }
    }
  });
  $('.purchase__form-card').on('click', function(){
    $('#card').focus();
  })
  $('.purchase__form-exp').on('click', function(){
    $('#expire-card').focus();
  })

  
  $(function(){
    new WOW().init(); 
  });
  $(".hero__order-btn, .who__bonus-oder a").on('click', function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".purchase__form-wrapp").offset().top
    }, 2000);
});

  // $('input[name=card-number]').keypress(function(){
  //   var rawNumbers = $(this).val().replace(/•/g,'');
  //   var cardLength = rawNumbers.length;
  //   if(cardLength !==0 && cardLength <=12 && cardLength % 4 == 0){
  //     $(this).val($(this).val()+'•');
  //   }
  //  });
  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        delay: 1000,
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
}
)(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XHJcbiAgJCgnLndob19fc2xpZGVyJykuc2xpY2soe1xyXG4gICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIC8vIHJlc3BvbnNpdmU6IFtcclxuICAgIC8vICAge1xyXG4gICAgLy8gICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgIC8vICAgICBzZXR0aW5nczoge1xyXG4gICAgLy8gICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgIC8vICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAvLyAgICAgICBjZW50ZXJQYWRkaW5nOiAnNDBweCcsXHJcbiAgICAvLyAgICAgICBzbGlkZXNUb1Nob3c6IDNcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyAgIHtcclxuICAgIC8vICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAvLyAgICAgc2V0dGluZ3M6IHtcclxuICAgIC8vICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAvLyAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgLy8gICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxyXG4gICAgLy8gICAgICAgc2xpZGVzVG9TaG93OiAxXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyBdXHJcbiAgfSk7XHJcblxyXG4gICQoJ2JvZHknKS5vbigna2V5dXAnLCAnaW5wdXQuY2FyZC1pbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIga2V5ID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC5jaGFyQ29kZTtcclxuICAgIHZhciBpbnB1dHMgPSAkKCdpbnB1dC5jYXJkLWlucHV0Jyk7XHJcbiAgICBpZigoJCh0aGlzKS52YWwoKS5sZW5ndGggPT09IHRoaXMuc2l6ZSkgJiYga2V5ICE9IDMyKSBcclxuICAgIHtcclxuICAgICAgaW5wdXRzLmVxKGlucHV0cy5pbmRleCh0aGlzKSArIDEpLmZvY3VzKCk7ICBcclxuICAgIH0gXHJcbiAgICBpZigga2V5ID09IDggfHwga2V5ID09IDQ2IClcclxuICAgIHtcclxuICAgICAgdmFyIGluZGV4TnVtID0gaW5wdXRzLmluZGV4KHRoaXMpO1xyXG4gICAgICBpZihpbmRleE51bSAhPSAwKVxyXG4gICAgICB7XHJcbiAgICAgIGlucHV0cy5lcShpbnB1dHMuaW5kZXgodGhpcykgLSAxKS52YWwoJycpLmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuICAkKCdib2R5Jykub24oJ2tleXVwJywgJ2lucHV0LmV4cC1pbnB1dCcsIGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIga2V5ID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC5jaGFyQ29kZTtcclxuICAgIHZhciBpbnB1dHMgPSAkKCdpbnB1dC5leHAtaW5wdXQnKTtcclxuICAgIGlmKCgkKHRoaXMpLnZhbCgpLmxlbmd0aCA9PT0gdGhpcy5zaXplKSAmJiBrZXkgIT0gMzIpIFxyXG4gICAge1xyXG4gICAgICBpbnB1dHMuZXEoaW5wdXRzLmluZGV4KHRoaXMpICsgMSkuZm9jdXMoKTsgIFxyXG4gICAgfSBcclxuICAgIGlmKCBrZXkgPT0gOCB8fCBrZXkgPT0gNDYgKVxyXG4gICAge1xyXG4gICAgICB2YXIgaW5kZXhOdW0gPSBpbnB1dHMuaW5kZXgodGhpcyk7XHJcbiAgICAgIGlmKGluZGV4TnVtICE9IDApXHJcbiAgICAgIHtcclxuICAgICAgaW5wdXRzLmVxKGlucHV0cy5pbmRleCh0aGlzKSAtIDEpLnZhbCgnJykuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoJy5wdXJjaGFzZV9fZm9ybS1jYXJkJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICQoJyNjYXJkJykuZm9jdXMoKTtcclxuICB9KVxyXG4gICQoJy5wdXJjaGFzZV9fZm9ybS1leHAnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnI2V4cGlyZS1jYXJkJykuZm9jdXMoKTtcclxuICB9KVxyXG5cclxuICBcclxuICAkKGZ1bmN0aW9uKCl7XHJcbiAgICBuZXcgV09XKCkuaW5pdCgpOyBcclxuICB9KTtcclxuICAkKFwiLmhlcm9fX29yZGVyLWJ0biwgLndob19fYm9udXMtb2RlciBhXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgJChbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSkuYW5pbWF0ZSh7XHJcbiAgICAgICAgc2Nyb2xsVG9wOiAkKFwiLnB1cmNoYXNlX19mb3JtLXdyYXBwXCIpLm9mZnNldCgpLnRvcFxyXG4gICAgfSwgMjAwMCk7XHJcbn0pO1xyXG5cclxuICAvLyAkKCdpbnB1dFtuYW1lPWNhcmQtbnVtYmVyXScpLmtleXByZXNzKGZ1bmN0aW9uKCl7XHJcbiAgLy8gICB2YXIgcmF3TnVtYmVycyA9ICQodGhpcykudmFsKCkucmVwbGFjZSgv4oCiL2csJycpO1xyXG4gIC8vICAgdmFyIGNhcmRMZW5ndGggPSByYXdOdW1iZXJzLmxlbmd0aDtcclxuICAvLyAgIGlmKGNhcmRMZW5ndGggIT09MCAmJiBjYXJkTGVuZ3RoIDw9MTIgJiYgY2FyZExlbmd0aCAlIDQgPT0gMCl7XHJcbiAgLy8gICAgICQodGhpcykudmFsKCQodGhpcykudmFsKCkrJ+KAoicpO1xyXG4gIC8vICAgfVxyXG4gIC8vICB9KTtcclxuICAkKCcuY291bnQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykucHJvcCgnQ291bnRlcicsMCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgQ291bnRlcjogJCh0aGlzKS50ZXh0KClcclxuICAgIH0sIHtcclxuICAgICAgICBkZWxheTogMTAwMCxcclxuICAgICAgICBkdXJhdGlvbjogNDAwMCxcclxuICAgICAgICBlYXNpbmc6ICdzd2luZycsXHJcbiAgICAgICAgc3RlcDogZnVuY3Rpb24gKG5vdykge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnRleHQoTWF0aC5jZWlsKG5vdykpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxufVxyXG4pKGpRdWVyeSk7Il19
