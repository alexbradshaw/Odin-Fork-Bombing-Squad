const { User } = require('../../models');
const { generateToken, verifyToken } = require('../../utils/auth');

const authRoutes = {
  async login(req, res) {
      const user = await User.findOne({ // Finds user based on username or email
              $or: 
              [
                  { username: req.body.username }, 
                  { email: req.body.email }
              ] 
          }).select('-__v -items'); // Does not include items array

      if (!user) {
        return res.status(401).json({ message: "Invalid user" });
      }
  
      const passCorrect = await user.isCorrectPassword(req.body.password); // Compares password
  
      if (!passCorrect) {
        return res.status(401).json({ message: 'Incorrect password!' });
      }

      try {
        req.session.save(() => {
          req.session.userId = user._id; // Save user _id to session
          req.session.username = user.username; // Save username to session
          req.session.jwt = generateToken(user);
  
          res.json({ user, token: req.session.jwt }); // Return user
        })
      }
      catch (e) {
          console.error(e);
          res.status(400).json(e);
      }
    },

  async signup(req, res) {
    try {
      const user = await User.create(req.body); // Creates new user based on request body

      req.session.save(() => {
        req.session.userId = user._id; // Save user _id to session
        req.session.username = user.username; // Save username to session
        req.session.jwt = generateToken(user);

        res.json({ user, token: req.session.jwt }); // Return user
      })
    } 
    catch (e) {
      console.error(e);
      res.status(400).json(e);
    }
  },
  async logout(req, res) {

    if (!verifyToken(req)) {
        res.status(401).json({ message: "You are not signed in!"})
        return;
    } else {
        try {
          req.session.destroy((err) => {
            if (err) {
              throw err;
            }
            res.status(200).json({message: "Successfully errorged out."});
          });
        } catch (e) {
          console.error(e);
          res.status(400).json(e);
        }
    }
  },
  async authCheck(req, res) {
    const verified = verifyToken(req);
    let status;

    if (verified) {
      status = 200;
    } else {
      status = 401;
      req.session.destroy((err) => {
        if (err) {
          throw err;
        }
      });
    }

    res.status(status).json(verified);
  }
}

module.exports = authRoutes;