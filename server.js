const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/form.html'));
//  res.send('Hello from App Engine (by Anton)! "en etta"');
});

app.get('/submit', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/form.html'));
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  var name = req.body.name;
  var message = req.body.message;
  console.log({
    name,
    message
  });

);

  //res.send('Thanks for your message!');
  res.sendFile(path.join(__dirname, '/views/formConfirmation.html'));

});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
  console.log('DB environment: ' + dbenv);
});
