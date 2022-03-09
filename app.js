const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.use((req, res, next) => {
    console.log("Hello from the middleware!");
    next();
})

app.get('/', (req, res) => {
    res.status(200).json({
        status: "Success",
        message: "Welcome to project1!"
    })
})

app.listen(port, () => {
    console.log(`App is listeing on port ${port} ...`);
})