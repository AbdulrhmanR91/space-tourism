document.addEventListener('DOMContentLoaded', function() {
    let crewData;
    let currentCrewIndex = 0;

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            crewData = data.crew;
            setupSlider();
            updateCrewMember(currentCrewIndex);
        })
        .catch(error => console.error('Error loading JSON:', error));

    function updateCrewMember(index) {
        const crew = crewData[index];
        document.getElementById('nickname').textContent = crew.role.toUpperCase();
        document.getElementById('name').textContent = crew.name;
        document.getElementById('cv').textContent = crew.bio;
        
        const crewImage = document.getElementById('crew-image');
        crewImage.src = crew.images.webp;
        crewImage.alt = crew.name;

        document.querySelectorAll('.dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function setupSlider() {
        const slider = document.querySelector('.crew-slider');
        slider.addEventListener('click', function(event) {
            if (event.target.classList.contains('dot')) {
                currentCrewIndex = parseInt(event.target.getAttribute('data-index'));
                updateCrewMember(currentCrewIndex);
            }
        });
    }
});