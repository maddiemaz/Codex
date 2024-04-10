const express = require('express')
const db = require('./db')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3001

const userControl = require('./controllers/userControl')
const worldControl = require('./controllers/worldControl')
const charControl = require('./controllers/charControl')
// const specControl = require('./controllers/specControl')
// const workControl = require('./controllers/workControl')

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
app.post('/users', userControl.createUser)
app.patch('/users/:id', userControl.editUser)
app.delete('/users/:id', userControl.deleteUser)

// // Universal Search - Character
// app.get('/search/:search', charControl.universalSearch)

// Find All Routes - All
app.get('/worlds', worldControl.getAllWorlds)
app.get('/characters', charControl.getAllCharacters)
// app.get('/specs', specControl.getAllSpecs)
// app.get('/works', workControl.getAllWorks)
// Find by ID Routes - All
app.get('/worlds/:id', worldControl.getWorldbyId)
app.get('/characters/:id', charControl.getCharacterbyId)
// app.get('/specs/id/:id', specControl.getSpecbyId) // Not sure if the extra /id is needed here, or on the others
// app.get('/works/:id', workControl.getWorkbyId)

// Find by Name Routes - All (need a better search function) **


// Find Characters by World
app.get('characters/worlds/:world', charControl.getCharactersbyWorld) // don't love this formatting
// // Find Specs by Character
// app.get('specs/characters/:character', specControl.getSpecsbyCharacter)
// // Find Works by World
// app.get('works/worlds/:world', workControl.getWorksbyWorld)


//CRUD Routes - World
app.post('/worlds', worldControl.createWorld)
app.patch('/worlds/:id', worldControl.updateWorld)
app.delete('/worlds/:id', worldControl.deleteWorld)
//CRUD Routes - Character
app.post('/characters', charControl.createCharacter)
app.patch('/characters/:id', charControl.updateCharacter)
app.delete('/characters/:id', charControl.deleteCharacter)
// //CRUD Routes - Specs
// app.post('/specs', specControl.createSpec)
// app.patch('/specs/:id', specControl.updateSpec)
// app.delete('/specs/:id', specControl.deleteSpec)
// //CRUD Routes - Works
// app.post('/works', workControl.createWork)
// app.patch('/works/:id', workControl.updateWork)
// app.delete('/works/:id', workControl.deleteWork)





