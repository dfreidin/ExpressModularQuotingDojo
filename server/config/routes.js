const mongoose = require("mongoose"),
    Quote = mongoose.model("Quote");
module.exports = function(app) {
    app.get("/", function(req, res){
        res.render("index");
    });
    app.post("/quotes", function(req, res){
        var quote = new Quote({name: req.body.name, quote: req.body.quote});
        quote.save(function(err){
            if(err) {
                res.render("index", {errors: quotes.errors});
            }
            else {
                res.redirect("/quotes");
            }
        });
    });
    app.get("/quotes", function(req, res){
        Quote.find({}, null, {sort: "-createdAt"}, function(err, quotes){
            res.render("quotes", {quotes: quotes});
        });
    });
}