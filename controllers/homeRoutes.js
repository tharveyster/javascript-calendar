const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  if (req.session.logged_in) {
    res.render("calendar", {
      logged_in: req.session.logged_in,
    });
  } else {
    res.render("signin");
  }
});

router.get("/signin", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("signin");
});

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

router.get("/create-event", (req, res) => {
  if (req.session.logged_in) {
    res.render("create-event");
  }
})

router.get('/create-event/:id', async (req, res) => {
  if (req.session.logged_in) {
    res.render("create-event");
  }
});

router.get("/event", withAuth, async (req, res) => {
  try {
    const eventData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Event }],
    });

    const event = eventData.get({ plain: true });

    res.render('event', {
      ...event,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
