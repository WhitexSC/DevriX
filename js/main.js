// $("this").click(function(){
//   alert('Click event triggered')
// });
// $(".hamburger").click(function(){
//   $(".content").addClass("pshhh")
// });
// var menu = $(".container-fluid hidden");
// var ham = $( "#hamburger" );



$( "#hamburger" ).on( "click", function() {
  if ($("#hamburger").hasClass("active_burger")) {
    $("#hamburger").removeClass("active_burger");
     $(".container-fluid.hidden").hide();
     // $(".middle_content").removeClass("pshhh");
  }
  else{
    $( "#hamburger").addClass("active_burger");
     $(".container-fluid.hidden").show();
     // $(".middle_content").addClass("pshhh");
  }
}); 
// $( "#hamburger" ).on( "click", function() {
//   $( "#hamburger" ).addClass("active_burger");
// });
