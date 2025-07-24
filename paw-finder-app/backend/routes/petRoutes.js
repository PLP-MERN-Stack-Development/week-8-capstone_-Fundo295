const express = require('express');
const router = express.Router();
const Pet = require('../models/Pet');
const authMiddleware = require('../middleware/authMiddleware');

// @route   GET /api/pets
// @desc    Get all reported pets (public)
router.get('/', async (req, res) => {
  try {
    const pets = await Pet.find().sort({ createdAt: -1 });
    res.json(pets);
  } catch (err) {
    console.error('Error fetching pets:', err.message);
    res.status(500).json({ error: 'Failed to fetch pets' });
  }
});

// @route   GET /api/pets/mine
// @desc    Get pets reported by the logged-in user
// @access  Private
router.get('/mine', authMiddleware, async (req, res) => {
  try {
    const pets = await Pet.find({ reportedBy: req.user._id }).sort({ date: -1 });
    res.json(pets);
  } catch (err) {
    console.error('Error fetching user pets:', err.message);
    res.status(500).json({ error: 'Failed to fetch your pet reports' });
  }
});

// @route   GET /api/pets/filter
// @desc    Filter pets by status or type
// @access  Public
router.get('/filter', async (req, res) => {
  try {
    const { status, type } = req.query;
    const filter = {};

    if (status) filter.status = status;
    if (type) filter.type = type;

    const pets = await Pet.find(filter).sort({ date: -1 });
    res.json(pets);
  } catch (err) {
    console.error('Error filtering pets:', err.message);
    res.status(500).json({ error: 'Failed to filter pets' });
  }
});

// @route   POST /api/pets
// @desc    Report a lost/found pet (protected)
router.post('/', authMiddleware, async (req, res) => {
  try {
    const pet = new Pet({
      ...req.body,
      reportedBy: req.user._id,
    });

    await pet.save();
    res.status(201).json(pet);
  } catch (err) {
    console.error('Error creating pet:', err.message);
    res.status(400).json({ error: err.message });
  }
});

// @route   PUT /api/pets/:id
// @desc    Update a pet report (protected)
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);

    if (!pet) return res.status(404).json({ message: 'Pet not found' });

    if (pet.reportedBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to update this report' });
    }

    Object.assign(pet, req.body);
    const updatedPet = await pet.save();

    res.status(200).json(updatedPet);
  } catch (err) {
    console.error('Update error:', err.message);
    res.status(500).json({ error: 'Failed to update pet' });
  }
});

// @route   DELETE /api/pets/:id
// @desc    Delete a pet report (protected)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);

    if (!pet) return res.status(404).json({ message: 'Pet not found' });

    if (pet.reportedBy.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to delete this report' });
    }

    await pet.remove();
    res.status(200).json({ message: 'Pet report deleted' });
  } catch (err) {
    console.error('Delete error:', err.message);
    res.status(500).json({ error: 'Failed to delete pet' });
  }
});

module.exports = router;
