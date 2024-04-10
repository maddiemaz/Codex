const mongoose = require('mongoose')
const userSchema = require('./User')
const worldSchema = require('./World')
const characterSchema = require('./Character')

const User = mongoose.model('User', userSchema)
const World = mongoose.model('World', worldSchema)
const Character = mongoose.model('Character', characterSchema)

module.exports = {
    User,
    World,
    Character
}