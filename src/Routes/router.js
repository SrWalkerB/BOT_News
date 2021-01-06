
const express = require("express");
const NewsControllers = require("../Controllers/NewsControllers");

const router = express.Router();


router.get("/news", NewsControllers.list_news);


module.exports = router;