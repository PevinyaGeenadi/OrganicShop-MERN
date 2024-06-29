const ContactController = {
    submitContactDetails : (req, res) => {
        const requestBody
            = req.body;
        console.log(requestBody);
        res.send("Contact " +
            "details received!");
    }
}

module.exports = ContactController;
