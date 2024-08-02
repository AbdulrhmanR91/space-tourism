// Create the main nav container
const nav = document.createElement('div');

// Create the icon container
const iconDiv = document.createElement('div');

// Create the img element
const iconImg = document.createElement('img');


// Create the shape div
const shape = document.createElement('div');

// Create the sections container
const sections = document.createElement('div');
// Create the unordered list
const ul = document.createElement('ul');
// Array of menu items
const menuItems = [
    {
        href: 'index.html',
        text: '00 Home'
    }, {
        href: 'destination.html',
        text: '01 Destination'
    }, {
        href: 'Crew.html',
        text: '02 Crew'
    }, {
        href: 'technology.html',
        text: '03 Technology'
    }
];

//Create a style element
const style = document.createElement('style');

// Define the CSS as a string
const css = `

`;

// Set the CSS text content




    


// ... (rest of the JavaScript code to append the nav to the body) Load the JSON
// data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const destinations = data.destinations;
        const contentPlanet = document.querySelector('.contentPlanet');
        const planetImg = document.querySelector('.planetImg');

        // Create click event listeners for each destination
        document
            .querySelectorAll('#l li')
            .forEach(li => {
                li.addEventListener('click', (event) => {
                    event.preventDefault();
                    const destinationName = event
                        .target
                        .textContent
                        .trim();
                    const destination = destinations.find(
                        d => d.name.toUpperCase() === destinationName
                    );

                    if (destination) {
                        updateContent(destination);
                    }
                });
            });

        function updateContent(destination) {
            // Update image
            planetImg.innerHTML = `
        <div class="${destination
                .name
                .toLowerCase()}" style="
          max-width: 480px;
          width: 100%;
          height: 480px;
          margin: 127px 29.5px 127px 29.5px;">

          <img src="${destination
                .images
                .webp}" alt="${destination
                .name}"style="
            width: 100%;
            height: 100%;
            object-fit: contain;
          ">
        </div>
      `;

            // Update text content
            contentPlanet.innerHTML = `
        <div class="content">
          <ul id="l">
            ${destinations
                .map(
                    d => `<li id="r"><a href="#">${d.name.toUpperCase()}</a></li>`
                )
                .join('')}
          </ul>
          <p id="pmoon">${destination
                .name
                .toUpperCase()}</p>
          <p id="cmoon">${destination
                .description}</p>
          <div class="space"></div>
          <div class="distance">
            <p id="avg">AVG. DISTANCE</p>
            <p id="value1">${destination
                .distance}</p>
          </div>
          <div class="time">
            <p id="time">EST. TRAVEL TIME</p>
            <p id="value2">${destination
                .travel}</p>
          </div>
        </div>
      `;

            // Reattach event listeners to the new elements
            document
                .querySelectorAll('#l li')
                .forEach(li => {
                    li.addEventListener('click', (event) => {
                        event.preventDefault();
                        const destinationName = event
                            .target
                            .textContent
                            .trim();
                        const newDestination = destinations.find(
                            d => d.name.toUpperCase() === destinationName
                        );

                        if (newDestination) {
                            updateContent(newDestination);
                        }
                    });
                });
        }

        // Initialize with the first destination (Moon)
        updateContent(destinations[0]);
    })
    .catch(error => console.error('Error loading JSON:', error));


