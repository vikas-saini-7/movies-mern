const Comment = require("../models/commentModel");

exports.getComments = async (req, res) => {
  try {
    const { userId } = req.params;

    const comments = await Comment.find({ user: userId });

    res.status(200).json({
      status: "success",
      results: comments,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Cannot get Comments",
    });
  }
};

exports.getCommentsMovie = async (req, res) => {
  try {
    const { itemId } = req.params;

    const comments = await Comment.find({ itemId, itemType: "movie" });

    res.status(200).json({
      status: "success",
      results: comments,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message || "Cannot get Comments",
    });
  }
};

exports.getCommentsSeries = async (req, res) => {
  try {
    const { itemId } = req.params;

    const comments = await Comment.find({ itemId, itemType: "series" });

    if (!comments) {
    }

    res.status(200).json({
      status: "success",
      results: comments,
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "Cannot get Comments",
    });
  }
};

exports.createComment = async (req, res) => {
  try {
    const { user, text, itemId, itemType } = req.body;

    if (itemType !== "movie" || itemType !== "series") {
      res.status(400).json({
        status: "fail",
        message: "itemType must be valid",
      });
    }

    const newComment = new Comment({ user, text, itemId, itemType });

    const savedComment = await newComment.save();

    res.status(200).json({
      status: "success",
      results: savedComment,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
