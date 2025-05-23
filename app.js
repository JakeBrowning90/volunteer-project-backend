require("dotenv").config();
const express = require("express");
const cors = require("cors");
//multer
//cloudinary
//streamifier

//expressSession
//passport
require("./middleware/passport");
const passport = require("passport");
// const LocalStrategy = require("passport-local").Strategy;
//jwt

const app = express();
app.use(cors());

// Passport to routes
app.use(passport.initialize());

// Parse form payloads and sets to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routers
// const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");
const schoolRouter = require("./routes/school");
const npoRouter = require("./routes/npo");
const opportunityRouter = require("./routes/opportunity");

// app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/school", schoolRouter);
app.use("/npo", npoRouter);
app.use("/opportunity", opportunityRouter);

// Fallback error route
// app.get("*", (req, res, next) => {
//   res.send("Not a route.");
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, "::", () => {
  console.log(`Listening on port ${PORT}.`);
});
