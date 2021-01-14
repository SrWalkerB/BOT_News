
const express = require("express");
const NewsControllers = require("../Controllers/NewsControllers");

const router = express.Router();


router.get("/news", NewsControllers.list_news_tecnologia);

router.get("/news/world", NewsControllers.list_news_word);


module.exports = router;