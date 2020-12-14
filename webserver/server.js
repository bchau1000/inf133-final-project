const express = require('express')
var fetch = require('node-fetch');
var cors = require('cors');
const app = express()

const port = 3000

app.use(cors('http://localhost:4200'));

function requestData(url, res) {
    fetch(url, { method: 'GET' }).then(response => {
        if (response.ok) {
            return response.json();
        } else {
            if (response.status == 401) {
                refresh().then(() => {
                    return fetch(url, { method: 'GET' }).then(response => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            console.log(response);
                            res.status(response.status).end();
                        }
                    });
                });
            } else {
                console.log(response);
                res.status(response.status).end();
            }
            return null;
        }
    }).then(json => {
        res.json(json);
    }).catch(err => {
        console.error(err);
    });
}

app.get('/pokemon/:limit/:offset', (req, res) => {
    var offset = req.params.offset;
    var limit = req.params.limit;
    console.log('https://pokeapi.co/api/v2/pokemon?limit=' + limit + '&offset=' + offset)
    requestData('https://pokeapi.co/api/v2/pokemon?limit=' + limit + '&offset=' + offset, res);
})

app.get('/pokemon/:id', (req, res) => {
    var id = req.params.id;
    requestData('https://pokeapi.co/api/v2/pokemon/' + id, res);
})

app.get('/type/:id', (req, res) => {
    var id = req.params.id;
    requestData('https://pokeapi.co/api/v2/type/' + id, res);
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})