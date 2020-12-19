import express from "express";
import cors from "cors";
import helmet from "helmet";
import config from "dotenv";

import testRoutes from "./api/routes/testRoutes.js";

import testMiddleware from "./api/middleware/testMiddleware.js";

config.config();

var port = process.env.PORT || 8000;
var app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://127.0.0.1:5500",
  })
);
app.use(helmet());
app.use(express.json());

app.use("/api/test", testMiddleware, testRoutes);

app.get("*", (req, res) =>
  res.status(200).send({
    message: "This is the chatapp API, but this was not a valid route.",
  })
);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

/* database.sequelize.sync({ force: true }).then(() =>
  app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
  }),
); */
