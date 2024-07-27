document.getElementById('services-button').addEventListener('click', function () {
    var menu = document.getElementById('services-menu');
    menu.classList.toggle('hidden');
});

document.getElementById('mobile-services-button').addEventListener('click', function () {
    var menu = document.getElementById('mobile-services-menu');
    menu.classList.toggle('hidden');
});

document.getElementById('mobile-menu-button').addEventListener('click', function () {
    var menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Close the dropdown menu if clicked outside
window.addEventListener('click', function (e) {
    var menu = document.getElementById('services-menu');
    var button = document.getElementById('services-button');
    if (!menu.contains(e.target) && !button.contains(e.target)) {
        menu.classList.add('hidden');
    }

    var mobileMenu = document.getElementById('mobile-services-menu');
    var mobileButton = document.getElementById('mobile-services-button');
    if (!mobileMenu.contains(e.target) && !mobileButton.contains(e.target)) {
        mobileMenu.classList.add('hidden');
    }

    var mainMobileMenu = document.getElementById('mobile-menu');
    var mainMobileButton = document.getElementById('mobile-menu-button');
    if (!mainMobileMenu.contains(e.target) && !mainMobileButton.contains(e.target)) {
        mainMobileMenu.classList.add('hidden');
    }
});