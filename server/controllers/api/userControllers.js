const { User } = require('../../models');
const { verifyToken } = require('../../utils/auth');

const userRoutes = {
  async getUser(req, res) {
    try {
        if (!verifyToken(req)) {
          res.status(404).json( { message: "You are not signed in!" });
          return;
        }
        const user = await User.findOne({ _id: req.session.userId }).select('-password -__v').populate('items', '-__v'); // Finds the current user profile based on whoever is authenticated, returns items array as well

        res.json(user);
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
  },
  async addToCart(req, res) {
    try {
        if (!verifyToken(req)) {
            console.log("You are not signed in!");
            res.status(401).json({ message: "You are not signed in!"})
            return;
        }
    
        await User.findOneAndUpdate (
        { _id: req.session.userId }, // Pulls authenticated users id
        { $push: { cart: req.params.id} }, // Pushes item id to our User's cart array
        { runValidators: true, new: true } 
        ); 

        res.json(true); // Returns true
    } catch (e) {
        res.status(500).json(e)
    }
  },
  async getCart(req, res) {
    try {
        if (!verifyToken(req)) {
            console.log("You are not signed in!");
            res.status(401).json({ message: "You are not signed in!"})
            return;
        }
    
        const { cart } = await User.findOne({ _id: req.session.userId }).select('-password -__v').populate('cart', '-__v');

        res.json(cart); // Returns cart object
    } catch (e) {
        res.status(500).json(e)
    }
  },
  async purchase(req, res) {
    try {
        if (!verifyToken(req)) {
            console.log("You are not signed in!");
            res.status(401).json({ message: "You are not signed in!"})
            return;
        }
    
        await User.findOneAndUpdate (
          { _id: req.session.userId }, // Pulls authenticated users id
          { $set: { cart: [] } }, // deletes everything
          { runValidators: true, new: true } 
          ); 

        res.json(true); // return true
    } catch (e) {
        res.status(500).json(e)
    }
  },
}

module.exports = userRoutes;