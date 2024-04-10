const {Schema} = require ('mongoose')

const Worlds = new Schema (
    {
        name: {type: String, required: true},
        tags: [{type: String, required: false}],
        // Ideally could cap tags
        about: {type: String, required: false},
        banner: {type: String, required: false},
        gallery: [{type: String, requied: false}],
        owner: [{type: Schema.Types.ObjectId, ref: 'Users'}],
        editor: [{type: Schema.Types.ObjectId, ref: 'Users'}],
        public: {type: Boolean, required: true},
        notes: [
            {user_id: {type: Schema.Types.ObjectId, ref: 'Users'}},
            {tags: [{type: String, required: false}]},
            {note_title: {type: String, required: true}},
            {note_contents: [{type: String, required: true}]}
        ],
        works: [
            {type: {type: String, required: true}},
            {number: {type: Number, required: true}},
            {ref: {type: String, required: true}},
            {canon: {type: Boolean, required: true}},
            {banner: {type: String, required: false}},
            {status: {type: String, required: true}},
            {authors: [{type: Schema.Types.ObjectId, ref: 'Users'}]},
            {genres: [{type: String, required: false}]},
            {summary: {type: String, required: false}},
            {notes: [
                {user_id: {type: Schema.Types.ObjectId, ref: 'Users'}},
                {tags: [{type: String, required: false}]},
                {note_title: {type: String, required: true}},
                {note_contents: [{type: String, required: true}]}
            ]}
        ]
    }
)
module.exports = Worlds