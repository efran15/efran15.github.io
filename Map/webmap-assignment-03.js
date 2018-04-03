let emilysmap = L.map('MAP3').setView([48.858958, 2.349533], 12)

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png').addTo(emilysmap)

let myicon = L.icon({
  iconUrl: 'thumbtack.png',
  iconSize: [70, 95], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
})

let mymarker = L.marker([48.858273, 2.294498], {icon: myicon}).addTo(emilysmap);

let myPolyStyle = {
  color: 'green',
  fillColor: 'yellow'
}

let PolyCoords = [
  [48.870392,	2.276044],
  [48.872819,	2.292438],
  [48.864463,	2.286773]]

let myPolygon = L.polygon(PolyCoords, myPolyStyle).addTo(emilysmap)
