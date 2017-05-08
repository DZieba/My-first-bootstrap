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