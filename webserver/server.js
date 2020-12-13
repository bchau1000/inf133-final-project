const express = require('express')
var fetch = require('node-fetch');
const app = express()
const port = 3000

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

app.get('/all-pokemon', (req, res) => {
    requestData('https://pokeapi.co/api/v2/pokemon?limit=10000', res);
})

app.get('/pokemon/:id', (req, res) => {
    var id = req.params.id;
    console.log('https://pokeapi.co/api/v2/pokemon/' + id)
    requestData('https://pokeapi.co/api/v2/pokemon/' + id, res);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})