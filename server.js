const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();
var https = require("https");

const contentfulOptions = {
  hostname: 'cdn.contentful.com',
  port: 443,
  path: '/spaces/ltpmdbz39y0x/environments/master/entries?access_token=qUzYwyLyWLOS9nYs_X6f9yYnk3noPnSiVTNqsEKRLYM&locale=sv-SE',
  method: 'GET'
}

const req = https.request(contentfulOptions, res => {
  //console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()

/////////////

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/contentfultest.html'));
//  res.send('Hello from App Engine (by Anton)! "en etta"');
});

/*
app.get('/submit', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/form.html'));
});*/

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  var input = req.body.input;
  console.log({
    input
  });

  res.send('Thanks for your message!');
  //res.sendFile(path.join(__dirname, '/views/formConfirmation.html'));

});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
