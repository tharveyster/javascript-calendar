const router = require('express').Router();
const { Event } = require('../../models');
const withAuth = require('../../utils/auth');

// Create new event route
router.post('/', withAuth, async (req, res) => {
  try {
    const newEvent = await Event.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newEvent);
    console.log(newEvent)
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;