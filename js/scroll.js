document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
    let ticking = false;

    function scrollHandler() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                // Add your scrolling logic here
                // For example, you can check the scroll position and update styles or content accordingly
                ticking = false;
            });
            ticking = true;
        }
    }

    container.addEventListener('scroll', scrollHandler);
});
