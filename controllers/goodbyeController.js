module.exports = {

    // Say Goodbye
    sayGoodbye: function (req, res) {
        res.json({
            "message": "Goodbye!"
        });
    },
  
    // Say Goodbye to X
    sayGoodbyeToX: function (req, res) {
        res.json({
            "message": `Goodbye ${req.params.name}!`
        });
    }
  
};