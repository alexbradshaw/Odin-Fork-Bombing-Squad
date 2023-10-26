const { User } = require('../../models');

const authRoutes = {
  async login(req, res) {
      const user = await User.findOne({ 
              $or: 
              [
                  { username: req.body.username }, 
                  { email: req.body.email }
              ] 
          }).select('-__v -items');
      
      console.log(user);

      if (!user) {
        return res.status(401).json({ message: "Invalid user" });
      }
  
      const passCorrect = await user.isCorrectPassword(req.body.password);
  
      if (!passCorrect) {
        return res.status(401).json({ message: 'Incorrect password!' });
      }

      req.session.save(() => {
        req.session.userId = user._id;
        req.session.username = user.username;

        res.json(user);
      })
    },

  async signup(req, res) {
    try {
      const user = await User.create(req.body);

      console.log(user);

      req.session.save(() => {
        req.session.userId = user._id;
        req.session.username = user.username;

        res.json(user);
      })
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  },
}

module.exports = authRoutes;