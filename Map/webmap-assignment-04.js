let emilysmap = L.map('MAP').setView([38.61057,	-97.133041], 4)

L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png').addTo(emilysmap)


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
