// routes/router.js
const { Router } = require("express");
const controller = require("../controllers/controller");
const router = Router();

// New message form
router.get("/new", controller.getNewMessage); 

router.post("/new", controller.postNewMessage);

// Message Details Page
router.get("/details/:id", controller.getDetails); 

router.get("/", controller.getMessages);

module.exports = router;
