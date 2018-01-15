const queries = require('./queries');
const fetch = require('isomorphic-fetch');

exports.get = (req, res) => {

  const placeObj = {
    name: req.query.name,
    address: req.query.address,
    postcode: req.query.postcode,
    lat_long: '',
  };

  const pc = encodeURI(req.query.postcode);

fetch(`http://api.postcodes.io/postcodes/${pc}`)
    .then(response => response.json()
        )
          .then(data =>
        placeObj.lat_long = [data.result.latitude, data.result.longitude]
        )






  queries.checkPlace(placeObj)
    .then((x) => {
      if (x[0].case == 0) {
        res.render('addMoreDetails', {
          placeObj, layout: 'navHome',
        });
      } else {
        res.render('businessExists', {
          layout: 'navHome',
        });
      }
    })
    .catch(() => {
      res.render('error', {
        layout: 'error',
      });
    });
};
