const express
    = require('express');
const router
    = express.Router();

router.post('/submit',(req, res) => {
    const requestBody
        = req.body;
    console.log(requestBody);
    res.send("Contact " +
        "details received!");
});
