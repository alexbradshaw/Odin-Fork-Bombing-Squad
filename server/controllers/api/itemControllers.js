const { Item, User } = require('../../models');

const itemRoutes = {
  async createItem(req, res) {
    try {
        if (!req.session.userId) {
            res.status(401).json({ message: "You are not signed in!"})
            return;
        }

        const newItem = await Item.create({
            ...req.body, // Includes existing items
            "owner":req.session.username // Pulls in authenticated user for owner
        });
      
        const updatedUser = await User.findOneAndUpdate (
          { _id: req.session.userId }, // Pulls authenticated users id
          { $push: { items: newItem._id} }, // Pushes new item id to our User's items array
          { runValidators: true, new: true } 
        ).populate('items'); // Pulls in items array before returning user (so the page will reflect new item generation)
  
        res.json(updatedUser); // Returns user object
    } catch (e) {
        console.log(e);
        res.status(500).json(e)
    }
    },
    async getAllItems(req, res) {
        try {
          const item = await Item.find({}).select('-__v'); // Finds all items (ignoring a weird field)
          res.json(item); // Return items
        } catch (e) {
          console.log(e);
          res.status(500).json(e);
        }
    },
    async getItem(req, res) {
        try {
            const item = await Item.findOne({ _id: req.params.id }); // Finds one item based on req.params variable

            if (!item) {
                res.status(404).json( { message: "Item not found!" });
                return;
            }

            res.json(item); // Return item
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

            const updatedItem = await Item.findOneAndUpdate( // Finds item by both id and current auth user to ensure they own the item
                { 
                    _id: req.params.id, // Pulls id from URL param
                    owner: req.session.username // Pulls username in based on authed user
                },
                { $set: req.body }, // Set item to request body
                { new: true } // Returns the updated item, false will return before update
            );

            if (!updatedItem) {
                res.status(404).json( { message: "Item not found under user!" });
                return;
            }

            res.json(updatedItem); // Return the modified item
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

            const deletedItem = await Item.findOneAndRemove( // Finds item by both id and current auth user to ensure they own the item
                { 
                    _id: req.params.id, // Pulls id from URL param
                    owner: req.session.username // Pulls username in based on authed user
                },
                { new: true } // Return updated item object (should be nothing)
            );

            if (!deletedItem) {
                res.status(404).json( { message: "Item not found under user!" });
                return;
            }

            const updatedUser = await User.findOneAndUpdate(
                { _id: req.session.userId, }, // Update by current authed user
                { $pull: { items: req.params.id } }, // Pull item from the array
                { new: true } // Return updated user object
            ).populate('items'); // Pull in new items array

            res.json(updatedUser); // Return user
        } catch (e) {
            console.log(e);
            res.status(500).json(e);
        }
    },
}

module.exports = itemRoutes;