let emilysmap = L.map('MAP').setView([52.582096,	-1.470629], 6)

let emilysmap1 = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png').addTo(emilysmap)

let emilysmap2 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}')

let emilysmap3 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}')

let emilysBasemaps = {
  'Open street map': emilysmap1,
  'NatGeo World Map': emilysmap2,
  'World Street Map': emilysmap3,
}

function createicon (feature, latlng) {
  let emilyIcon = L.icon({
    iconUrl: 'icon.jpg',
    iconSize:     [60, 60],
    iconAnchor:   [12, 12],
    popupAnchor:  [0, 0]
  })
  return L.marker(latlng, { icon: emilyIcon })
}


let myIconOptions = {
  pointToLayer: createicon
}


emilysgeoJSONstyle = function (attraction) {
  let Name = attraction.properties.Name

  }

function createPopup (attraction, attractionlayer) {
  let Name = attraction.properties.Name
  let filename = attraction.properties.Image
  let image = '<img class="popupimage" src="Image/'+ filename +'" alt="popupimage">'
  attractionlayer.bindPopup( Name + '<br>' + image)
}

emilysgeoJSONoptions = {
  style: emilysgeoJSONstyle,
  onEachFeature: createPopup,
  pointToLayer: createicon
}
L.geoJSON(UKdata, emilysgeoJSONoptions).addTo(emilysmap)

L.control.layers(emilysBasemaps).addTo(emilysmap)
