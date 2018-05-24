$(window).scroll(function(evt){
  if ($(window).scrollTop()>0)
    $(".navbar").removeClass("navbar-top");
  else
      $(".navbar").addClass("navbar-top");
});

var s = skrollr.init();

if($(window)<768){
   
  var s = skrollr.init({
    mobileCheck: function() {
      return false;
    }
  });
}
