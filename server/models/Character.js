const {Schema} = require ('mongoose')

const Character = new Schema (
    {
        name: {type: String, required: true},
    }
)