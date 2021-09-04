document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById('load-page-container').remove();
        AOS.init({
            duration: 400,
            easing: 'ease-in-out',
        });
    }, 2000);
});