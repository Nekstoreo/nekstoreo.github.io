// main.js

// Llamada a la API de Geonames para obtener la lista de ciudades
fetch('http://api.geonames.org/searchJSON?country=ES&maxRows=10&username=demo')
    .then(response => response.json())
    .then(data => {
        const selectElement = document.getElementById('ubicacion');
        data.geonames.forEach(city => {
            const option = document.createElement('option');
            option.value = city.name;
            option.textContent = city.name;
            selectElement.appendChild(option);
        });
    })
    .catch(error => console.log(error));
