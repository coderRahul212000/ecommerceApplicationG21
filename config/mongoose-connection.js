const mongoose = require('mongoose');

mongoose
.connect("mongodb+srv://admin:k11uJQoJHRU5CzPd@cluster0.nbgok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(function(){
    console.log("Connected to MongoDB");
})
.catch(function(err){
    console.log("Could not connect to MongoDB", err);
});

module.exports = mongoose.connection;
