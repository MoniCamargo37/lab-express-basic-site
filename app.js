const express = require('express');
const app = express();
app.use(express.static('public'));// Require Express

// home Route:
app.get('/', (request, response, next) => {response.sendFile(__dirname + '/views/home.html')
});
// about Route:
app.get('/about', (request, response, next) =>{response.sendFile(__dirname + '/views/about.html')});
//work route:
app.get('/work', (request, response, next) => {response.sendFile(__dirname + '/views/work.html')});
//gallery route:
app.get('/gallery', (request, response, next) => {response.sendFile(__dirname + '/views/gallery.html')});

// Server Started
app.listen(3001, () => {console.log('My first app listening on port 3001 about a brazilian painter: http://localhost:3001')});
