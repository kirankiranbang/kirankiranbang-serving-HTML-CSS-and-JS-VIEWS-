const express = require('express');
const path = require('path');
const app = express();

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const vcontactRoutes = require('./routes/vcontact.js');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use( adminRoutes);
app.use( shopRoutes);
app.use( vcontactRoutes);






app.get('/another-url/success', (req, res) => {
    console.log("thanks for submitting is (vcontact.html page)(DATA DISPLAY on VSCODE)  url http://localhost:4000/admin/vcontact  ");
    res.send('<span style="color: red;     ">Thanks for submitting</span> (on web page).');
  });



  app.get('/success', (req, res) => {

    console.log(" thanks for submitting is (shop.html page) (DATA DISPLAY on VSCODE) url http://localhost:4000/admin/shop");

    res.send('<div style="background-color: red; padding: 10px;">This is the /success (shop page!) Thanks for submitting (on web page).</div>');

  });








app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(4000, () => {
  console.log("Running on port 4000");
});
