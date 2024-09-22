const mongoose = require('mongoose');

// Create a schema for the User
// const userSchema = mongoose.Schema(
//   {
//       name: {
//             type: String,
//                   required: true,
//                       },
//                           email: {
//                                 type: String,
//                                       required: true,
//                                             unique: true,
//                                                 },
//                                                     password: {
//                                                           type: String,
//                                                                 required: true,
//                                                                     },
//                                                                       },
//                                                                         {
//                                                                             timestamps: true, // Automatically adds createdAt and updatedAt fields
//                                                                               }
//                                                                               );
//
//                                                                               // Create the User model using the schema
//                                                                               const User = mongoose.model('User', userSchema);
//
//                                                                               module.exports = User;
//
