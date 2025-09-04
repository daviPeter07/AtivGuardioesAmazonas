document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map-container').setView([-4.2, -63], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const manausCoords = [-3.1190, -60.0217];
    L.marker(manausCoords).addTo(map)
        .bindPopup('<b>Manaus</b><br>O coração da Amazônia.')
        .openPopup();
});