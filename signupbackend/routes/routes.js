const express = require("express");
const router = express.Router();
const signUpTemplate = require("../models/SignUpModels");
router.post("/signup", (request, response) => {
    console.log("hello")
    response.send('send')

    const signedUpUser = new signUpTemplate({
        fullName: request.body.fullName,
        username: request.body.fullname,
        email: request.body.email,
        contact: request.body.contact,
    });
    signedUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
});

router.get('/signin')
module.exports = router