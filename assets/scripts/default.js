function startPage() {
    function showPage() {
        document.getElementById('load-page-container').remove();
        AOS.init({
            duration: 400,
            easing: 'ease-in-out',
        });
    }

    if (window.location.hostname === 'localhost') {
        showPage();
        return;
    }

    setTimeout(function () {
        showPage();
    }, 2000);

}

document.addEventListener("DOMContentLoaded", function () {
    startPage();
});