const {Characters, Worlds, Users} = require('../models')

// Reformat for owner, world, work, etc. if worldControl works
const getAllCharacters = async (req, res) => {
    try {
        // const characters = await Characters.find()
        const characters = await Characters.find().populate('world').populate('owner')
        res.json(characters)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getCharacterbyId = async (req, res) => {
    try {
        const {id} = req.params
        const character = await Characters.findById(id).populate('world').populate('owner')
        if (character) {
            return res.json(character)
        }
        return res.status(404).send('Character not found')
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getCharactersbyWorld = async (req, res) => {
    try {
        const {world} = req.params
        // Make sure "world: world" is valid within character schema
        const characters = await Characters.find({world: world}).populate('world').populate('owner')
        if (characters) {
            return res.json(characters)
        } else {
            res.status(404).send('No characters found')
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getCharactersbyUser = async (req, res) => {
    try {
        const {user} = req.params
        // Make sure "owner: owner" is valid within character schema
        const characters = await Characters.find({owner: owner}).populate('world').populate('owner')
        if (characters) {
            return res.json(characters)
        } else {
            res.status(404).send('No characters found')
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const createCharacter = async (req, res) => {
    try {
        const {owner} = req.body
        const character = new Characters (req.body)
        await character.save()
        const user = await Users.findByIdAndUpdate(owner, {$push: {characters_owned: character.id}})
        return res.status(201).json({character})
    } catch (e) {
        return res.status(500).json({e: e.message})
    }
}

const updateCharacter = async (req, res) => {
    try {
        let {id} = req.params
        let character = await Characters.findByIdAndUpdate(id, req.body, {new: true})
        if (character) {
            return res.status(200).json(venue)
        }
        throw new Error ("Character not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteCharacter = async (req, res) => {
    try {
        const {id} = req.params
        const deleted = await Characters.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Character deleted")
        }
        throw new Error("Character not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const characterSearch = async (req, res) => {
    try {
        const {search} = req.params
        const regex = new RegExp(search, 'i')

        const owner = await Users.find({$or: [{characters_owned: {$regex: regex}}]})
        const world = await Worlds.find({$or: [{characters: {$regex: regex}}]})
        const characters = await Characters.find({name: {$regex}}).populate('world').populate('owner')

        let searchOwner = []
        let searchWorld = []

        if (owner.length > 0) {
            searchLocation = await Characters.find({owner: owner[0]._id}).populate('world').populate('owner')
        }
        if (world.length > 0) {
            searchWorld = await Characters.find({world: world[0]._id}).populate('world').populate('owner')
        }
        let combinedArray = []

        if (characters.length > 0) {
            combinedArray = combinedArray.concat(characters)
        }

        if (searchOwner.length > 0) {
            combinedArray = combinedArray.concat(searchOwner)
        }
        if (searchWorld.length > 0) {
            combinedArray = combinedArray.concat(searchWorld)
        }
        res.json(combinedArray)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllCharacters,
    getCharacterbyId,
    getCharactersbyWorld,
    getCharactersbyUser,
    createCharacter,
    updateCharacter,
    deleteCharacter,
    characterSearch
}