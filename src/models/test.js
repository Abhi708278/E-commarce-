const mongoose = require("mongoose");
const slugify = require("slugify"); // Import slugify library

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      
    },
    price: {
      type: Number,
    },
    des: {
      type: String,
      
    },
    id: {
      type:String,
    },
  },
  
);

const Item = mongoose.model("test", itemSchema);
module.exports = Item;
