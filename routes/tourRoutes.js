import express from "express";
import {
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
  getID,
} from "../controllers/tourController.js";

const router = express.Router();

router.param("id", getID);

function checkBody(req, res, next) {
  const { name, price } = req.body;
  if (!name || !price) {
    return res.status(400).json({
      status: "fail",
      message: "Bad request (request body required)",
    });
  }

  next();
}

router.route("/").get(getAllTours).post(createTour);
router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

export default router;
