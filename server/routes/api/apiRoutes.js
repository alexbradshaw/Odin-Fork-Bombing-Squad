const router = require('express').Router();

const { signup, login, logout, authCheck } = require('../../controllers/api/authControllers');
const { 
    createItem, 
    getAllItems, 
    getItem, 
    updateItem, 
    deleteItem
} = require('../../controllers/api/itemControllers');
const { health } = require('../../controllers/api/serverController')
const { getUser, getCart, addToCart, purchase } = require('../../controllers/api/userControllers');

//! * Means that it's an auth protected route 

router.post('/signup', signup); // Signup POST route
router.post('/login', login); // Login POST route
router.post('/logout', logout); // Logout POST route
router.get('/user', getUser) // GET* route to get the logged in user
router.post('/auth', authCheck) // POST route to verify an auth token

router.get('/user/cart', getCart) // GET* route to get current users cart
router.post('/user/cart/:id', addToCart) // POST* route to add to current users cart
router.put('/user/cart', purchase) // PUT* route to tell server we purchase

router.post('/item', createItem) // POST* route to create a new item
router.get('/items', getAllItems); // GET route that returns all items in the database
router.route('/item/:id').get(getItem).put(updateItem).delete(deleteItem); // route for GET, PUT*, and DELETE*, route has a req.params.id var

router.get('/health', health); // GET route for server status (deployment website can check to see if it's still working)

module.exports = router;