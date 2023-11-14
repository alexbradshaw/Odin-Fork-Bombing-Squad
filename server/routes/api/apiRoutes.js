const router = require('express').Router();

const { signup, login, logout } = require('../../controllers/api/authControllers');
const { 
    createItem, 
    getAllItems, 
    getItem, 
    updateItem, 
    deleteItem
} = require('../../controllers/api/itemControllers');
const { health } = require('../../controllers/api/serverController')
const { getUser } = require('../../controllers/api/userControllers');

//! * Means that it's an auth protected route 

router.post('/signup', signup); // Signup POST route
router.post('/login', login); // Login POST route
router.post('/logout', logout); // Logout POST route
router.get('/user', getUser) // GET* route to get the logged in user

router.post('/item', createItem) // POST* route to create a new item
router.get('/items', getAllItems); // GET route that returns all items in the database
router.route('/item/:id').get(getItem).put(updateItem).delete(deleteItem); // route for GET, PUT*, and DELETE*, route has a req.params.id var

router.get('/health', health); // GET route for server status (deployment website can check to see if it's still working)

module.exports = router;