$(function(){
      var mediaWidth =$(window).width();

      if(mediaWidth >= 980){
        
      }
     


      //gotop
      //$("#goToTop").fadeOut()
      $(window).scroll(function(){                 
        if($(this).scrollTop()>100){
          $("#goToTop").fadeIn();
           
        } 
        else { 
            $("#goToTop").fadeOut();
            
        }

      });
      $('#goToTop').click(function(){
        
          $('html,body').animate({scrollTop:$('.block1').offset().top}, 800);
          return false;
      });
          
 

});
