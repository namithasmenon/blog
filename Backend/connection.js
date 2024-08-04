const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://namithasmenonb22cs1236:0481nami@cluster0.hg5wqaj.mongodb.net/projectdb?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
