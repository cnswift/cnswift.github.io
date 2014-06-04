$(function(){
$(window).scroll(function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var top_div = document.getElementById( "navbar-wrap" );
    if( t >= 30 && t < 70) {
        top_div.style.cssText = "opacity:0.5";
    } else if( t >= 70){
        top_div.style.cssText = "opacity: 0.2";
    }else{
        top_div.style.cssText = "opacity: 1";
}
});

var flag = 0;
var iniopacity = 1; 
$("#navbar-wrap").hover(function(){
        iniopacity = $("#navbar-wrap").css("opacity");
	if( $("#navbar-wrap").css("opacity") != 1 ){
        flag = 1;
        iniopacity = $("#navbar-wrap").css("opacity");
        }

        $("#navbar-wrap").css("opacity","1");
},
function(){
if( flag == 1 ){
     $("#navbar-wrap").css("opacity",iniopacity);
}
})
});
