// ================================
// TREE MENU
// ================================
function toggleTree(id, element) {

    let tree = document.getElementById(id);
    let arrow = element.querySelector(".arrow");

    if (tree.style.display == "block") {

        tree.style.display = "none";
        arrow.classList.remove("fa-minus");
        arrow.classList.add("fa-plus");

    } else {

        tree.style.display = "block";
        arrow.classList.remove("fa-plus");
        arrow.classList.add("fa-minus");

    }
}


// ================================
// MAP
// ================================
var map = L.map('map');

// ================================
// BASE MAPS
// ================================

// OpenStreetMap
var osmLayer = L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        maxZoom: 15,
        attribution: '&copy; OpenStreetMap contributors'
    }
);

// Satellite
var satelliteLayer = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    {   maxZoom: 15,
        attribution: 'Tiles &copy; Esri'
    }
);

// Terrain
var terrainLayer = L.tileLayer(
    'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    {
        maxZoom: 15,
        attribution: '&copy; OpenTopoMap'
    }
);

// Add default basemap
osmLayer.addTo(map);


// ================================
// STATE BOUNDARY WMS
// ================================
var stateBoundaryLayer = L.tileLayer.wms(
    "http://104.233.209.179:8080/geoserver/AdminBoundarys/wms",
    {
        layers: "AdminBoundarys:State_Boundary",
        format: "image/png",
        transparent: true
    }
);

// Add WMS by default
stateBoundaryLayer.addTo(map);

// Zoom to State Boundary
map.fitBounds([
    [15.8, 77.2],   // South-West
    [19.9, 81.0]    // North-East
]);


// ================================
// SHOW / HIDE STATE BOUNDARY
// ================================
function Showlayer(icon) {

    icon.classList.toggle("fa-eye");
    icon.classList.toggle("fa-eye-slash");

    if (icon.classList.contains("fa-eye")) {

        if (!map.hasLayer(stateBoundaryLayer)) {
            stateBoundaryLayer.addTo(map);
        }

    } else {

        if (map.hasLayer(stateBoundaryLayer)) {
            map.removeLayer(stateBoundaryLayer);
        }

    }
}


// ================================
// BASEMAP FUNCTIONS
// ================================

function showOSM() {

    if (map.hasLayer(satelliteLayer)) {
        map.removeLayer(satelliteLayer);
    }

    if (map.hasLayer(terrainLayer)) {
        map.removeLayer(terrainLayer);
    }

    if (!map.hasLayer(osmLayer)) {
        osmLayer.addTo(map);
    }

    // Keep boundary on top
    if (map.hasLayer(stateBoundaryLayer)) {
        stateBoundaryLayer.bringToFront();
    }
}


function showSatellite() {

    if (map.hasLayer(osmLayer)) {
        map.removeLayer(osmLayer);
    }

    if (map.hasLayer(terrainLayer)) {
        map.removeLayer(terrainLayer);
    }

    if (!map.hasLayer(satelliteLayer)) {
        satelliteLayer.addTo(map);
    }

    // Keep boundary on top
    if (map.hasLayer(stateBoundaryLayer)) {
        stateBoundaryLayer.bringToFront();
    }
}


function showTerrain() {

    if (map.hasLayer(osmLayer)) {
        map.removeLayer(osmLayer);
    }

    if (map.hasLayer(satelliteLayer)) {
        map.removeLayer(satelliteLayer);
    }

    if (!map.hasLayer(terrainLayer)) {
        terrainLayer.addTo(map);
    }

    // Keep boundary on top
    if (map.hasLayer(stateBoundaryLayer)) {
        stateBoundaryLayer.bringToFront();
    }
}