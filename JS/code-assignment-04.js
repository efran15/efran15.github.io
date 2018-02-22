let project1Array = [
  1,
  'https://www.arcgis.com/apps/MapTour/index.html?appid=ce38462206b14cd8afe4b39132726ea1',
  'Tour of my life in Baton Rouge',
  'An ArcGIS Online Web App showing the different homes and schools I have attended while living in Baton Rouge, Louisiana.',
  true,
  ['Baton Rouge', 'story map', 'arcgis online']
]

let projectObject = {
  id: 1,
  url: 'https://www.arcgis.com/apps/MapTour/index.html?appid=ce38462206b14cd8afe4b39132726ea1',
  title: 'Tour of my life in Baton Rouge',
  desc: 'An ArcGIS Online Web App showing the different homes and schools I have attended while living in Baton Rouge, Louisiana.',
  thumb: true,
  keywords: [
    'Baton Rouge', 'story map', 'arcgis online']
}

// logs the title from the project data array, because the title is in position 2
console.log(project1Array)

// two ways to log the title from the project data object
console.log(projectObject.title)
console.log(projectObject['title'])
