const express = require("Express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const devCredits = require('./model/model.js');
const cors = require('cors');
const router = require('./routes/router.js');
require('dotenv').config();
const rateLimiter = require('./middleware/rateLimiter.js');

app.use(rateLimiter);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use(router);

app.listen(port, (req, res) => {
    console.log(`App is listening on : https://localhost:${port}`);
});