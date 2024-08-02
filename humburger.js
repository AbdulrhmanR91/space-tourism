document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('.sections');
    
        if (hamburger && nav) {
            hamburger.addEventListener('click', function() {
                nav.classList.toggle('active');
                hamburger.classList.toggle('active');
            });
        }  
});