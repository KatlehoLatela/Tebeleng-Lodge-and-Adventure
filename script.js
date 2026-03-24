document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector('.clickable-logo');
    const modal = document.getElementById('logoModal');
    const modalImg = document.getElementById('modalLogo');
    const closeBtn = document.querySelector('.modal .close');

    if (logo && modal && modalImg && closeBtn) {
        logo.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        }

        closeBtn.onclick = function() {
            modal.style.display = "none";
        }

        modal.onclick = function(e) {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'Boomza2.jpeg',
        'Boomza1.jpeg',
        'Boomza3.jpeg',
    ];

    let index = 0;
    const body = document.body;

    function changeBackground() {
        body.style.backgroundImage = `url('${images[index]}')`;
        index = (index + 1) % images.length;
    }

    changeBackground(); // show first image immediately
    setInterval(changeBackground, 5000); // change every 5 seconds
});
