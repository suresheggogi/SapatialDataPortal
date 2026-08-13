

function toggleTree(id, element){

    let tree = document.getElementById(id);

    let arrow = element.querySelector(".arrow");

    if(tree.style.display=="block"){

        tree.style.display="none";

        arrow.classList.remove("fa-minus");
        arrow.classList.add("fa-plus");

    }
    else{

        tree.style.display="block";

        arrow.classList.remove("fa-plus");
        arrow.classList.add("fa-minus");

    }

}
// Eye icon botton functions
function Showlayer(icon) {

    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");

    if (icon.classList.contains("fa-eye")) {
        console.log("Layer On");
        
    } else {
        console.log("Layer Off");
    }
}


// MAP VIEW

var map = L.map('map').setView([17.3850, 78.4867], 12); // Hyderabad

// OSM Layer
var osmLayer = L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
    }
);

// Satellite Layer (Esri)
var satelliteLayer = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {
        attribution: 'Tiles &copy; Esri'
    }
);

var terrainLayer = L.tileLayer(
    'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    {
        maxZoom: 17,
        attribution: '&copy; OpenTopoMap, OpenStreetMap contributors'
    }
);

// Default Map
osmLayer.addTo(map);

// Show OSM
function showOSM() {
    if (map.hasLayer(satelliteLayer)) {
        map.removeLayer(satelliteLayer);
    }
    if (!map.hasLayer(osmLayer)) {
        osmLayer.addTo(map);
    }
}

// Show Satellite
function showSatellite() {
    if (map.hasLayer(osmLayer)) {
        map.removeLayer(osmLayer);
    }
    if (!map.hasLayer(satelliteLayer)) {
        satelliteLayer.addTo(map);
    }
}
function showTerrain() {
    map.eachLayer(function(layer) {
        map.removeLayer(layer);
    });

    terrainLayer.addTo(map);
}