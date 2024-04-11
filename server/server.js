const express = require('express')
const db = require('./db')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001

const userControl = require('./controllers/userControl')
const worldControl = require('./controllers/worldControl')
const charControl = require('./controllers/charControl')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(logger('dev'))
app.use(bodyParser.json())

// Connection Check
app.listen(PORT, () => {
    console.log(`Express server listening @ ${PORT}`)
})
app.get('/', (req, res) => {
    res.send("Welcome to your story")
})

// User Routes - All
app.get('/users', userControl.getAllUsers)
app.get('/users/id/:id', userControl.getUserbyId)
app.get('/users/username/:username', userControl.getUserbyUsername)
app.get('/users/email/:email', userControl.getUserbyEmail)
app.post('/users', userControl.createUser)
app.patch('/users/:id', userControl.editUser)
app.delete('/users/:id', userControl.deleteUser)

// // Universal Search - Character
// app.get('/search/:search', charControl.universalSearch)

// Find All Routes - All
app.get('/worlds', worldControl.getAllWorlds)
app.get('/characters', charControl.getAllCharacters)

// Find by ID Routes - All
app.get('/worlds/:id', worldControl.getWorldbyId)
app.get('/characters/:id', charControl.getCharacterbyId)

// Find by Name Routes - All (need to learn more about to get a better function) **
app.get('/search/:search', charControl.universalSearch)

// Find Characters by World
app.get('characters/worlds/:world', charControl.getCharactersbyWorld) // error with this one


//CRUD Routes - World
app.post('/worlds', worldControl.createWorld)
app.patch('/worlds/:id', worldControl.updateWorld)
app.delete('/worlds/:id', worldControl.deleteWorld)
//CRUD Routes - Character
app.post('/characters', charControl.createCharacter)
app.patch('/characters/:id', charControl.updateCharacter)
app.delete('/characters/:id', charControl.deleteCharacter)





