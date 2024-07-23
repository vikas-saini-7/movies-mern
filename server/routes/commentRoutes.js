const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router.get("/", commentController.getComments);
router.post("/", commentController.createComment);
router.get("/:userId", commentController.getComments);
router.get("/movie/:itemId", commentController.getCommentsMovie);
router.get("/series/:itemId", commentController.getCommentsSeries);

module.exports = router;
