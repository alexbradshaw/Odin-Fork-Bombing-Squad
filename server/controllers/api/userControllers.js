const { User } = require('../../models');

const userRoutes = {
  async getUser(req, res) {
    try {
        if (!req.session.userId) {
          res.status(404).json( { message: "You are not signed in!" });
          return;
        }
        const user = await User.findOne({ _id: req.session.userId }).select('-password -__v').populate('items', '-__v');

        console.log(user);

        res.json(user);
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
  },
}

module.exports = userRoutes;