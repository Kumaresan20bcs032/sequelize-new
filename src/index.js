const express = require("express");
const router = require("./routes/index");
const { dbConnection } = require("./db-config/postgres_connection");
const { sendSuccessResponse } = require("./utils/response_handler");

const app = express();


// call db configuration file.
dbConnection();

// allow incoming data as json.
app.use(express.json());
app.use("/api", router);


app.get("/", (req, res) => {
    return sendSuccessResponse(res, 200, "Application is working");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started at host http://localhost:${PORT}`);
});