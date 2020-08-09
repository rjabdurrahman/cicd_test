const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Homepage') )
app.listen(process.env.PORT || 3001, () => console.log('App is Listening!'))