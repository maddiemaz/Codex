const {User} = require('../models')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).populate({path: 'worlds_owned', populate: 'location'}).populate({path: 'characters_owned', populate: {path: 'location'}})
        res.json(users)
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getUserbyId = async (req, res) => {
    try {
        const{id} = req.params
        const user = await User.findById(id).populate({path: 'worlds_owned', populate: 'location'}).populate({path: 'characters_owned', populate: {path: 'location'}})
        if (user) {
            return res.json(user)
        } else {
            return res.status(404).send('User not found')
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const getUserbyUsername = async (req, res) => {
    try {
        const{username} = req.params
        const user = await User.find({username: username}).populate({path: 'worlds_owned', populate: 'location'}).populate({path: 'characters_owned', populate: {path: 'location'}})
        if (user) {
            return res.json(user)
        } else {
            return res.status(404).send('Username not found')
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const createUser = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        return res.status(201).json({user})
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const editUser = async (req, res) => {
    try {
        const {id} = req.params
        const user = await User.findByIdAndUpdate(id, req.body, {new: true})
        if (user) {
            return res.status(200).json(user)
        } else {
            throw new Error ('User not found')
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params
        const deleted = await User.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('User deleted')
        } else {
            throw new Error ('User not found')
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllUsers,
    getUserbyId,
    getUserbyUsername,
    createUser,
    deleteUser,
    editUser
}