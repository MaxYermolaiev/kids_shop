const express = require('express');
const app = express();
const path = require("path");
const DB=require("mongoose");
const cors=require("cors");
const PORT = 5000;

function launchServer(){
    try{
      app.listen(PORT,()=>{
          console.log("server run")
      });
    }catch (e) {
        console.log(e)
    }
}
launchServer();