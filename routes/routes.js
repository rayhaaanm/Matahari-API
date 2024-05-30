const express = require("express");
const scrapController = require("../controller/scrapController");
const router = express.Router();
router.get("/", (req, res) => {
    res.status(200).json({
        "message": "Welcome to Matahari API server."
    })
});
router.post("/data-scrapper/:query", scrapController.makeScarp);
module.exports = router;