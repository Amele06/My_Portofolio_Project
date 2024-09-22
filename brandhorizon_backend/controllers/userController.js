const User = require('../models/User');

// Example of user creation in userController.js
// const createUser = async (req, res) => {
//   try {
//       const { name, email, password } = req.body;
//
//           // Check if the user already exists
//               const userExists = await User.findOne({ email });
//
//                   if (userExists) {
//                         return res.status(400).json({ message: 'User already exists' });
//                             }
//
//                                 // Create new user
//                                     const user = new User({ name, email, password });
//
//                                         // Save the user to the database
//                                             await user.save();
//
//                                                 res.status(201).json({ message: 'User created successfully', user });
//                                                   } catch (error) {
//                                                       res.status(500).json({ message: 'Error creating user', error });
//                                                         }
//                                                         };
//
//                                                         module.exports = { createUser };
//
