const mongoose = require('mongoose');
mongoose.Promise = global.Promise; 

mongoose.connect('mongodb://localhost:27017/social-network-website', {useNewUrlParser: true}).then(() => {
  console.log('connected to db');
}).catch((err) => {
   console.log(err); 
});

mongoose.set('useCreateIndex', true);

module.exports = {
    mongoose
}