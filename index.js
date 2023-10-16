const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');

app.use(routes);
app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.json());

app.set('views', './views');
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('login.ejs')
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});