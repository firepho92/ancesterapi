'use strict';
var path = require('path');

module.exports = function (router) {

  const options = {
    root: path.join(__dirname, '../../public'),
  }

  router.get('/', function (req, res) {

    res.sendFile('index.html', options, err => {
      console.log(global.__basedir);
      if(err)
        console.log(err);
      else{
        console.log('Sent file');
      }
    });
    //res.send('<p>Terms and conditions</p>');
      
  });

};
