const { Schema, model } = require('mongoose');

const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 50
    },
    description: {
      type: String,
      required: true,
      maxlength: 300
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    owner: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      min: 0,
      default: 1
    },
    image: {
      type: String,
      default: ""
    },
    categories: {
      type: [String]
    },
    date_created: {
      type: Date,
      default: Date.now,
    }
  },
  {
    id: false
  }
);


const Item = model('Item', itemSchema);

module.exports = Item;
