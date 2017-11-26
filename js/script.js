/**
 * Created by Świsti on 2017-05-04.
 */
$('.collapse').on('shown.bs.collapse', function (e) {
    $('.collapse').not(this).removeClass('in');
});

$('[data-toggle=collapse]').click(function (e) {
    $('[data-toggle=collapse]').parent('li').removeClass('active');
    $(this).parent('li').toggleClass('active');
});



window.sr = ScrollReveal();
sr.reveal('.sr-image', {
    duration: 600,
    delay: 200,
    scale:0.2
},100);
sr.reveal('.title-sr', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
});

   window.onload=function () {


    var map = new GMaps({
        div: '.map',
        lat: 50.1812853,
        lng: 18.9643546
    });

 map.addMarker({
    lat: 50.1812853,
    lng: 18.9643546,
    title: 'Podlesie',
    infoWindow: {
    content: '<p>Our headquarters</p>'
}
});};