let projectData = []


projectData[0] = {
  id: 1,
  url: 'https://www.arcgis.com/apps/MapTour/index.html?appid=ce38462206b14cd8afe4b39132726ea1',
  title: 'Tour of my life in Baton Rouge',
  desc: 'An ArcGIS Online Web App showing the different homes and schools I have attended while living in Baton Rouge, Louisiana.',
  thumb: true,
  keywords: ['Baton Rouge','story map','arcgis online']
}

projectData[1] = {
  id: 2,
  url: 'http://www.arcgis.com/apps/View/index.html?appid=eadfdfa8b2dd443898dfdc2379beb026',
  title: 'Map of Recent Earthquakes',
  desc: 'An ArcGIS Online Web App showing recent earthquakes around the world of 4.5 magnitude or greater.',
  thumb: true,
  keywords: ['Earthquakes', 'story map', 'arcgis online']
}

projectData[2] = {
  id: 3,
  url: 'https://emilyfranklin12.maps.arcgis.com/apps/GeoForm/index.html?appid=e26fc2c75d004014b63171a1f01da9bc',
  title: 'Report Suspicious Persons',
  desc: 'An ArcGIS Online Web App form used for reporting suspicious people around LSU campus.' ,
  thumb: true,
  keywords: ['Suspects', 'web app', 'arcgis online']
}

projectData[3] = {
  id: 4,
  url: 'https://emilyfranklin12.maps.arcgis.com/apps/webappviewer/index.html?id=8a145ef855304f9a8211ce2835d86478',
  title: 'Schools and Churches in EBR Parish',
  desc: 'An ArcGIS Online Web App interactive map showing all of the schools and churches in East Baton Rouge Parish.',
  thumb: true,
  keywords: ['schools', 'churches', 'arcgis online']
}

projectData[4] = {
  id: 5,
  url: 'https://emilyfranklin12.maps.arcgis.com/apps/webappviewer/index.html?id=e523f2d205f04fe0b61f093a1c0f2b15',
  title: 'Population of US Cities from 1790 to 2000',
  desc: 'An ArcGIS Online Web App interactive map showing the population in various US Cities from 1790-2000 by 10 year intervals.',
  thumb: true,
  keywords: ['population', 'united states', 'arcgis online']
}

for (let i=0; i < projectData.length; i++) {
  createTitle(projectData[i].title)
  createThumbnail(projectData[i].thumb, projectData[i].id)
}

function createTitle (title) {
  console.log('title:' + title)
}
function createThumbnail (thumb, id) {
  if (thumb === true) {
    console.log('images/book-assignment-0' + id + '.PNG' )
  } else {
      console.log('images/no-image.PNG')
  }
}
