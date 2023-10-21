const db = require('../config/connection');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const userData = require('./userData.json');

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

  process.exit(0);
});
