const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/", (req, res) => res.send("test"));

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
