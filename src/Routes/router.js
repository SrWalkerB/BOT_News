
const express = require("express");

const router = express.Router();


router.get("/news", (Request, Response) => {

    Response.status(200).json("Hello world")
})


module.exports = router;