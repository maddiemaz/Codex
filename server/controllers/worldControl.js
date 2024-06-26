const {Worlds, Users} = require('../models')

// Can probably add Works controllers within this one since rn Works is a subset of Worlds

const getAllWorlds = async (req, res) => {
    try {
        const worlds = await Worlds.find().populate('owner').populate(['works']).populate(['tags'])
        // Also may need to format for Array: works.title/name (since those are objects)
        // May also want works.length (for number) and array for editors
        res.json(worlds)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getWorldbyId = async (req, res) => {
    try {
        const{id} = req.params
        const world = await Worlds.findById(id).populate('owner').populate(['works']).populate(['tags'])
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
        const worlds = await Worlds.find({owner: user}).populate('owner').populate(['works']).populate(['tags'])
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
        const world = new Worlds (req.body)
        await world.save()
        const user = await Users.findByIdAndUpdate(owner, {$push: {worlds_owned: world.id}})
        return res.status(201).json({world})
    } catch (e) {
        return res.status(500).json({e: e.message})
    }
}

const updateWorld = async (req, res) => {
    try {
        let {id} = req.params
        let world = await Worlds.findByIdAndUpdate(id, req.body, {new: true})
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
        const deleted = await Worlds.findByIdAndDelete(id)
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
        const owner = await Users.find({$or: [{worlds_owned: {$regex: regex}}]}) // may need to edit format for array
        // can add additonal axios searches here (in ^ format)
        const worlds = await Worlds.find({name: {$regex}}).populate({path: 'owner'}).populate(['works']).populate(['tags'])

        let searchOwner = []

        if (owner.length > 0) {
            searchOwner = await Worlds.find({owner: owner[0]._id}).populate('owner').populate(['works']).populate(['tags'])
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