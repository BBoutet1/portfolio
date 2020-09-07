const router = require("express").Router();
const emailRoute = require("./contact-mail.js");


// User routes
router.use(emailRoute);


module.exports = router;