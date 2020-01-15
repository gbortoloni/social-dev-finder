const { Router } = require("express");

const router = Router();
const DevController = require("../controllers/DevController");

router.get("/devs", DevController.index);
router.get("/devs/:_id", DevController.show);
router.post("/devs", DevController.store);
router.put("/devs/:_id", DevController.update);
router.delete("/devs/:_id", DevController.destroy);

module.exports = router;
