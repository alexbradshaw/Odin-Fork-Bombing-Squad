const { Item, User } = require('../../models');

const itemRoutes = {
  async createItem(req, res) {
    try {
        if (!req.session.userId) {
            res.status(401).json({ message: "You are not signed in!"})
            return;
        }

        const newItem = await Item.create(req.body);
      
        const updatedUser = await User.findOneAndUpdate (
          { _id: req.session.userId },
          { $push: { items: newItem._id} },
          { runValidators: true, new: true }
        )
  
        res.json(updatedUser);
    } catch (e) {
        console.log(e);
        res.status(500).json(e)
    }
    },
    async getAllItems(req, res) {
        try {
          const item = await Item.find({}).select('-__v');
          res.json(item);
        } catch (e) {
          console.log(e);
          res.status(500).json(e);
        }
    },
    async getItem(req, res) {
        try {
            const item = await Item.findOne({ _id: req.params.id });

            if (!item) {
                res.status(404).json( { message: "Item not found!" });
                return;
            }

            res.json(item);
        } catch (e) {
            console.log(e);
            res.status(500).json(e);
        }
    },
    async updateItem(req, res) {
        try {
            if (!req.session.userId) {
                res.status(401).json({ message: "You are not signed in!"})
                return;
            }

            const updatedItem = await Item.findOneAndUpdate(
                { 
                    _id: req.params.id, 
                    owner: req.session.username
                },
                { $set: req.body },
                { new: true }
            );

            res.json(updatedItem);
        } catch (e) {
            console.log(e);
            res.status(500).json(e);
        }
    },
    async deleteItem(req, res) {
        try {
            if (!req.session.userId) {
                res.status(401).json({ message: "You are not signed in!"})
                return;
            }

            await Item.findOneAndRemove(
                { 
                    _id: req.params.id, 
                    owner: req.session.username
                },
                { new: true }
            );

            const updatedUser = await User.findOneAndUpdate(
                { _id: req.session.userId, },
                { $pull: { items: req.params.id } },
                { new: true }
            );

            res.json(updatedUser);
        } catch (e) {
            console.log(e);
            res.status(500).json(e);
        }
    },
}

module.exports = itemRoutes;