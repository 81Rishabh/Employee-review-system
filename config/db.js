const mongoose = require('mongoose');
const db = mongoose.connection;
mongoose.connect(`mongodb+srv://Rishabh8109:1Rishu8109@er-cluster.hxdx5rg.mongodb.net/E-Reviews`, {useNewUrlParser: true , useUnifiedTopology: true});

db.on('error' , function(err) {
   console.log("Error in conneting to mongodb");
});

db.once('open' , function() {
  console.log('Connected to mongodb.......✌️ ✌️ ✌️');
});