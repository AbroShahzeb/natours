import User from '../models/userModel.js';
import catchAsync from '../utils/catchAsync.js';
import AppError from '../utils/appError.js';

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

export const updateMe = catchAsync(async (req, res, next) => {
  const { password, passwordConfirm } = req.body;

  if (password || passwordConfirm) {
    return next(
      new AppError(
        'If you want to update password use /updatePassword route!',
        400
      )
    );
  }

  const filteredBody = filterObj(req.body, 'name', 'email');

  const updatedUser = await User.findByIdAndUpdate(req.user._id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser,
    },
  });
});

export const deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user._id, { active: false });

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

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
