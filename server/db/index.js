const mongoose = require('mongoose')
require('dotenv').config()

mongoose
    .connect(process.env.CODEX)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((e) => {
        console.error('MongoDB Connection Error', e.message)
    })
mongoose.set('debug', true)

const db = mongoose.connection
module.exports = db