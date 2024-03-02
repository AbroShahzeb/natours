import User from '../models/userModel.js';
import catchAsync from '../utils/catchAsync.js';

export const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    data: {
      users,
    },
  });
});
export const getUser = (req, res) => {
  res.status(500).json({
    status: 'fail',
    message: 'This endpoint not have been implemented yet.',
  });
};
export const createUser = (req, res) => {
  res.status(500).json({
    status: 'fail',
    message: 'This endpoint not have been implemented yet.',
  });
};
export const updateUser = (req, res) => {
  res.status(500).json({
    status: 'fail',
    message: 'This endpoint not have been implemented yet.',
  });
};
export const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'fail',
    message: 'This endpoint not have been implemented yet.',
  });
};
