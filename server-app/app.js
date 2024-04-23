const express = require("express");
const app = express();
require("./configs/userConfig");
const port = 5000;
const importRouter = require("./routes/userRouter");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(importRouter);
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
