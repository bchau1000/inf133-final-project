const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000

const mysql = require('mysql');

// Change user and password to your user/password
const pokeDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'pokedb'
});

pokeDB.connect();
app.use(cors('http://localhost:4200'));

// Use parameters to perform queries in MySQL database, providing name is optional
app.get('/pokemon/:limit/:offset/:name?', (req, res) => {
    let offset = req.params.offset;
    let limit = 100
    let name = '';
    if(req.params.name)
        name = req.params.name;

    query = `SELECT * FROM pokemon WHERE name LIKE '%${name}%' LIMIT ${limit} OFFSET ${offset}`;

    // Throw error and error status if the query fails
    // Send JSON data otherwise
    pokeDB.query(query, function (err, rows, fields) {
        console.log(`Sending to pokemon: ${limit}, ${offset}, ${name}`);
        if (err){
            res.status(err).end();
            throw err;
        }
        else {
            res.send(rows);
            return rows;
        }
    })
})

// Grab types for a given pokemon
app.get('/pokemon-types/:id', (req, res) => {
    let id = req.params.id;

    query = `SELECT pt.type_id, t.name
            FROM pokemon_and_types as pt JOIN pokemon_types as t
            WHERE pt.type_id = t.id AND pt.pokemon_id = ${id};`;

    // Throw error and error status if the query fails
    // Send JSON data otherwise
    pokeDB.query(query, function (err, rows, fields) {
        console.log(`Sending to pokemon-types: ${id}`)
        if (err){
            res.status(err).end();
            throw err;
        }
        else {
            res.send(rows);
            return rows;
        }
    })
})

// Grab abilities for a given pokemon
app.get('/pokemon-abilities/:id', (req, res) => {
    let id = req.params.id;

    query = `SELECT pa.ability_id, a.name
            FROM pokemon_and_abilities as pa JOIN pokemon_abilities as a
            WHERE pa.ability_id = a.id AND pa.pokemon_id = ${id};`;

    // Throw error and error status if the query fails
    // Send JSON data otherwise
    pokeDB.query(query, function (err, rows, fields) {
        console.log(`Sending to pokemon-abilities: ${id}`)
        if (err){
            res.status(err).end();
            throw err;
        }
        else {
            res.send(rows);
            return rows;
        }
    })
})

// Grab stats for a given pokemon
app.get('/pokemon-stats/:id', (req, res) => {
    let id = req.params.id;

    query = `SELECT ps.stat_id, s.name, ps.value
            FROM pokemon_and_stats as ps JOIN pokemon_stats as s
            WHERE ps.stat_id = s.id AND ps.pokemon_id = ${id};`;

    // Throw error and error status if the query fails
    // Send JSON data otherwise
    pokeDB.query(query, function (err, rows, fields) {
        console.log(`Sending to pokemon-abilities: ${id}`)
        if (err){
            res.status(err).end();
            throw err;
        }
        else {
            res.send(rows);
            return rows;
        }
    })
})

// Grab row count for pagination
app.get('/count/:name?', (req, res) => {
    let name = '';
    if(req.params.name)
        name = req.params.name;

    query = `SELECT COUNT(*) as 'count' FROM pokemon WHERE name LIKE '%${name}%';`;

    // Throw error and error status if the query fails
    // Send JSON data otherwise
    pokeDB.query(query, function (err, rows, fields) {
        console.log('Sending: ' + query)
        if (err){
            res.status(err).end();
            throw err;
        }
        else {
            res.send(rows);
            return rows;
        }
    })
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})