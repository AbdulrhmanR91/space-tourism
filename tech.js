document.addEventListener('DOMContentLoaded', function() {
    let techData;
    let currentTechIndex = 0;

    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            techData = data.technology;
            setupSlider();
            updateTechInfo(currentTechIndex);
        })
        .catch(error => console.error('Error loading JSON:', error));

    function updateTechInfo(index) {
        const tech = techData[index];
        document.getElementById('TERMINOLOGY').textContent = "THE TERMINOLOGY...";
        document.getElementById('name').textContent = tech.name;
        document.getElementById('contain').textContent = tech.description;
        
        const techImage = document.getElementById('tech-image');
        techImage.src = tech.images.portrait;
        techImage.alt = tech.name;

        document.querySelectorAll('.dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function setupSlider() {
        const slider = document.querySelector('.tech-slider');
        slider.innerHTML = techData.map((_, index) => 
            `<span class="dot" data-index="${index}"></span>`
        ).join('');

        slider.addEventListener('click', function(event) {
            if (event.target.classList.contains('dot')) {
                currentTechIndex = parseInt(event.target.getAttribute('data-index'));
                updateTechInfo(currentTechIndex);
            }
        });
    }
});