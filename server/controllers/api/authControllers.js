const { User } = require('../../models');

const authRoutes = {
  async login(req, res) {
      const user = await User.findOne({ // Finds user based on username or email
              $or: 
              [
                  { username: req.body.username }, 
                  { email: req.body.email }
              ] 
          }).select('-__v -items'); // Does not include items array
      
      console.log(user);

      if (!user) {
        return res.status(401).json({ message: "Invalid user" });
      }
  
      const passCorrect = await user.isCorrectPassword(req.body.password); // Compares password
  
      if (!passCorrect) {
        return res.status(401).json({ message: 'Incorrect password!' });
      }

      req.session.save(() => {
        req.session.userId = user._id; // Save user _id to session
        req.session.username = user.username; // Save username to session
 
        res.json(user); // Return user
      })
    },

  async signup(req, res) {
    try {
      const user = await User.create(req.body); // Creates new user based on request body

      console.log(user);

      req.session.save(() => {
        req.session.userId = user._id; // Save user _id to session
        req.session.username = user.username; // Save username to session

        res.json(user); // Return user
      })
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  },

  async logout(req, res) {
    try {
      req.session.destroy(() => {
        res.status(200).json({message: "Successfully logged out."});
      });
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
  },
}

module.exports = authRoutes;