const express = require("express");
const usersRoutes = require("./src/routes/users");
const middlewareLogRequest = require("./src/middleware/logs");
//
const app = express();
// NOTE: Middleware
app.use(middlewareLogRequest);

// NOTE: Routes
app.use("/users", usersRoutes);

// NOTE: Start Server
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
