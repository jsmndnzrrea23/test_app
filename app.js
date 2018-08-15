const express = require('express')
const app = express()
app.set('port', process.env.PORT || 2502)

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(app.get('port'), function() {
  console.log('listening to.. ', app.get('port'));
});
