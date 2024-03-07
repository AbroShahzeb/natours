import catchAsync from '../utils/catchAsync.js';
import Review from '../models/reviewModel.js';
import { deleteOne, updateOne, createOne, getAll } from './factoryHandler.js';

export const getAllReviews = getAll(Review);

export const deleteReview = deleteOne(Review);
export const updateReview = updateOne(Review);

export const setUserTourIds = (req, res, next) => {
  if (req.user._id) req.body.userBy = req.user._id;
  if (req.params.tourId) req.body.tourTo = req.params.tourId;
  next();
};

export const createReview = createOne(Review);
