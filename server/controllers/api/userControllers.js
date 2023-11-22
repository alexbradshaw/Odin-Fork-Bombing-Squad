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

        console.log(user);

        res.json(user);
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
  },
}

module.exports = userRoutes;