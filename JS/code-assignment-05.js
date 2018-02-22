let projectarray = [ {
  id: 1,
  url: 'https://www.arcgis.com/apps/MapTour/index.html?appid=ce38462206b14cd8afe4b39132726ea1',
  title: 'Tour of my life in Baton Rouge',
  desc: 'An ArcGIS Online Web App showing the different homes and schools I have attended while living in Baton Rouge, Louisiana.',
  thumb: true,
  keywords: ['Baton Rouge','story map','arcgis online']
},
{
  id: 2,
  url: 'http://www.arcgis.com/apps/View/index.html?appid=eadfdfa8b2dd443898dfdc2379beb026',
  title: 'Map of Recent Earthquakes',
  desc: 'An ArcGIS Online Web App showing recent earthquakes around the world of 4.5 magnitude or greater.',
  thumb: true,
  keywords: ['Earthquakes', 'story map', 'arcgis online']
} ]

for (let i=0; i < projectarray.length; i++) {
  let x = i + 1
  console.log('book-assignment-0' + x + '.PNG' );
}
console.log(projectarray);
