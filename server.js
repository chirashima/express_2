const express = require('express')
const PORT = 3001

const app = express()

const about_me = {
    'name': 'Chad',
    'age': 41,
    'car': 'Ford'
}

const movies = {
        'movies': [{'name': 'Forrest Gump', 'release date': 1994, 'durationInMinutes': 142},
        {'name': 'The Transformers: The Movie', 'release date': 1986, 'durationInMinutes': 85},
        {'name': 'Hero', 'release date': 2004, 'durationInMinutes': 99}
    ]
}

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send(`yer a wizard, harry!!!!`)
})

// more routes!

app.get(`/favorite_food`, (req, res) => {
    res.send(`my favorite food is pizza`)
})

app.get(`/favorite_movie`, (req, res) => {
    res.send(`my favorite movie is idk`)
})

app.get(`/contact`, (req, res) => {
    res.send(`my contact info is 555-5555`)
})

app.get(`/about_me`, (req, res) => {
    res.json(about_me)
})

app.get(`/movies`, (req, res) => {
    res.json(movies)
})

// working with params

app.get(`/message/:id`, (req, res) => {
    res.send({msg:`Message with an id of ${req.params.id} found`})
})

app.get(`/friends/:name`, (req, res) => {
    res.send(
        {
            msg: `My friend's name is ${req.params.name}`
        }
    )
})

// working with queries

app.get(`/find`, (req, res) => {
    res.send({
        msg: `${req.query.myName} is ${req.query.myAge} years old`
    })
})

app.post()

app.put()

app.delete()