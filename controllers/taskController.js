const Task = require('../models/Task');

// Get all tasks for the landing page
exports.getLandingPage = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.render('home', { tasks });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.render('index', { tasks });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new task
exports.createTask = async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    dueDate: req.body.dueDate
  });

  try {
    const newTask = await task.save();
    res.redirect('/');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a single task by ID
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.render('task', { task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get edit task page
exports.getEditTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.render('edit', { task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an existing task
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.redirect('/');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.redirect('/');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
