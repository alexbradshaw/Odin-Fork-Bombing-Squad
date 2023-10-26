const router = require('express').Router();

const { getUser } = require('../../controllers/api/userControllers');

const { signup, login } = require('../../controllers/api/authControllers');

const { 
    createItem, 
    getAllItems, 
    getItem, 
    updateItem, 
    deleteItem
} = require('../../controllers/api/itemControllers');

router.post('/signup', signup);
router.post('/login', login);

router.post('/item', createItem)
router.get('/items', getAllItems);
router.route('/item/:id')
.get(getItem)
.put(updateItem)
.delete(deleteItem);

router.get('/user', getUser)

module.exports = router;