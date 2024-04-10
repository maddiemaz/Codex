const {World, User} = require('../models')

// Can probably add Works controllers within this one since rn Works is a subset of Worlds

const getAllWorlds = async (req, res) => {
    try {
        const worlds = await World.find().populate({path: 'owner', populate: 'location'}).populate({path: 'works', populate: 'location'}).populate({path: 'tags', populate: 'location'}) // Array format may be wrong (probably "location")
        // Also may need to format for Array: works.title/name (since those are objects)
        // May also want works.length (for number) and array for editors
        res.json(venues)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getWorldbyId = async (req, res) => {
    try {
        const{id} = req.params
        const world = await World.findById(id).populate({path: 'owner', populate: 'location'}).populate({path: 'works', populate: 'location'}).populate({path: 'tags', populate: 'location'})
        if (world) {
            return res.json(world)
        }
        return res.status(404).send('World not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getWorldsbyUser = async (req, res) => {
    try {
        const {user} = req.params
        // Make sure it shoudl be "owner: user" and not an array format, or "user: user"
        const worlds = await World.find({owner: user}).populate({path: 'owner', populate: 'location'}).populate({path: 'works', populate: 'location'}).populate({path: 'tags', populate: 'location'})
        if (worlds) {
            return res.json(worlds)
        } else {
            res.status(404).send('No worlds found')
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const createWorld = async (req, res) => {
    try {
        const {owner} = req.body
        const world = new World (req.body)
        await world.save()
        const user = await User.findByIdAndUpdate(owner, {$push: {worlds_owned: world.id}})
        return res.status(201).json({world})
    } catch (e) {
        return res.status(500).json({e: e.message})
    }
}

const updateWorld = async (req, res) => {
    try {
        let {id} = req.params
        let world = await World.findByIdAndUpdate(id, req.body, {new: true})
        if (world) {
            return res.status(200).json(world)
        }
        throw new Error ("World not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteWorld = async (req, res) => {
    try {
        const {id} = req.params
        const deleted = await World.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("World deleted")
        }
        throw new Error ("World not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}


const worldSearch = async (req, res) => {
    try {
        const {search} = req.params
        const regex = new RegExp(search, 'i')
        const owner = await User.find({$or: [{worlds_owned: {$regex: regex}}]}) // may need to edit format for array
        // can add additonal axios searches here (in ^ format)
        const worlds = await World.find({name: {$regex}}).populate({path: 'owner', populate: 'location'}).populate({path: 'works', populate: 'location'}).populate({path: 'tags', populate: 'location'})

        let searchOwner = []

        if (owner.length > 0) {
            searchOwner = await World.find({owner: owner[0]._id}).populate({path: 'owner', populate: 'location'}).populate({path: 'works', populate: 'location'}).populate({path: 'tags', populate: 'location'})
        }

        let combinedArray = []

        if (worlds.length > 0) {
            combinedArray = combinedArray.concat(worlds)
        }

        if (searchOwner.length > 0) {
            combinedArray = combinedArray.concat(searchOwner)
        }

        res.json(combinedArray )
    
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllWorlds,
    getWorldbyId,
    getWorldsbyUser,
    createWorld,
    updateWorld,
    deleteWorld,
    worldSearch
}