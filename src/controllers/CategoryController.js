let categories = [
  { id: "1", name: "Electronics" },
  { id: "2", name: "Books" },
];

// Get all categories
exports.getCategories = (req, res) => {
  res.json(categories);
};

// Get a single category by ID
exports.getCategoryById = (req, res) => {
  const category = categories.find((cat) => cat.id === req.params.id);
  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }
  res.json(category);
};

// Create a new category
exports.createCategory = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }
  const newCategory = {
    id: String(categories.length + 1),
    name,
  };
  categories.push(newCategory);
  res.status(201).json(newCategory);
};

// Update a category
exports.updateCategory = (req, res) => {
  const { name } = req.body;
  const category = categories.find((cat) => cat.id === req.params.id);
  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }
  category.name = name;
  res.json(category);
};

// Delete a category
exports.deleteCategory = (req, res) => {
  const index = categories.findIndex((cat) => cat.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: "Category not found" });
  }
  const deleted = categories.splice(index, 1);
  res.json(deleted[0]);
};
