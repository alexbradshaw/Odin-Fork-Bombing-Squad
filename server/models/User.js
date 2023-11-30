const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'], // Regex to validate the entry is a valid email
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: { 
      type: String,
      required: false,
    },
    items: [ // Array of Item _id's to refer to a user's active listings
      {
        type: Schema.Types.ObjectId, 
        ref: 'Item',
      }
    ],
    cart: [ // Array of Item _id's to refer to a user's cart
    {
      type: Schema.Types.ObjectId, 
      ref: 'Item',
    }
  ]
  },
);

userSchema.pre('save', async function (next) { // Method to hash password before saving to db
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  let compare = await bcrypt.compare(password, this.password); // Method to authenticate user
  return compare;
};

const User = model('User', userSchema);

module.exports = User;
