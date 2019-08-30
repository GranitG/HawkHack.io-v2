const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {port, dburi} = require('./config/keys');
const passport = require("passport");

const app = express();

const users = require('./routes/api/user');
const profile = require('./routes/api/profile');
const admin = require('./routes/api/admin');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose
  .connect(
    dburi,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch(err => console.log(err));
mongoose.set('useFindAndModify', false);


//Passport middleware
app.use(passport.initialize());

//Passport Config
require("./config/passport")(passport);

//Use Routes
app.use("/api/u", users);
app.use("/api/p", profile);
app.use("/api/a", admin);
app.get("/api", (req, res)=>{
  res.status(200).json(require('config').get('Event'));
})

app.get('/', (req, res)=>{
  res.status(200).json("reached home");
});

app.listen(port ,()=>{
    console.log(`Server listening on port ${port}`);
});