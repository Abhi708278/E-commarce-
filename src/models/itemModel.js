const mongoose = require("mongoose");
const slugify = require("slugify"); // Import slugify library

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true, // Ensure unique slugs for each item
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category", // Assuming you have a Category model
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discounted_price: {
      type: Number,
      default: null, // If not provided, it can be null
    },
    stock_quantity: {
      type: Number,
      required: true,
      min: 0, // Ensure stock quantity can't be negative
    },
    images: {
      type: [String], // Array of image filenames/URLs
      default: [],
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0, // Default rating
    },
    reviews_count: {
      type: Number,
      default: 0, // Default reviews count
    },
    created_at: {
      type: Date,
      default: Date.now, // Automatically sets to current date if not provided
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "out-of-stock"], // Status can be one of these values
      default: "active", // Default status is active
    },
  },
  {
    timestamps: true, // Mongoose will automatically add `created_at` and `updated_at` fields
  }
);

// Create slug before saving
itemSchema.pre("save", function (next) {
  if (this.name && !this.slug) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
  next();
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
