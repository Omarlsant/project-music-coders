function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

console.log(document);

document.addEventListener('DOMContentLoaded', function() {
    const consentBanner = document.getElementById('cookie-consent-banner');
    const acceptButton = document.getElementById('accept-cookies');


    if (document.cookie.split(';').some((item) => item.trim().startsWith('consent='))) {
        consentBanner.style.display = 'none';
    }

    acceptButton.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'true');
        consentBanner.style.display = 'none';
    });
});