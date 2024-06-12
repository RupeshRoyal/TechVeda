// Import the required modules
const express = require("express")
const router = express.Router()

// Import the required controllers and middleware functions
const {
  login,
  signup,
  sendotp,
  changePassword,
} = require("../controllers/Auth")
const {
  resetPasswordToken,
  resetPassword,
} = require("../controllers/resetPassword")

const { auth } = require("../middleware/auth")

// Routes for Login, Signup, and Authentication

// ********************************************************************************************************
//                                      Authentication routes
// ********************************************************************************************************

// Route for user login
router.post("/login", function(req,res){
  login
})

// Route for user signup
router.post("/signup", function(req,res){
  signup
})

// Route for sending OTP to the user's email
router.post("/sendotp", function(req,res){
  sendotp
})

// Route for Changing the password
router.post("/changepassword", 
function(req,res){
  auth, changePassword
}
)

// ********************************************************************************************************
//                                      Reset Password
// ********************************************************************************************************

// Route for generating a reset password token
router.post("/reset-password-token", function(req,res){
  resetPasswordToken
})

// Route for resetting user's password after verification
router.post("/reset-password", function(req,res){
  resetPassword
})

// Export the router for use in the main application
module.exports = router
