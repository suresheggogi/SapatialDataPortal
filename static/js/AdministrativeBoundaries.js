// const { version } = require("react");


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

// Eye icon Function Calling
function Showlayer(icon) {

    // Get the parent .child div
    const child = icon.closest(".child");

    // Get the layer name
    const layerName = child.querySelector("span").textContent.trim();

    // Toggle icon
    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");

    if (icon.classList.contains("fa-eye")) {
        stateBoundaryLayer = L.tileLayer.wms(
        "http://104.233.209.179:8080/geoserver/AdminBoundarys/wms",
        {
            layers: "AdminBoundarys:State_Boundary",
            format: "image/png",
            transparent: true
        }
    ).addTo(map);
     // Zoom to your layer
    map.fitBounds([
        [15.8, 77.2],   // Southwest (Min Lat, Min Lon)
        [19.9, 81.0]    // Northeast (Max Lat, Max Lon)
    ]);
        
    } else {
        if (stateBoundaryLayer) {
        map.removeLayer(stateBoundaryLayer);
        stateBoundaryLayer = null;
    }
       
    }
}


// MAP VIEW

var map = L.map('map').setView([17.85, 79.10], 7);

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