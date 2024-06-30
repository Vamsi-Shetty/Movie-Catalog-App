require('dotenv').config();
const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();

const port = 3001;
const filePath = './Database/dummy.json';

app.use(
    cors({
        origin: "*"
    })
);

app.use(express.json());

app.post('/api/v1/signup', async (req, res) => {
    const {email, password} = req.body;
    const newUser = {
        email: email,
        id: Date.now(),
        password: password
    };
    
    fs.readFile('./Database/users.json', 'utf-8',async (err, data) => {
        if(err) {
            return res.status(401).send("error while reading file");
        }
        else {
            let allusers =  await JSON.parse(data);
            allusers.push(newUser);
            fs.writeFile('./Database/users.json', JSON.stringify(allusers),'utf-8', (err) => {
                if(err) {
                    return res.json({"Error":err});
                }
            } )
            return res.status(200).send({"message": "Signup Successful"});
        }
    })
});

app.post('/api/v1/login', (req, res) => {
    const {email, password} = req.body;
    const userDetails = {
        email: email,
        password: password
    };
    let allusers = [];
    fs.readFile('./Database/users.json', 'utf-8',async (err, data) => {
        if(err) {
            return res.send("error while reading gile");
        }
        allusers = JSON.parse(data);
        let user = allusers.find(u => {
            return u.email === email
        });
        if (!user) {
            return res.status(400).send({"message":'Invalid credentials'});
        }
        else {
            return res.status(200).json({"message":"user found"});
        }
    })
});

app.get('/api/v1/movies', async (req, res) => {
    fs.readFile('./Database/movies.json', "utf-8",async (err, result) => {
        if(err) {
            return res.status(401).send("Error occured", err);
        }
        const movies = await JSON.parse(result);
        console.log((movies.length))
        return res.status(200).json(movies.length);
    });
  });

app.get('/api/v1/movies/search',async (req, res) => {
    const query = req.query.q;
    let movies = [];

    fs.readFile('./Database/movies.json', "utf-8",async (err, result) => {
        if(err) {
            return res.status(401).send("Error occured", err);
        }
        movies = await JSON.parse(result);
    });    
  
    if (query) {
        const results = movies.filter(movie => 
            movie.title.toLowerCase().includes(query.toLowerCase())
        );
        return res.status(200).json({"results" :results});
    }
    res.json({"movies" :movies});
})

app.listen(port, () => {
    console.log(`Listening on PORT 3000`);
})