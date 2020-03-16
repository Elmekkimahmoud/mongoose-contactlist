const express = require ("express");
const mongoose=require("mongoose");
const cors=require('cors'); 
const bodyParser = require("body-parser");
const app=express();
app.use(bodyParser.json());
app.use(cors());
const MongoConfig= require("./config/database.js");
mongoose.connect(MongoConfig.url,{ useUnifiedTopology: true,useNewUrlParser: true } ).then(()=>console.log("server connected to the DB")).catch(()=>console.log("connection Error"));


const NoteRoute=require ("./routes/note_routes");
NoteRoute(app);










app.listen(4000, () => {
    console.log("Server is listen on port 4000");
  });