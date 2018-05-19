var express = require('express');
var router = express.Router();
const rp = require('request-promise');
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

router.get('/scrape', function (req, res, next) {
  const urlLinks = [
    'https://www.carworkz.com/mumbai/regular-service?format=json&page=1',
    'https://www.carworkz.com/mumbai/regular-service?format=json&page=2',
    'https://www.carworkz.com/mumbai/regular-service?format=json&page=3',
    'https://www.carworkz.com/mumbai/regular-service?format=json&page=4',
    'https://www.carworkz.com/mumbai/regular-service?format=json&page=5',
    'https://www.carworkz.com/mumbai/regular-service?format=json&page=6',
    'https://www.carworkz.com/mumbai/regular-service?format=json&page=7',
    'https://www.carworkz.com/mumbai/regular-service?format=json&page=8',
    'https://www.carworkz.com/mumbai/regular-service?format=json&page=9',
    'https://www.carworkz.com/mumbai/regular-service?format=json&page=10',
    'https://www.carworkz.com/mumbai/regular-service?format=json&page=11',
    'https://www.carworkz.com/mumbai/regular-service?format=json&page=12',
    'https://www.carworkz.com/mumbai/regular-service?format=json&page=13',
    'https://www.carworkz.com/mumbai/regular-service?format=json&page=14',
    'https://www.carworkz.com/mumbai/regular-service?format=json&page=15',
    'https://www.carworkz.com/mumbai/regular-service?format=json&page=16',
    'https://www.carworkz.com/mumbai/regular-service?format=json&page=17',
    'https://www.carworkz.com/mumbai/regular-service?format=json&page=18',
    'https://www.carworkz.com/mumbai/regular-service?format=json&page=19',
    'https://www.carworkz.com/mumbai/regular-service?format=json&page=20',
    'https://www.carworkz.com/mumbai/regular-service?format=json&page=21',
    'https://www.carworkz.com/mumbai/regular-service?format=json&page=22',
    'https://www.carworkz.com/mumbai/regular-service?format=json&page=23',
    'https://www.carworkz.com/mumbai/regular-service?format=json&page=24',
    'https://www.carworkz.com/mumbai/regular-service?format=json&page=25',
    'https://www.carworkz.com/mumbai/regular-service?format=json&page=26',
  ];
  urlLinks.map((url, index) => {
    console.log(index);
    request(url, function (error, response, html) {
      if (error) {
        console.log(error);
      }
      if (html) {
        html = JSON.parse(html);
        if (html.listing) {
          var $ = cheerio.load(html.listing);
          var json = [];

          $('.head_title').each((index, element) => {
            element.children.map((value) => {
              let title = {};
              title['name'] = value.data;
              json.push(title);
              console.log(json);
            });
          });
        }
      }
      // response = JSON.parse(response.body);
      // // console.log(response.listing);
      // response = JSON.parse(response);
    })
  })

});

module.exports = router;