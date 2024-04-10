const {Schema} = require ('mongoose')

const World = new Schema (
    {
        name: {type: String, required: true},
        tags: [{type: String, required: false}],
        // Ideally could cap tags
        about: {type: String, required: false},
        banner: {type: String, required: false},
        gallery: [{type: String, requied: false}],
        owners: [{type: Schema.Types.ObjectId, ref: 'User'}],
        editors: [{type: Schema.Types.ObjectId, ref: 'User'}],
        public: {type: Boolean, required: true},
        notes: [
            {user_id: {type: Schema.Types.ObjectId, ref: 'User'}},
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
            {authors: [{type: Schema.Types.ObjectId, ref: 'User'}]},
            {genres: [{type: String, required: false}]},
            {summary: {type: String, required: false}},
            {notes: [
                {user_id: {type: Schema.Types.ObjectId, ref: 'User'}},
                {tags: [{type: String, required: false}]},
                {note_title: {type: String, required: true}},
                {note_contents: [{type: String, required: true}]}
            ]}
        ]
    }
)