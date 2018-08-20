$( "#hamburger" ).on( "click", function() {
  if ($("#hamburger").hasClass("active_burger")) {
    $("#hamburger").removeClass("active_burger");
     $(".container-fluid.hidden").hide();
     $("body").removeClass("menuOpened")
  }
  else{
    $( "#hamburger").addClass("active_burger");
     $(".container-fluid.hidden").show();
     $("body").addClass("menuOpened")
  }
}); 
