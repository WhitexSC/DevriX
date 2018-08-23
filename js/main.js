// DROPDOWN MENU
$( "#hamburger" ).on( "click", function() {
   $('#hidden_height').height($('#content').height());
  if ($("#hamburger").hasClass("active_burger")) {
    $("#hamburger").removeClass("active_burger");
     $("#hidden").hide();
     $("body").removeClass("menuOpened")
  }
  else{
    $( "#hamburger").addClass("active_burger");
     $("#hidden").show();
     $("body").addClass("menuOpened")
  }
}); 

// NAVIGATION
var side_actmenu = $('.sidenav__item.active');
var side_menu = $('.sidenav__item');

$(side_menu).click(function(){
  if(!$(this).hasClass('active')){
    $(side_actmenu).removeClass('active');
    $(this).addClass('active');
    side_actmenu = $(this);
  };
});

// STICKY HEADER
var stickyOffset = $('header').offset().top;

$('.fixed').width($('header').width()); 
$(window).scroll(function(){
  var sticky = $('header'),
      scroll = $(window).scrollTop();
  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});