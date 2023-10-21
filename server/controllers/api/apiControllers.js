const { User } = require('../../models');

const authRoutes = {
  async login(req, res) {
      const user = await User.findOne({ 
              $or: 
              [
                  { username: req.body.username }, 
                  { email: req.body.email }
              ] 
          });
          console.log(user);
      if (!user) {
        return res.status(401).json({ message: "Invalid user" });
      }
  
      const passCorrect = await user.isCorrectPassword(req.body.password);
  
      if (!passCorrect) {
        return res.status(401).json({ message: 'Incorrect password!' });
      }

      res.json(user);
    },

  async signup(req, res) {
    try {
      const user = await User.create(req.body);
      console.log(user);
      res.json(user);
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  },
}

module.exports = authRoutes;