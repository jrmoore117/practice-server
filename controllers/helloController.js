module.exports = {

    // Say Hello
    sayHello: function (req, res) {
        res.json({
            "message": "Hello!"
        });
    },
  
    // Say Hello to X
    sayHelloToX: function (req, res) {
        res.json({
            "message": `Hello ${req.params.name}!`
        });
    }
  
};