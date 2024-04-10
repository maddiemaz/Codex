const mongoose = require('mongoose')
const userSchema = require('./Users')
const worldSchema = require('./Worlds')
const characterSchema = require('./Characters')

const Users = mongoose.model('Users', userSchema)
const Worlds = mongoose.model('Worlds', worldSchema)
const Characters = mongoose.model('Characters', characterSchema)

module.exports = {
    Users,
    Worlds,
    Characters
}