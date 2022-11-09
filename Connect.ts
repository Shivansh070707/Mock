const express =require('express');
const mongoose =require('mongoose')
const app= express()


const start = async () => {
    try {
      await mongoose.connect(
        "mongodb+srv://debi:HZzRaT0O9fDhrIDj@demo-realm-app.oldhx.mongodb.net/?retryWrites=true&w=majority"
      );
      app.listen(3000, () => console.log("Server started on port 3000"));
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  start()
  