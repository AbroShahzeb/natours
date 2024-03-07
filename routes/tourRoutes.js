import express from 'express';
import {
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
} from '../controllers/tourController.js';

import { protect, restrictTo } from '../controllers/authController.js';
import reviewRouter from '../routes/reviewRoutes.js';

const router = express.Router();

router.use('/:tourId/reviews', reviewRouter);

// router.param("id", getID);
router.route('/tour-stats').get(getTourStats);
router
  .route('/monthly-plan/:year')
  .get(protect, restrictTo('admin', 'tour-guide', 'guide'), getMonthlyPlan);

router.route('/top-5-cheap').get(aliasTopTours, getAllTours);
router
  .route('/')
  .get(getAllTours)
  .post(protect, restrictTo('admin', 'tour-guide'), createTour);
router
  .route('/:id')
  .get(getTour)
  .patch(protect, restrictTo('admin', 'lead-guide'), updateTour)
  .delete(protect, restrictTo('admin', 'lead-guide'), deleteTour);

export default router;
