const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
module.exports = function() {
    var models_path = path.join(__dirname, "../models");
    mongoose.connect("mongodb://localhost/quoting_dojo");
    fs.readdirSync(models_path).forEach(function(file){
        if(file.indexOf(".js") >= 0) {
            require(models_path + "/" + file)(mongoose);
        }
    });
};