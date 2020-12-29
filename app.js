const express = require('express')
const request = require('request')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()
const port = 5000
const path = require('path')

app.use(cors())
app.use(express.static(path.join(__dirname, 'build')))

dotenv.config()

var client_id = process.env['CLIENT_ID']
var client_secret = process.env['CLIENT_SECRET']
var access_token = null

var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
        grant_type: 'client_credentials'
    },
    json: true
};

requestToken();

//Refresh token every 5 mins
setInterval(function(){
    requestToken();
},300000)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.get('/access-token', (req, res) => {
    res.send(access_token)
})

function requestToken() {
    request.post(authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            // Set the access token to access the Spotify Web API
            access_token = body.access_token;
        }
    });
}

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))