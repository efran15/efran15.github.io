let emilysmap = L.map('MAP').setView([38.61057,	-97.133041], 4)

let emilysmap1 = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png').addTo(emilysmap)

let emilysmap2 = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png')

let emilysmap3 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}')

let emilysBasemaps = {
  'Open street map': emilysmap1,
  'Open top map': emilysmap2,
  'World Physical': emilysmap3,
}

emilysgeoJSONstyle = function (states) {
  let age = states.properties.MED_AGE
  let statecolor = 'Blue'
  if ( age < 38 ) {statecolor = 'Green'}
  let emilysStyle = {
    color: statecolor,
    weight: 2,
    fillOpacity: 0.2,
    opacity: 0.3,
  }
  return emilysStyle
}

function createPopup (states, statelayer) {
  let population = states.properties.POPULATION
  let name = states.properties.STATE_NAME
  let age = states.properties.MED_AGE
  statelayer.bindPopup('Population of ' + name + ':' + population + '<br>Median age ' + ': ' + age + '<br>National average: 38')
}

emilysgeoJSONoptions = {
  style: emilysgeoJSONstyle,
  onEachFeature: createPopup
}
L.geoJSON(statedata, emilysgeoJSONoptions).addTo(emilysmap)

L.control.layers(emilysBasemaps).addTo(emilysmap)
