const {Schema} = require ('mongoose')

const Users = new Schema (
    {
        username: {type: String, required: true},
        email: {type: String, required: true}, 
        password: {type: String, required: true},
        full_name: {type: String, required: false},
        user_banner: {type: String, required: false},
        tags: [{type: String, required: false}],
        worlds_owned: [{type: Schema.Types.ObjectId, ref: 'Worlds'}],
        characters_owned: [{type: Schema.Types.ObjectId, ref: 'Characters'}],
    }
)
module.exports = Users