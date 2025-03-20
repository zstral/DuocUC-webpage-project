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

$(document).ready(function() {
    $('#signupForm').submit(function(event) {
        event.preventDefault();

        var isValid = true;

        $('.form-control').removeClass('is-invalid');

        var name = $('#name').val().trim();
        if (name === '') {
            $('#name').addClass('is-invalid');
            isValid = false;
        }

        var lastName = $('#lastname').val().trim();
        if (lastName === '') {
            $('#lastname').addClass('is-invalid');
            isValid = false;
        }

        var birthDate = $('#date').val();
        if (birthDate) {
            var today = new Date();
            var birth = new Date(birthDate);
            var age = today.getFullYear() - birth.getFullYear();
            var monthDiff = today.getMonth() - birth.getMonth();
            
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
                age--;
            }

            if (age < 13) {
                $('#date').addClass('is-invalid');
                isValid = false;
            }
        } else {
            $('#date').addClass('is-invalid');
            isValid = false;
        }

        var username = $('#username').val().trim();
        if (username.length < 3) {
            $('#username').addClass('is-invalid');
            isValid = false;
        }

        var email = $('#email').val().trim();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            $('#email').addClass('is-invalid');
            isValid = false;
        }

        var password = $('#password').val();
        var passwordRegex = /^(?=.*[0-9])(?=.*[A-Z]).{6,18}$/;
        if (!passwordRegex.test(password)) {
            $('#password').addClass('is-invalid');
            isValid = false;
        }

    });
});