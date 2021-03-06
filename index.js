const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
.then(() => {
  console.log('Connected to the database!');
})
.catch((err) => {
  console.log(err);
}); 
