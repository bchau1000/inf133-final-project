const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Grab a single pokemon given their id, used for the individual pokemon page
app.get('/single-pokemon/:id', (req, res) => {
    let id = req.params.id;

    query = `SELECT * FROM pokemon WHERE id=${id}`;

    // Throw error and error status if the query fails
    // Send JSON data otherwise
    pokeDB.query(query, function(err, rows, fields) {
        console.log(`Sending to single-pokemon: ${id}`);
        if (err) {
            console.log(err);
            throw err;
        } else {
            res.send(rows);
            return rows;
        }
    })
})

// Use parameters to perform queries on pokemon table from database, providing name is optional
app.get('/pokemon/:limit/:offset/:name?', (req, res) => {
    let offset = req.params.offset;
    let limit = req.params.limit;

    let name = '';
    if (req.params.name)
        name = req.params.name;

    query = `SELECT * FROM pokemon WHERE name LIKE '%${name}%' LIMIT ${limit} OFFSET ${offset}`;

    // Throw error and error status if the query fails
    // Send JSON data otherwise
    pokeDB.query(query, function(err, rows, fields) {
        console.log(`Sending to pokemon: ${limit}, ${offset}, ${name}`);
        if (err) {
            console.log(err);
            throw err;
        } else {
            res.send(rows);
            return rows;
        }
    })
})

// Grab types for a pokemon given their id
app.get('/pokemon-types/:id', (req, res) => {
    let id = req.params.id;

    query = `SELECT pt.type_id, t.name
            FROM pokemon_and_types as pt JOIN pokemon_types as t
            WHERE pt.type_id = t.id AND pt.pokemon_id = ${id};`;

    // Throw error and error status if the query fails
    // Send JSON data otherwise
    pokeDB.query(query, function(err, rows, fields) {
        console.log(`Sending to pokemon-types: ${id}`)
        if (err) {
            console.log(err);
            throw err;
        } else {
            res.send(rows);
            return rows;
        }
    })
})

// Grab stats for a pokemon given their id
app.get('/pokemon-stats/:id', (req, res) => {
    let id = req.params.id;

    query = `SELECT ps.stat_id, s.name, ps.value
            FROM pokemon_and_stats as ps JOIN pokemon_stats as s
            WHERE ps.stat_id = s.id AND ps.pokemon_id = ${id};`;

    // Throw error and error status if the query fails
    // Send JSON data otherwise
    pokeDB.query(query, function(err, rows, fields) {
        console.log(`Sending to pokemon-stats: ${id}`)
        if (err) {
            console.log(err);
            throw err;
        } else {
            res.send(rows);
            return rows;
        }
    })
})

app.get('/pokemon-unlocked/:id', (req, res) => {
    let id = req.params.id;

    query = `SELECT pu.pokemon_id, pu.user_id, p.name
            FROM pokemon_and_users as pu JOIN pokemon as p
            WHERE p.id = pu.pokemon_id AND pu.user_id = ${id};`;

    // Throw error and error status if the query fails
    // Send JSON data otherwise
    pokeDB.query(query, function(err, rows, fields) {
        console.log(`Sending to pokemon-unlocked: ${id}`);

        if (err) {
            console.log(err);
            throw err;
        } else {
            res.send(rows);
            return rows;
        }
    })
})

// Grab row count for the amount of pokemon for pagination
    // Used to display the pokemon grid
app.get('/count/:name?', (req, res) => {
    let name = '';
    if (req.params.name)
        name = req.params.name;

    query = `SELECT COUNT(*) as 'count' FROM pokemon WHERE name LIKE '%${name}%';`;

    // Throw error and error status if the query fails
    // Send JSON data otherwise
    pokeDB.query(query, function(err, rows, fields) {
        if (err) {
            console.log(err);
            throw err;
        } else {
            res.send(rows);
            return rows;
        }
    })
})

app.get('/types/:name', (req, res) => {
    let name = req.params.name;
        
    query = `SELECT p.id, p.name
            FROM pokemon_types as t JOIN pokemon_and_types as pt JOIN pokemon as p
            WHERE p.id = pt.pokemon_id AND t.id = pt.type_id AND t.name='${name}';`;

    // Throw error and error status if the query fails
    // Send JSON data otherwise
    pokeDB.query(query, function(err, rows, fields) {
        console.log(`Sending to types: ${name}`)
        if (err) {
            console.log(err);
            throw err;
        } else {
            res.send(rows);
            return rows;
        }
    })
})

// Handles insertions for unlocking pokemon from the gacha machine
    // Saves a user's pokemon by storing their id and the pokemon's id
app.post('/insert/', (req, res) => {
    let user_id = req.body.user_id;
    let pokemon_id = req.body.pokemon_id;
        
    query = `INSERT INTO pokemon_and_users(pokemon_id, user_id) VALUES(${pokemon_id}, ${user_id});`;
    
    // Throw error and error status if the query fails
    // Send JSON data otherwise
    pokeDB.query(query, function(err, results, fields) {
        if (err) {
            console.log(err)
        } else {
            console.log(`Inserted into pokemon_and_users: ${pokemon_id}, ${user_id}`)
        }
    })
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})