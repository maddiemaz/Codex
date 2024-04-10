const {Schema} = require ('mongoose')

const Characters = new Schema (
    {
        owner: [{type: Schema.Types.ObjectId, ref: 'User'}],
        world: [{type: Schema.Types.ObjectId, ref: 'World'}],
        name: {type: String, required: true},
        aka: [{type: String, required: false}],
        designations: [{type: String, required: false}],
        colors: [{type: String, required: false}],
        tags: [{type: String, required: false}],
        // Ideally could cap tags
        priority: [{type: String, required: false}],
        priority_role: [{type: String, required: false}],
        works_featured: [{type: String, required: false}],
        banner: {type: String, required: false},
        gallery: [{type: String, required: false}],
        affiliations: [{type: String, required: false}],
        relevant_characters: [{type: String, required: false}],
        notes: [
            {user_id: {type: Schema.Types.ObjectId, ref: 'User'}},
            {tags: [{type: String, required: false}]},
            {note_title: {type: String, required: true}},
            {note_contents: [{type: String, required: true}]}
        ],
        works: [
            {ref: {type: String, required: true}},
            // Can probably reformat {world: [{type: Schema.Types.ObjectId, ref: 'World'}]} to fill these out, but hard code for now
            {number: {type: Number, required: true}},
            {status: {type: String, required: true}},
            {banner: {type: String, required: false}},
            {gallery: [{type: String, required: false}]},
            {priority: {type: String, required: false}},
            {priority_role: {type: String, required: false}},
            {bio: [{type: String, required: false}]},
            {designations: [{type: String, required: false}]},
            {abilities: [{type: String, required: false}]},
            {description: [{type: String, required: false}]},
            {traits: [{type: String, required: false}]},
            {arcs: [{type: String, required: false}]},
            {affiliated: [{type: String, required: false}]},
            {relationships: [
                {character_id: {type: Schema.Types.ObjectId, ref: 'Character'}},
                {relationship: {type: String, required: false}},
                {priortiy: {type: String, required: false}}
            ]},
            {notes: [
                {user_id: {type: Schema.Types.ObjectId, ref: 'User'}},
                {tags: [{type: String, required: false}]},
                {note_title: {type: String, required: true}},
                {note_contents: [{type: String, required: true}]}
            ]}
        ]
    }
)

module.exports = Characters