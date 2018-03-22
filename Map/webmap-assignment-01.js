let emilysmap = L.map('MAP').setView([48.858958, 2.349533], 12)
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png').addTo(emilysmap)
let mymarker = L.marker([48.858273, 2.294498]).addTo(emilysmap)
let mypolygon = L.polygon([
  [48.870392,	2.276044],
  [48.872819,	2.292438],
  [48.864463,	2.286773]
]).addTo(emilysmap);

mypolygon.bindPopup('L\'Arc de Triomphe de l\'Etoile')
mymarker.bindPopup('Eiffel Tower')

emilysmap.on('click', function (event) {
  console.log('You clicked the map at ' + event.latlng)
})

var latlngs = [
    [48.858337,	2.294583],
    [48.863574,	2.286944],
    [48.869587,	2.285399]
];

var polyline = L.polyline(latlngs, {color: 'red'}).addTo(emilysmap)
