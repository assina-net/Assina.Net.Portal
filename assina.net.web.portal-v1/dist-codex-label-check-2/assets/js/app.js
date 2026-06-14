(function(window, $) {
   'use strict';

   $(window).on('load',function(){
      // Collapsible Card
      $('a[data-action="collapse"]').on('click',function(e){
         e.preventDefault();
         $(this).closest('.form-options').children('.card-body').collapse('toggle');
         $(this).closest('.card').find('[data-action="collapse"] i').toggleClass('ft-minus ft-plus');

      });

      // Toggle fullscreen
      $('a[data-action="expand"]').on('click',function(e){
         e.preventDefault();
         $(this).closest('.form-options').find('[data-action="expand"] i').toggleClass('ft-maximize ft-minimize');
         $(this).closest('.main-panel').toggleClass('card-fullscreen');
         $(this).closest('.content-wrapper').toggleClass('card-fullscreen');
      });

      $('a[data-action="close"]').on('click',function(e){
         $(this).closest('.main-panel').removeClass('card-fullscreen');
         $(this).closest('.content-wrapper').removeClass('card-fullscreen');
      });

   });

})(window, jQuery);
