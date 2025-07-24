require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 4005;
const cors = require("cors");

app.use(require("morgan")("dev"));
app.use(express.json());
app.use(cors());
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/cards", require("./routes/cards"));
app.use("/api/orders", require("./routes/orders"));

connect();

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/gasAPI");
    console.log("conected to db");
    app.listen(PORT, () => {
      console.log(`server is listening on port ${PORT}`);
    });
  } catch (e) {
    console.log(e.message);
    return;
  }
}
