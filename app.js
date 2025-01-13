require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const itemRoutes = require("./src/routes/itemRoutes");
const categoryRoutes = require("./src/routes/CategoryRoutes"); // Import category routes
//const connectDB = require("./src/config/connectDB");
const connection = require('./src/db');
const cors = require("cors");

const app = express();





// Use CORS to allow requests from all origins
app.use(cors());


// Parse incoming JSON requests
app.use(express.json()); // This is necessary to parse JSON bodies

// Connect to MongoDB
//connectDB();

// Use routes for items and categories
app.use("/items", itemRoutes); // Item routes
app.use("/categories", categoryRoutes); // Category routes

// Product , add new product, see specific product, see all products, review of a product,
//  add review on a product, your products, your cart produtcts, my profile, 
// //  delete prduct, sucess, failed, 404, paymenty, address, edit profile, varify, otp , signup, login, home, bill, shopping, 


// let OtpType = "number";

// app.post('signup/',(req,res)=>{
//   //  take phone no, add, name, email, gender, button varify otp (on phone or email)

// if(req.body.otpType === 'email'){
//   OtpType = "email"
// }else{
//    OtpType = "number"
// }
// });


// app.post('otp/',(req,res)=>{
//   //  take otp in req.body;

//   if(OtpType === 'email'){
//     otp varifiation for email
//   }else{
//     otp varifiation for number

//   }


// });

// app.post('/createPass',(req,res)=>{
//   let {pass} = req.body;
//   let newPass = encode(pass);
//   id, pass -> Jwt token -> cookies store;
//   db.createUser(user);
//   // window.location.href = '/';

 
// });

// app.get('/',(req,res)=>{
//   // home page
 

// });

// app.get('catogory/:id',(req,res)=>{
//    // 

// });

// app.get('/products/type/:gender',(req,res)=>{
//   // show all products by varifyin gender (if availbel)
//   if(male){
//     databse male wale
//   }else {
//     fmale wale
//   }
// });

// app.get('/products/?age="20"&gender="male"',(req,res)=>{
//   // show all products by varifyin gender (if availbel)
//   if(male){
//     databse male wale
//   }else {
//     fmale wale
//   }
// });




const {test,a} = require('./auth');
test(app);
a(app);


module.exports = app;

