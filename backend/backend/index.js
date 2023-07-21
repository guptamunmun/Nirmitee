const express = require('express');

const route = require('./route/route');
const mongoose  = require('mongoose');
const app = express();

app.use(express.json())
app.use(multer().any())



mongoose.connect("mongodb+srv://funupdb-first:VxaFh8Uez4zyv95l@cluster0.kizeuyb.mongodb.net/group33Database?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/api', route);
app.all("/*", function (req, res) {
    res.status(400).send({ status: false, message: "invalid http request" });
  });



app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
});