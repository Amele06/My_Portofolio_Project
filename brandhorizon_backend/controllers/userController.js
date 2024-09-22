const User = require('../models/User');

// @desc    Register a new user
// // @route   POST /api/users
// // @access  Public
// const registerUser = async (req, res) => {
//   const { name, email, password } = req.body;
//
//     const userExists = await User.findOne({ email });
//
//       if (userExists) {
//           res.status(400);
//               throw new Error('User already exists');
//                 }
//
//                   const user = await User.create({
//                       name,
//                           email,
//                               password,
//                                 });
//
//                                   if (user) {
//                                       res.status(201).json({
//                                             _id: user._id,
//                                                   name: user.name,
//                                                         email: user.email,
//                                                             });
//                                                               } else {
//                                                                   res.status(400);
//                                                                       throw new Error('Invalid user data');
//                                                                         }
//                                                                         };
//
//                                                                         module.exports = { registerUser };
//
