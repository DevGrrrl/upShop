const geolib = require('geolib');

module.exports = (lat_long, resultsArr) => {
  const latA = lat_long.split(',')[0];
  const longA = lat_long.split(',')[1];
  const latB = resultsArr[0];
  const longB = resultsArr[1];
  const distance = geolib.getDistance(
      { latitude: latA, longitude: longA },
      { latitude: latB, longitude: longB }
      )/1000+'km';
  return distance;
};
