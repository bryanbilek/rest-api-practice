const router = require('express').Router();
const Users = require('./usersModel');

//GET all
router.get('/', async (req, res) => {
    try {
        const users = await Users.find();
        const foundUsers = await res.status(200)
    } catch (error) {
        
    }
})
//GET 1

//POST

//PUT

//DELETE

module.exports = router;