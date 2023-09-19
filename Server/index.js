const express = require("express");
const app = express();
const userRoutes = require("./Routes/User");

require("./db/db");
app.use(express.json());

app.use(userRoutes);

app.listen(process.env.PORT || 2700, () => {
  console.log("Server is running on Port: 2700");
});
