const db = require('../config/connection');
const bcrypt = require('bcrypt');
const { User, Item } = require('../models');

const userData = require('./userData.json');
const itemData = require('./itemData.json')

const saltRounds = 10;

const salt = async (password) => {

  let saltedPass;

  const promise = new Promise((resolve) => {
    saltedPass = bcrypt.hash(password, saltRounds);
    setTimeout(() => {
      resolve(saltedPass);
    }, 300);
  });

  const returnVal = await promise;
  
  return returnVal;
}

const shaker = async () => {
  await Promise.all(userData.map(async (user) => {
    var before = user.password
    user.password = await salt(user.password);
    
    console.log("\nBefore: \n" + before);
    console.log("After: \n" + user.password + "\n");
  }))
}

db.once('open', async () => {
  await User.deleteMany({});
  await shaker();
  await User.insertMany(userData);

  console.log('Users seeded!');

  await Item.deleteMany({});
  await Item.insertMany(itemData);

  console.log('Items seeded!');

  const userIds = await User.find({}, '_id');
  const itemIds = await Item.find({}, '_id');

  for (let i = 0; i < itemData.length; i++) {
    await User.findOneAndUpdate (
      { _id: userIds[Math.floor(i / 2)]._id },
      { $push: { items: itemIds[i]._id } },
      { new: true }
    )
  }

  const users = await User.find({}).populate('items');
  
  console.log("\nFinal Users");

  for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
  }

  process.exit(0);
});
