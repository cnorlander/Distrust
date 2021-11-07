const express = require('express')
const expressNunjucks = require('express-nunjucks');
const app = express()
const port = 3000
const isDev = app.get('env') === 'development';
const path = require('path')

app.use('/static', express.static('../webclient/static'))
app.set('views', __dirname + '/templates');

const njk = expressNunjucks(app, {
  watch: isDev,
  noCache: isDev
});

app.get('/', (req, res) => {
  res.render('index', {a: '100'});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})