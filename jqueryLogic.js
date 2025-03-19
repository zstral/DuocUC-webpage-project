/* Comportamiento botón mostrar/ocultar contraseña */

$(document).ready(function() {
    $('.showPassword').click(function() {

        var $input = $('#password');
        var $eyeOpen = $(this).find('.eye-open')
        var $eyeClosed = $(this).find('.eye-closed')

        if ($input.attr('type') === 'password') {
            $input.attr('type', 'text');
            $eyeOpen.hide();
            $eyeClosed.show();
        } else {
            $input.attr('type', 'password');
            $eyeOpen.show();
            $eyeClosed.hide();
        }
    });
});