import express from 'express';
const router = express.Router({ mergeParams: true });

import {
  getAllReviews,
  createReview,
  deleteReview,
  updateReview,
  setUserTourIds,
} from '../controllers/reviewController.js';
import { protect, restrictTo } from '../controllers/authController.js';

router
  .route('/')
  .get(getAllReviews)
  .post(protect, restrictTo('user'), setUserTourIds, createReview);

router.use(restrictTo('admin'));
router.route('/:id').delete(deleteReview).patch(updateReview);

export default router;
