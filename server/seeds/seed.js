const db = require('../config/connection');
const bcrypt = require('bcrypt');
const { User, Item } = require('../models');

const userData = require('./userData.json'); // Pulls in user data
const itemData = require('./itemData.json'); // Pulls in item data

const saltRounds = 10;

const salt = async (password) => {

  let saltedPass; // Initialize variable

  const promise = new Promise((resolve) => {
    saltedPass = bcrypt.hash(password, saltRounds); // Hash password
    setTimeout(() => {
      resolve(saltedPass); // Resolve after 300ms because the await previously was not awaiting 
    }, 300);
  });

  const returnVal = await promise; // Set up return var that holds promise
  
  return returnVal; // Return promise
}

const shaker = async () => {
  await Promise.all(userData.map(async (user) => { // Set up promises for all the items in this map
    var before = user.password // Instantiate before var for the console log
    user.password = await salt(user.password); // Run password through salt function
    
    console.log("\nBefore: \n" + before); // Log before
    console.log("After: \n" + user.password + "\n"); // And after so you can ensure it was hashed
  }))
}

db.once('open', async () => {
  await User.deleteMany({}); // Remove any current users
  await shaker(); // Hash the password
  await User.insertMany(userData); // Insert the users, insertMany skips our pre method (to hash the pass before save)

  console.log('Users seeded!');

  await Item.deleteMany({}); // Delete any existing items
  await Item.insertMany(itemData); // Insert new items

  console.log('Items seeded!');

  const userIds = await User.find({}, '_id'); // Find all user _ids
  const itemIds = await Item.find({}, '_id'); // Find all item _ids

  for (let i = 0; i < itemData.length; i++) { // For all the items that should have been inserted
    await User.findOneAndUpdate ( // Update each user
      { _id: userIds[Math.floor(i / 4)]._id }, // By the User.find array _id
      { $push: { items: itemIds[i]._id } }, // Insert each item that should be under your user
      { new: true }
    )
  }

  const users = await User.find({}).populate('items'); // Get the final inserted users list with the items array populated (otherwise it's just _ids)
  
  console.log("\nFinal Users");

  for (let i = 0; i < users.length; i++) {
    console.log(users[i]); // Console log out each user so it doesn't end up as Object Object
  }

  process.exit(0);
});
