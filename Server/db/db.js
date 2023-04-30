const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://AyanNaseer:Ghost-67@combinedb.x23qgg7.mongodb.net/EcommerceStore?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connect Successfully"))
  .catch((err) => {
    console.log(err);
  });
