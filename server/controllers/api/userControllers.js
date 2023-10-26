const { User } = require('../../models');

const userRoutes = {
  async getUser(req, res) {
    try {
        const user = await User.findOne({ _id: req.session.userId }).select('-password').populate('items', '-__v').select('-__v');

        console.log(user);

        res.json(user);
    } catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
  },
}

module.exports = userRoutes;