//NOTE: Importing Packages and Files
const express = require("express");
const usersRoutes = require("./src/routes/users");
const middlewareLogRequest = require("./src/middleware/logs");

// NOTE: Create Express App
const app = express();
app.use(middlewareLogRequest);
app.use(express.json());

// NOTE: Routes
app.use("/users", usersRoutes);

// NOTE: Start Server
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
