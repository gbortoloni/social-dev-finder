const { Router } = require("express");

const router = Router();
const SearchController = require("../controllers/SearchController");

router.get("/search", SearchController.index);

module.exports = router;
