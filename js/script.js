/*MUDANÇA DE COR DO NAVBAR
$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 200)
});*/
/*SCROLL*/
var $doc = $('html, body');
$('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
});
