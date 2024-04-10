const {Schema} = require ('mongoose')

const User = new Schema (
    {
        username: {type: String, required: true},
        email: {type: String, required: true}, 
        password: {type: String, required: true},
        full_name: {type: String, required: false},
        user_banner: {type: String, required: false},
        tags: [{type: String, required: false}],
        // Ideally could cap tags

        worlds_owned: [{type: Schema.Types.ObjectId, ref: 'World'}],
        characters_owned: [{type: Schema.Types.ObjectId, ref: 'Character'}],
        // works_owned: [{type: Schema.Types.ObjectId, ref: 'World'}],

        // world_editor: [{type: Schema.Types.ObjectId, ref: 'World'}],

    }
)
module.exports = User